import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Detail() {
  const { id } = useParams();
  const [college, setCollege] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/college/${id}`)
      .then((res) => setCollege(res.data));
  }, [id]);

  if (!college) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>{college.name}</h1>

      <p><b>📍 Location:</b> {college.location}</p>
      <p><b>💰 Fees:</b> ₹{college.fees}</p>
      <p><b>⭐ Rating:</b> {college.rating}</p>

      <br />
      <Link to="/">⬅ Back to Home</Link>
    </div>
  );
}

export default Detail;