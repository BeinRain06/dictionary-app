/* import logo from "./logo.svg"; */
import "./App.css";
import SearchBar from "./components/SearchBar";
import MeaningsBox from "./components/MeaningsBox";
import Loading from "./loading/Loading";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [word, setWord] = useState("bill");
  const [isLoading, setLoading] = useState(false);
  const [dataWord, setDataWord] = useState([]);
  /*  const [count, setCount] = useState(0); */
  let title = "Dictionary";
  let searchItem = "";

  const handleWordChange = (e) => {
    e.preventDefault();
    if (e.target.value !== "") {
      searchItem = e.target.value.toLowerCase().trim();
      // title = word.charAt(0).toUpperCase() + word.slice(1);
    }
  };

  const handleRenderChange = (e) => {
    e.preventDefault();
    setWord(searchItem);
  };

  const fetchDictionnaryWord = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      console.log("dico data:", response.data);
      const results = await response.data;
      setDataWord(results);

      setTimeout(() => {
        setLoading(false);
      }, 500);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // perform some actions

    fetchDictionnaryWord();
  }, [word]);

  return (
    <div className="App">
      <div className="App_container">
        <SearchBar
          title={title}
          handleWordChange={handleWordChange}
          handleRenderChange={handleRenderChange}
        />
        <MeaningsBox dataWord={dataWord} word={word} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App;
