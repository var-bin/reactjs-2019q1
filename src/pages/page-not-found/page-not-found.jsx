import React from 'react';
import { Link } from "react-router-dom";

export function PageNotFoundComponent({ location }) {
  return (
    <div className="section">
      <div className="container">
        <h2 className="title">Page <code>{location.pathname}</code> not found 🤖</h2>

        <div className="content is-large">
          <p>
            Return to <Link to="/">Home</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
