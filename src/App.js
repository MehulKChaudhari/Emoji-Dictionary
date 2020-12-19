import React, { useState } from "react";
import "./styles.css";

import { emojiDictionary } from "./database";

var emojiInDatabase = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  var [emoji, setemoji] = useState("");

  function inputChangeHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in you data";
      emoji = "";
    }
    setMeaning(meaning);
    setemoji(emoji);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
    setemoji(emoji);
  }

  return (
    <div className="App">
      <h1 className="heading">Emoji Dictionary</h1>
      <div>You can find meaning of some most used emoticons.</div>
      <input
        onChange={inputChangeHandler}
        placeholder="Enter emoji you want to know meaning or copy paste it "
      />
      <h4 className="emoji-opt">
        
        meaning of emoji here !
      </h4>
      <h2 className="Final-opt">
       
        {emoji} {meaning}
      </h2>

      <h3>Emojis we know </h3>
      <div className="itemList">
        {emojiInDatabase.map(function (emoji) {
          return (
            <span
              className="emoji-select"
              onClick={() => emojiClickHandler(emoji)}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
