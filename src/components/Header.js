import React, { useEffect, useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaSigOutAlt,faUser } from "react-icons/fa";

function Header() {
    const navigate = useNavigate();
  const { success, loading, user, authlogout } = useContext(Authlogout)
  useEffect(() => {
    if (user) {
      navigate("/login");

    }
  },[user]
  )
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Registration App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" href="#">Home
            <span class="visually-hidden">(current)</span>
          </a>
        </li>
            </ul>


            <ul class="navbar-nav mi-auto">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <faUser />
                  {user.username}
                  </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" type="button"
                  onClick={() => authlogout()}
                href="/"><FaSigOutAlt/></a>
              </li>
          </ul>
          </div>
          </div>
      </nav>
    </div>
    
 
  )
}

export default Header