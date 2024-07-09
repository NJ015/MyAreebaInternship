import { useState } from "react";
import "./App.css";

export default function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      pic: "https://robohash.org/user1",
      name: "User 1",
      username: "user1",
      email: "user1@example.com",
      address: {
        street: "123 Street",
        city: "City A",
      },
      phone: "123-456-7890",
    },
    {
      id: 2,
      pic: "https://robohash.org/user2",
      name: "User 2",
      username: "user2",
      email: "user2@example.com",
      address: {
        street: "456 Avenue",
        city: "City B",
      },
      phone: "234-567-8901",
    },
    {
      id: 3,
      pic: "https://robohash.org/user3",
      name: "User 3",
      username: "user3",
      email: "user3@example.com",
      address: {
        street: "789 Road",
        city: "City C",
      },
      phone: "345-678-9012",
    },
  ]);

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div className="app">
      <h1 className="title">RoboFriends</h1>
      <Container users={users} addUser={addUser} />
    </div>
  );
}

function Container({ users, addUser }) {
  const [filterText, setFilterText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="container">
      <SearchBar filterText={filterText} onFilterTextChange={setFilterText} />
      <button onClick={() => setIsModalOpen(true)} className="addUserButton">
        Add User
      </button>
      {isModalOpen && (
        <AddUserFormModal
          addUser={addUser}
          onClose={() => setIsModalOpen(false)}
          users={users}
        />
      )}
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

function AddUserFormModal({ addUser, onClose, users }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: users.length + 1,
      name,
      username,
      email,
      address: {
        street,
        city,
      },
      phone,
      pic: `https://robohash.org/${username}`,
    };
    addUser(newUser);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modalContent">
        <span className="closeButton" onClick={onClose}>
          &times;
        </span>
        <h2>Add New User</h2>
        <form onSubmit={handleSubmit} className="addUserForm">
          <input
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            value={street}
            placeholder="Street"
            onChange={(e) => setStreet(e.target.value)}
            required
          />
          <input
            type="text"
            value={city}
            placeholder="City"
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <input
            type="text"
            value={phone}
            placeholder="Phone"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <button type="submit">Add User</button>
        </form>
      </div>
    </div>
  );
}

function Robot({ user }) {
  return (
    <div className="robot">
      <img src={user.pic} alt={`${user.name}'s picture`} className="robotImage" />
      <div className="robotInfo">
        <div>{user.name}</div>
        <div>{user.email}</div>
        {/* Add link to details page */}
        <Link to={`/robot/${user.username}`}>View Details</Link>
      </div>
    </div>
  );
}

