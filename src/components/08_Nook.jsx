import SecretRoom from "./09_SecretRoom";

export default function Nook({ question, answer, handleAnswer }) {
  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-purple-500 w-full">
      <h1>Nook</h1>
      <SecretRoom
        question={question}
        answer={answer}
        handleAnswer={handleAnswer}
      />
    </div>
  );
}
