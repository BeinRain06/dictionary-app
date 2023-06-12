import "./MeaningsBox.css";
import React from "react";
import Meaning from "./Meaning";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Loading from "../loading/Loading";

function MeaningsBox({ dataWord, word, isLoading }) {
  return (
    <div className="meanings_container col-11 col-md-8">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="meanings_content">
          <div className="word_welcome col-10 col-md-7">
            <p className="word-entered">{word}</p>
          </div>
          <div id="wrap_meaning" className="wrap_meaning snaps_inline ">
            <Carousel>
              {dataWord.map((item, index) => (
                <div key={index} className="call_meaning" data-toggle={index}>
                  <Meaning key={index} item={item} id={index} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      )}
    </div>
  );
}

export default MeaningsBox;
