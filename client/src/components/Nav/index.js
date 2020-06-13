import React from "react";
import Jumbotron from "../Jumbotron";

function Nav() {
  return (
    <div>
      <nav>
        <center>
        <ul>
          <li>
            <a href="/">Search Books</a>
          </li>
          <li>
            <a href="/saved">Saved Books</a>
          </li>
        </ul>
        </center>
      </nav>
      <Jumbotron />
    </div>
  );
}

export default Nav;
