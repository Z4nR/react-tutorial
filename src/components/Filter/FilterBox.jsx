import React from "react";

export default function SearchFilter({
  aCheck,
  bCheck,
  cCheck,
  handleA,
  handleB,
  handleC,
}) {
  return (
    <div>
      <h4 style={{ textAlign: "center" }}>Saring Berdasarkan</h4>
      <div className="search-filter-btn">
        <input
          id="a"
          className="filter-btn"
          type="checkbox"
          checked={aCheck}
          onChange={handleA}
        />
        <input
          id="b"
          className="filter-btn"
          type="checkbox"
          checked={bCheck}
          onChange={handleB}
        />
        <input
          id="c"
          className="filter-btn"
          type="checkbox"
          checked={cCheck}
          onChange={handleC}
        />
      </div>
    </div>
  );
}
