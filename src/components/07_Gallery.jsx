import Nook from "./08_nook";

export default function Gallery({ question, answer, handleAnswer }) {
  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-yellow-500 w-full">
      <h1>Gallery</h1>
      <Nook question={question} answer={answer} handleAnswer={handleAnswer} />
    </div>
  );
}
