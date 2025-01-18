import React from "react";
import {useParams} from "react-router-dom";

function Crypto() {
  const {symbol,id} = useParams();

  return <div className="text-light">
  Crypto
    <p> Symbols : {symbol} </p>
    <p> ID : {id}</p>
  </div>
}

export default Crypto;