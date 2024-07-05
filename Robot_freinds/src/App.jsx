import { useState } from "react";
import './App.css';

const users = [
  { id: 1, pic: "https://robohash.org/2size=200x200%60", name: "Robot 1", email: "robot1@example.com" },
  { id: 2, pic: "https://robohash.org/ijkjh", name: "Robot 2", email: "robot2@example.com" },
  { id: 3, pic: "https://robohash.org/ijk", name: "Robot 3", email: "robot3@example.com" },
  { id: 4, pic: "https://robohash.org/r", name: "Robot 4", email: "robot4@example.com" },
  { id: 5, pic: "https://robohash.org/ro", name: "Robot 5", email: "robot5@example.com" },
  { id: 6, pic: "https://robohash.org/rob", name: "Robot 6", email: "robot6@example.com" },
  { id: 7, pic: "https://robohash.org/robo", name: "Robot 7", email: "robot7@example.com" },
  { id: 8, pic: "https://robohash.org/robot", name: "Robot 8", email: "robot8@example.com" },
  { id: 9, pic: "https://robohash.org/robot68", name: "Robot 9", email: "robot9@example.com" },
  { id: 10, pic: "https://robohash.org/robot89", name: "Robot 10", email: "robot10@example.com" },
  { id: 11, pic: "https://robohash.org/robot8", name: "Robot 11", email: "robot11@example.com" },
  { id: 12, pic: "https://robohash.org/robot1", name: "Robot 12", email: "robot12@example.com" },
  { id: 13, pic: "https://robohash.org/robot6", name: "Robot 13", email: "robot13@example.com" },
  { id: 14, pic: "https://robohash.org/robot45", name: "Robot 14", email: "robot14@example.com" },
];


export default function App() {
  return (
    <div className="app">
      <h1 className="title">RoboFriends</h1>
      <Container users={users} />
    </div>
  );
}

function Container({ users }) {
  const [filterText, setFilterText] = useState("");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="container">
      <SearchBar filterText={filterText} onFilterTextChange={setFilterText} />
      <div className="robotList">
        {filteredUsers.map((user) => (
          <Robot key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

function SearchBar({ filterText, onFilterTextChange }) {
  return (
    <form className="searchBar">
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
        className="searchInput"
      />
    </form>
  );
}

function Robot({ user }) {
  return (
    <div className="robot">
      <img src={user.pic} alt={`${user.name}'s picture`} className="robotImage" />
      <div className="robotInfo">
        <div>{user.name}</div>
        <div>{user.email}</div>
      </div>
    </div>
  );
}
