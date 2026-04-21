import { useState } from "react";
import Castle from "./components/01_Castle";

export default function App() {
  // creating state variables

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleQuestion = (e) => {
    setQuestion(e.target.value);
  };
  const handleAnswer = (e) => {
    setAnswer(e.target.value);
  };

  return (
    <div className="pb-80 py-10 gap-y-4 flex flex-col justify-center items-center min-h-screen bg-gray-800 text-white">
      <p>
        Message for JSD12:
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
      <Castle question={question} answer={answer} handleAnswer={handleAnswer} />
    </div>
  );
}
