import "./MeaningsBox.css";
import Meaning from "./Meaning";
/* import Loading from "../loading/Loading"; */

function MeaningsBox({ dataWord }) {
  return (
    <div className="meanings_container col-10 col-md-8">
      <div className="meanings_content">
        <div className="word_welcome col-8 col-md-7">
          <p className="word-entered">{dataWord.word}</p>
          <p className="origin_word">Origin: {dataWord.origin} </p>
        </div>
        <ul className="wrap_meaning">
          {dataWord.map((item, index) => (
            <li key={index} className="call_meaning">
              <Meaning item={item} id={index} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MeaningsBox;
