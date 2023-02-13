import React from "react";
import {BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Create from "./Create";
import Home from "./Home";
import List from "./List";
import Update from "./Update";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import {faTools} from '@fortawesome/free-solid-svg-icons';
import {faList}  from '@fortawesome/free-solid-svg-icons';
const NavBar = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/"><FontAwesomeIcon icon={faHome}></FontAwesomeIcon><span> </span>Home</Link>
          </li>
          <li>
            <Link to="/create"><FontAwesomeIcon icon={faTools} /><span> </span>Create</Link>
          </li>
          <li>
            <Link to="/update">Update</Link>
          </li>
          <li>
            <Link to="/list"><FontAwesomeIcon icon={faList} /><span> </span>List</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update" element={<Update />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default NavBar;
