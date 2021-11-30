import React from "react";

export default function SingleCow({ cow, cowInfo }) {
  return (
    <div>
      <li>
        {cow.name}: {cow.description}
        <button
          onClick={() => {
            cowInfo(cow);
          }}
        >
          Update
        </button>
        <button>delete</button>
      </li>
    </div>
  );
}
