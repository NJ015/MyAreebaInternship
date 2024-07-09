import React from "react";
import { useParams, Link } from "react-router-dom";

export default function RobotDetails() {
  const { username } = useParams();

  return (
    <div>
      <h2>Robot Details for {username}</h2>
      {/* ---------------------------rest of properties bzedon later------------------------- */}
      <Link to="/">Back to Main Page</Link>
    </div>
  );
}
