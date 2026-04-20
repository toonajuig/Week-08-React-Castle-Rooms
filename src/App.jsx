import Castle from "./components/Castle";

export default function App() {
  return (
    <div className="pb-80 py-10 gap-y-4 flex flex-col justify-center items-center min-h-screen bg-gray-800 text-white">
      <p>
        Message for JSD12:
        <span className="text-yellow-300">
          {/*question or waiting a message*/}
        </span>
      </p>
      <textarea
        value="banana"
        onChange={() => {}}
        className="bg-white text-black rounded px-2 py-2"
        placeholder="Type your message here..."
      />
      <p className="text-green-300">
        Reply from Secret Room:{" "}
        <span className="text-yellow-300">{/* reply content */}</span>
      </p>
      <Castle />
    </div>
  );
}
