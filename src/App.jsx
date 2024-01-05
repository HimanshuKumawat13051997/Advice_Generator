import React, { useEffect, useState } from "react";
import "./App.css";
import { Quote } from "./Quote";
import { Button } from "./button";
import { Upper } from "./upper";
import "./anie.css";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showQuote, setShowQuote] = useState(true);

  useEffect(() => {
    getQuotes();
  }, []);

  function getQuotes() {
    setQuotes([]);
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        setQuotes(data);
      })
      .catch(() => {});
  }

  function getNextQuote() {
    setShowQuote(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
      setShowQuote(true);
    }, 500);
  }
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-[#1f2632]">
      <div className="flex flex-col items-center justify-around h-72 w-[95vw] sm:w-[500px] bg-[#4e5d73] rounded-[10px]">
        <Upper passed={currentIndex} />
        <div className="h-36 w-[85vw] sm:w-[400px] flex items-center justify-center">
          {quotes.length > 0 && (
            <Quote
              text={quotes[currentIndex].text}
              author={quotes[currentIndex].author}
              p={showQuote}
            />
          )}
        </div>
        <div className="bg-[url('../images/pattern-divider-mobile.svg')] sm:bg-[url('../images/pattern-divider-desktop.svg')] bg-no-repeat h-[20px] w-[295px] sm:w-[444px] flex flex-col items-center justify-center"></div>
        <Button pass={{ getNextQuote }} />
      </div>
      <div className="attribution relative top-[50px]">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>
  );
}

export default App;
