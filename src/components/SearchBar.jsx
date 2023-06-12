import "./SearchBar.css";

function SearchBar({ title, handleWordChange, handleRenderChange }) {
  return (
    <div className="search_container col-10 col-md-8">
      <div className="search_content">
        <h1 className="title_search_bar">{title}</h1>
        <form className="form_control">
          <input
            type="text"
            name="word"
            className="word_searched"
            placeholder="Enter a word ..."
            onChange={handleWordChange}
          />
          <button
            className="btn_wrapper d-flex flex-center"
            onClick={handleRenderChange}
          >
            <i className="bi bi-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
