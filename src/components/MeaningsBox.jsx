import "./MeaningsBox.css";
import Meaning from "./Meaning";
/* import Loading from "../loading/Loading"; */

function MeaningsBox({ dataWord, word }) {
  return (
    <div className="meanings_container col-10 col-md-8">
      <div className="meanings_content">
        <div className="word_welcome col-8 col-md-7">
          <p className="word-entered">{word}</p>
        </div>
        <ul className="wrap_meaning">
          <button className="icon_left">
            <i className="bi bi-chevron-left"></i>
          </button>
          <button className="icon_right">
            <i className="bi bi-chevron-right"></i>
          </button>
          {dataWord.map((item, index) => (
            <li key={index} className="call_meaning" data-toggle={index}>
              <Meaning key={index} item={item} id={index} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MeaningsBox;
