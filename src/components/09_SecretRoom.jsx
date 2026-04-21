export default function SecretRoom({ question, answer, handleAnswer }) {
  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-gray-500 w-[90%]">
      <h1>Secret Room</h1>
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
