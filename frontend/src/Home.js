import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [colleges, setColleges] = useState([]);
  const [search, setSearch] = useState("");

  const fetchColleges = async (query = "") => {
    const res = await axios.get(
      `http://localhost:5000/colleges?search=${query}`
    );
    setColleges(res.data);
  };

  useEffect(() => {
    fetchColleges();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🎓 College Explorer</h1>

      {/* SEARCH BAR */}
      <input
        placeholder="Search college..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          fetchColleges(e.target.value);
        }}
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "20px",
          borderRadius: "8px",
          border: "1px solid gray",
        }}
      />

      {/* COLLEGE CARDS */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {colleges.map((c) => (
          <div
            key={c.id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "10px",
              width: "250px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{c.name}</h3>
            <p>📍 {c.location}</p>
            <p>💰 Fees: ₹{c.fees}</p>
            <p>⭐ Rating: {c.rating}</p>

            <Link to={`/college/${c.id}`}>View Details</Link>
          </div>
        ))}
      </div>

      <br />
      <Link to="/compare">⚖️ Compare Colleges</Link>
    </div>
  );
}

export default Home;