import React from "react";

export default function EmptyData({ data }) {
  return (
    <div className="list-search-box">
      <div className="empty-list">
        <p>{data}</p>
      </div>
    </div>
  );
}
