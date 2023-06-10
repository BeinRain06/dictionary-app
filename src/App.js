/* import logo from "./logo.svg"; */
import "./App.css";
import SearchBar from "./components/SearchBar";
import MeaningsBox from "./components/MeaningsBox";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [word, setWord] = useState("leave");
  const [isLoading, setLoading] = useState(false);
  const [dataWord, setDataWord] = useState([]);
  const [count, setCount] = useState(0);
  let title = "Dictionary";

  const handleWordChange = (e) => {
    e.preventDefault();
    if (e.target.value !== "") {
      setWord(e.target.value.toLowerCase().trim());
      // title = word.charAt(0).toUpperCase() + word.slice(1);
    }
  };

  const handleCount = () => {
    setCount(count + 1);
  };

  const fetchDictionnaryWord = async () => {
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      /* const results = response.data; */
      console.log("dico data :", response.data);

      /* setDataWord(results); */
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // perform some actions
    setLoading(true);
    setTimeout(() => {
      fetchDictionnaryWord();
    }, 620);

    setLoading(false);
  }, [count]);

  return (
    <div className="App">
      <div className="App_container">
        <SearchBar
          title={title}
          handleWordChange={handleWordChange}
          handleCount={handleCount}
        />
        <MeaningsBox isLoading={isLoading} dataWord={dataWord} />
      </div>
    </div>
  );
}

export default App;
