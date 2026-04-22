import { useState } from "react";

export default function SecretRoom({ question, answer, handleAnswer }) {
  const [isDoorOpen, setIsDoorOpen] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-gray-500 w-[90%]">
      <h1>Secret Room</h1>

      <button
        onClick={() => setIsDoorOpen(!isDoorOpen)}
        className="bg-black text-white px-4 py-2 rounded"
      >
        {isDoorOpen ? "Close Door" : "Open Door"}
      </button>

      <p className="text-white">
        Door status: {isDoorOpen ? "Open" : "Closed"}
      </p>

      <p>
        Message form outside::
        <span className="text-yellow-300">
          {/*question or waiting a message*/}
          {question ? question : " Waiting for your message..."}
        </span>
      </p>
      <textarea
        value={answer}
        onChange={handleAnswer}
        className="bg-white text-black rounded px-2 py-1"
        placeholder="Type your message here..."
      />
      <p className="text-green-300">
        Reply to the outside:{" "}
        <span className="text-yellow-300">
          {/* reply content */}
          {answer ? answer : " Waiting for your reply..."}
        </span>
      </p>
    </div>
  );
}
