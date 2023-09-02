
import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]); // New state for filtered users

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data); // Initialize filteredUsers with all users
      });
  };

  useEffect(() => {
    // Filter users when the search query changes
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [search, users]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello</h1>
        <input
          type="search"
          value={search}
          placeholder="Search the robots"
          onChange={(event) => setSearch(event.target.value)}
        />
        {filteredUsers.map((user) => (
          <div key={user.id}>
            <h1>{user.name}</h1>
          </div>
        ))}
      </header>
    </div>
  );
};

export default App;
