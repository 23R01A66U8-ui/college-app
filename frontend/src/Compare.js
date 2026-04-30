import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Compare() {
  const [colleges, setColleges] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/colleges")
      .then(res => setColleges(res.data));
  }, []);

  const toggleSelect = (college) => {
    if (selected.find(c => c.id === college.id)) {
      setSelected(selected.filter(c => c.id !== college.id));
    } else if (selected.length < 2) {
      setSelected([...selected, college]);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>⚖️ Compare Colleges</h1>

      {colleges.map(c => (
        <div key={c.id}>
          <input
            type="checkbox"
            onChange={() => toggleSelect(c)}
          />
          {c.name}
        </div>
      ))}

      <br />

      {selected.length === 2 && (
        <>
          <h2>Comparison Result</h2>

          <table border="1" cellPadding="10">
            <thead>
              <tr>
                <th>Feature</th>
                <th>{selected[0].name}</th>
                <th>{selected[1].name}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fees</td>
                <td>₹{selected[0].fees}</td>
                <td>₹{selected[1].fees}</td>
              </tr>
              <tr>
                <td>Rating</td>
                <td>{selected[0].rating}</td>
                <td>{selected[1].rating}</td>
              </tr>
              <tr>
                <td>Location</td>
                <td>{selected[0].location}</td>
                <td>{selected[1].location}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}

      <br />
      <Link to="/">⬅ Back</Link>
    </div>
  );
}

export default Compare;