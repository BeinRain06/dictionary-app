import "./Meaning.css";

function Meaning({ item, id }) {
  const displaySynonyms = () => {
    const synonyms = item.meanings[0].synonyms;
    if (synonyms.length > 0) {
      synonyms
        .map(
          (item, index) =>
            synonyms.length > 0 && (
              <li className="syno_item">{` ` + item + `, `} </li>
            )
        )
        .slice(-1);
    }
  };

  return (
    <div className="sample_meaning_container">
      <div className="meaning_content">
        <div className="about_speech d-flex flex-column">
          <h3 className="speech_title">`Meaning {id + 1}`</h3>
          <p className="speech_specification">
            <span className="specif_left">Part Of Speech : </span>
            <span className="specif_right">
              {" " +
                item.meanings[0].partOfSpeech.charAt(0).toUpperCase() +
                item.meanings[0].partOfSpeech.slice(1)}
            </span>
          </p>
        </div>
        <div className="all_over_definitions">
          <ul className="def_wrapper">
            {item.meanings[0].definitions.map((item, index) => (
              <li key={index} className="inner_define">
                <div className="box_def d-flex flex-column">
                  <span className="order_selection">{index + 1}</span>
                  <p className="definition ">{item.definition}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="others">
          <div className="some_others_features">
            <div className="examples">
              <p className="show_eg_title">Examples</p>
              <ul className="examples_wrapper d-flex flex-column">
                {item.meanings[0].definitions.map(
                  (item, index) =>
                    item.example !== undefined && (
                      <li key={index} className="sample_example">
                        {item.example}
                      </li>
                    )
                )}
              </ul>
            </div>
            <ul className="synonyms_wrapper d-flex flex-column">
              <p className="synonyms_title">Synonyms</p>
              {() => displaySynonyms()}
            </ul>
          </div>
        </div>

        <div className="src_url d-flex justify-content-center">
          <p className="src_website" style={{ padding: "10px 0" }}>
            {item.sourceUrls[0]}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Meaning;
