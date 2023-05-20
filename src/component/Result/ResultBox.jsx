import React from "react";
import EmptyData from "../Empty/EmptyData";

export default function SearchResult({ aCheck, bCheck, cCheck }) {
  if (aCheck) {
    return <EmptyData data={"A Data Kosong"} />;
  }

  if (bCheck) {
    return <EmptyData data={"B Data Kosong"} />;
  }

  if (cCheck) {
    return <EmptyData data={"C Data Kosong"} />;
  }

  return (
    <div className="list-search-box">
      <div className="empty-list">
        <p>Masukkan Nama Anda atau Grup Anda, kemudian telusuri hasilnya</p>
      </div>
    </div>
  );
}
