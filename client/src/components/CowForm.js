import React from "react";

export default function CowForm({ cow, addCowInfo, addCow }) {
  return (
    <div>
      <form>
        <input type="text" name="search" placeholder="Search Cow" />
        <button>Find Cow</button> <br />
        <input
          type="text"
          name="name"
          placeholder="Cows Name"
          value={cow.name}
          onChange={addCowInfo}
        />
        <input
          type="text"
          name="description"
          placeholder="Cows Description"
          value={cow.description}
          onChange={addCowInfo}
        />
        <button
          onClick={(e) => {
            addCow(e);
          }}
        >
          Add Cow
        </button>
      </form>
    </div>
  );
}
