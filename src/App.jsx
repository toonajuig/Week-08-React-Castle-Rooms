import { useContext, useEffect, useState } from "react";
import Castle from "./components/01_Castle";
import Navbar from "./components/navbar";
import { MessageContext } from "./contexts/messageContexts/MessageContext";
import SimpleProAsyncAwait from "./examples/async/SimpleProAsyncAwait";

const HELP_MESSAGE = "HELP ME";

function HomePanel() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-10">
      <div className="rounded-lg border border-slate-700 bg-slate-800 p-8 text-center">
        <h2 className="text-4xl font-bold text-white">React State Examples</h2>
        <p className="mt-4 text-slate-300">
          Use the navbar to open each example page.
        </p>
        <p className="mt-2 text-slate-300">
          The Castle Rooms section will show the room components and message
          example.
        </p>

        <div className="mt-8 grid gap-4 text-left md:grid-cols-3">
          <div className="rounded-lg bg-slate-700 p-4">
            <p className="font-bold text-yellow-300">Home</p>
            <p className="mt-2 text-sm text-slate-200">
              This page is the main page.
            </p>
          </div>
          <div className="rounded-lg bg-slate-700 p-4">
            <p className="font-bold text-sky-300">Castle Rooms</p>
            <p className="mt-2 text-sm text-slate-200">
              This page shows the castle room project.
            </p>
          </div>
          <div className="rounded-lg bg-slate-700 p-4">
            <p className="font-bold text-green-300">Other Tabs</p>
            <p className="mt-2 text-sm text-slate-200">
              Counter, Toggle and Form are simple practice components.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CounterPanel() {
  const [count, setCount] = useState(0);

  return (
    <section className="mx-auto w-full max-w-xl px-4 py-12">
      <div className="rounded-lg border border-slate-700 bg-slate-800 p-8 text-center">
        <p className="text-sm text-sky-300">Counter Demo</p>
        <p className="mt-4 text-6xl font-bold text-white">{count}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => setCount((value) => value - 1)}
            className="rounded-md bg-slate-700 px-5 py-3 font-medium text-white"
          >
            Decrease
          </button>
          <button
            type="button"
            onClick={() => setCount(0)}
            className="rounded-md bg-yellow-300 px-5 py-3 font-semibold text-slate-950"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={() => setCount((value) => value + 1)}
            className="rounded-md bg-slate-700 px-5 py-3 font-medium text-white"
          >
            Increase
          </button>
        </div>
      </div>
    </section>
  );
}

function TogglePanel() {
  const [enabled, setEnabled] = useState(true);

  return (
    <section className="mx-auto w-full max-w-xl px-4 py-12">
      <div className="rounded-lg border border-slate-700 bg-slate-800 p-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-green-300">Toggle Demo</p>
            <h2 className="mt-3 text-3xl font-bold text-white">
              {enabled ? "Lights are on" : "Lights are off"}
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setEnabled((value) => !value)}
            className={`flex h-14 w-24 items-center rounded-full p-2 ${
              enabled ? "bg-green-400" : "bg-slate-600"
            }`}
          >
            <span
              className={`h-10 w-10 rounded-full bg-white ${
                enabled ? "translate-x-10" : ""
              }`}
            />
          </button>
        </div>
        <p className="mt-6 text-slate-300">This example uses true and false.</p>
      </div>
    </section>
  );
}

function FormPanel() {
  const [name, setName] = useState("");

  return (
    <section className="mx-auto w-full max-w-xl px-4 py-12">
      <div className="rounded-lg border border-slate-700 bg-slate-800 p-8">
        <p className="text-sm text-pink-300">Form Demo</p>
        <label className="mt-6 block text-sm font-medium text-slate-200">
          Your name
        </label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Type your name..."
          className="mt-2 w-full rounded-md border border-slate-600 bg-slate-700 px-4 py-3 text-white outline-none"
        />
        <div className="mt-6 rounded-lg bg-slate-700 p-5 text-slate-200">
          {name ? `Hello ${name}` : "Your text will show here."}
        </div>
      </div>
    </section>
  );
}

function CastlePanel({
  answer,
  error,
  handleQuestion,
  isHelpMessage,
  loading,
  pokemon,
  question,
}) {
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6 px-4 py-10">
      <div className="w-full rounded border border-slate-600 bg-slate-800 p-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold text-yellow-300">Message for Outside</p>
            <p className="mt-3 text-2xl text-white">
              {question || "Waiting for your message..."}
            </p>
            <textarea
              value={question}
              onChange={handleQuestion}
              className="mt-4 min-h-24 w-full rounded border border-slate-500 bg-slate-700 px-4 py-3 text-white"
              placeholder="Type your message here..."
            />
          </div>

          <div>
            <p className="text-sm font-bold text-green-300">Reply from Secret Room</p>
            <p className="mt-3 text-2xl text-white">
              {answer || "Waiting for a reply..."}
            </p>

            {!isHelpMessage && (
              <p className="mt-4 rounded bg-slate-700 px-4 py-3 text-sm text-white">
                Type <span className="font-bold text-yellow-300">HELP ME</span>{" "}
                in Secret Room to summon a Pokemon outside.
              </p>
            )}

            {loading && (
              <p className="mt-4 rounded bg-slate-700 px-4 py-3 text-sm text-white">
                Secret Room sent a rescue signal. Summoning Pokemon...
              </p>
            )}

            {error && (
              <p className="mt-4 rounded bg-slate-700 px-4 py-3 text-sm text-red-200">
                Pokemon summon failed: {error}
              </p>
            )}

            {pokemon && !loading && !error && (
              <div className="mt-4 flex flex-col items-center rounded bg-slate-700 px-6 py-4 text-center">
                <p className="text-sm text-white">A Pokemon answered the call</p>
                {pokemon.image && (
                  <img
                    src={pokemon.image}
                    alt={pokemon.name}
                    className="h-28 w-28 object-contain"
                  />
                )}
                <p className="text-2xl font-bold capitalize text-yellow-300">{pokemon.name}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Castle />
      <SimpleProAsyncAwait />
    </section>
  );
}

export default function App() {
  const { question, answer, handleQuestion } = useContext(MessageContext);
  const [activeTab, setActiveTab] = useState("home");

  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const isHelpMessage = answer.trim().toUpperCase() === HELP_MESSAGE;

  useEffect(() => {
    const currentPage = activeTab.charAt(0).toUpperCase() + activeTab.slice(1);
    document.title = `React Example | ${currentPage}`;
  }, [activeTab]);

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

  const renderActivePanel = () => {
    switch (activeTab) {
      case "castle":
        return (
          <CastlePanel
            answer={answer}
            error={error}
            handleQuestion={handleQuestion}
            isHelpMessage={isHelpMessage}
            loading={loading}
            pokemon={pokemon}
            question={question}
          />
        );
      case "counter":
        return <CounterPanel />;
      case "toggle":
        return <TogglePanel />;
      case "form":
        return <FormPanel />;
      case "home":
      default:
        return <HomePanel />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-800 text-white">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      {renderActivePanel()}
    </div>
  );
}
