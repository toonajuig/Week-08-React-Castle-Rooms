import { useEffect, useState } from "react";
import Castle from "./components/01_Castle";
import SimpleProAsyncAwait from "./examples/async/SimpleProAsyncAwait";

const HELP_MESSAGE = "HELP ME";

export default function App() {
  // creating state variables

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const isHelpMessage = answer.trim().toUpperCase() === HELP_MESSAGE;

  const handleQuestion = (e) => {
    setQuestion(e.target.value);
  };
  const handleAnswer = (e) => {
    setAnswer(e.target.value);
  };

  useEffect(() => {
    document.title = question ? `Outside: ${question}` : "Castle";
  }, [question]);

  useEffect(() => {
    if (!isHelpMessage) {
      setPokemon(null);
      setLoading(false);
      setError("");
      return;
    }

    let isCurrent = true;

    const fetchPokemon = async () => {
      try {
        setLoading(true);
        setError("");
        setPokemon(null);

        const randomPokemonId = Math.floor(Math.random() * 151) + 1;
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`,
        );

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        if (!isCurrent) {
          return;
        }

        setPokemon({
          name: data.name,
          image:
            data.sprites.other["official-artwork"].front_default ||
            data.sprites.front_default,
        });
      } catch (err) {
        if (!isCurrent) {
          return;
        }

        setError(err.message);
      } finally {
        if (isCurrent) {
          setLoading(false);
        }
      }
    };

    fetchPokemon();

    return () => {
      isCurrent = false;
    };
  }, [isHelpMessage]);

  return (
    <div className="pb-80 py-10 gap-y-4 flex flex-col justify-center items-center min-h-screen bg-gray-800 text-white">
      <p>
        Message for Outside:
        <span className="text-yellow-300">
          {/*question or waiting a message*/}
          {question ? question : " Waiting for your message..."}
        </span>
      </p>
      <textarea
        value={question}
        onChange={handleQuestion}
        className="bg-white text-black rounded px-2 py-1"
        placeholder="Type your message here..."
      />
      <p className="text-green-300">
        Reply from Secret Room:{" "}
        <span className="text-yellow-300">
          {/* reply content */}
          {answer ? answer : " Waiting for a reply..."}
        </span>
      </p>

      {!isHelpMessage && (
        <p className="text-sm text-red-100">
          Type <span className="font-bold">HELP ME</span> in Secret Room to
          summon a Pokemon outside.
        </p>
      )}

      {loading && (
        <p className="text-sm text-yellow-100 animate-pulse">
          Secret Room sent a rescue signal. Summoning Pokemon...
        </p>
      )}

      {error && (
        <p className="text-sm text-red-100">Pokemon summon failed: {error}</p>
      )}

      {pokemon && !loading && !error && (
        <div className="flex flex-col items-center rounded-xl bg-red-700/40 px-6 py-4">
          <p className="text-sm text-yellow-100">A Pokemon answered the call</p>
          {pokemon.image && (
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className="h-28 w-28 object-contain"
            />
          )}
          <p className="text-2xl font-bold capitalize text-yellow-200">
            {pokemon.name}
          </p>
        </div>
      )}

      <Castle question={question} answer={answer} handleAnswer={handleAnswer} />
      <SimpleProAsyncAwait />
    </div>
  );
}
