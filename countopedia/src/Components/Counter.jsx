import React, { useState } from "react";
import attachImg from "../Image/attack.png";
import defendImg from "../Image/defend.png";

const Counter = () => {
  let [count, setCount] = useState(0);
  let [lastplay, setLastplay] = useState("");
  let [result, setResult] = useState("");
  //attack function
  const attack = () => {
    setCount((preCount) => {
        const newCount = preCount + Math.round(Math.random() * 10);
        gameResult(newCount);
        return newCount;
      });
    setLastplay((prePlay) => "Attack");
  };
  //defend function
  const defend = () => {
    setCount((preCount) => {
      const newCount = preCount - Math.round(Math.random() * 10);
      gameResult(newCount);
      return newCount;
    });
    setLastplay((prePlay) => "Defend");
    
  };
  //Update gameResult
  const gameResult = (newCount) => {
    if (newCount >= 10) {
      setResult((preRes) => "Winner 🥇");
    }
    else if (newCount <= -10) {
      setResult((preRes) => "Looser 😒");
    }
    else{
        setResult("");
    }

  };
  //randomplay function
  const randomPlay = () => {
    let randomBit = Math.round(Math.random());
    if (randomBit == 1) {
      attack();
    } else {
      defend();
    }
  };

  //reset function
  const resetCounter = () => {
    setCount(0);
    setLastplay("");
    setResult("");
  };
  //HTML
  return (
    <div className="container-fluid">
      <div className="row text-white ">
        <h1>Game Score: {count} </h1>
        <p>You win at +10 points and lose at -10 points!</p>
        <p>Last Play: {lastplay}</p>
        <h3>Game Status : {result}</h3>
        <div className="col-6 col-md-3">
          <img style={{width: "100%",cursor: "pointer",border: "1px solid green",}} className="p-4 rounded" src ={attachImg}   onClick={attack} />
        </div>
        <div className="col-6 col-md-3">
          <img style={{width: "100%",cursor: "pointer",border: "1px solid green",}} className="p-4 rounded" src ={defendImg}   onClick={defend} />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-6 col-md-3 ">
          <button className="btn btn-secondary w-100" onClick={randomPlay}>
            Random Play
          </button>
        </div>
        <div className="col-6 col-md-3">
          <button className="btn btn-warning w-100" onClick={resetCounter}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;