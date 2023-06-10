import "./Meaning.css";

function Meaning({ item, id }) {
  return (
    <div className="sample_meaning_container">
      <div className="meaning_content">
        <button className="icon_left">
          <i className="bi bi-chevron-left"></i>
        </button>
        <button className="icon_right">
          <i className="bi bi-chevron-right"></i>
        </button>
        <div className="about_speech d-flex flex-column">
          <h3 className="speech_title">`Meaning {id + 1}`</h3>
          <p className="speech_specification">
            <span className="specif_left">Part Of Speech :</span>
            <span className="specif_right">
              {item.meanings[0].partOfSpeech}
            </span>
          </p>
        </div>
        <div className="all_over_definitions">
          <ul className="def_wrapper">
            {item.meanings[0].definitions.map((item, index) => (
              <li key={index} className="inner_define">
                <div className="box_def d-flex flex-column">
                  <span className="order_selection">{index + 1}</span>
                  <p className="definition">{item}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="src_url d-flex flex-center">
          <p className="src_website" style={{ htmlColor: "#fff" }}>
            {item.sourceUrls[0]}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Meaning;
