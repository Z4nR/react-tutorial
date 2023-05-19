import React, { useState } from "react";
import SearchFilter from "./Filter/FilterBox";

export default function SearchBox() {
  const [aCheck, setA] = useState(false);
  const [bCheck, setB] = useState(false);
  const [cCheck, setC] = useState(false);

  function handleA(event) {
    setA(event.target.checked);
    setB(false);
    setC(false);
  }
  function handleB(event) {
    setB(event.target.checked);
    setA(false);
    setC(false);
  }

  function handleC(event) {
    setC(event.target.checked);
    setB(false);
    setA(false);
  }

  return (
    <div className="search">
      <div className="search-container">
        <SearchFilter
          aCheck={aCheck}
          bCheck={bCheck}
          cCheck={cCheck}
          handleA={handleA}
          handleB={handleB}
          handleC={handleC}
        />
      </div>
    </div>
  );
}
