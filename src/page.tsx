import React, { useState } from "react";
import "./GitHubProfileSearch.css";

const GitHubProfileSearch: React.FC = () => {
  const [username, setUsername] = useState("");

  return (
    <>
    <div className="circle top"></div>
    <div className="circle bottom"></div>
    <div className="polka-dots"></div>
    <div className="background">
      
      <div className="card">
        <h1 className="title">
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub Logo"
            className="logo"
          />
          <span>Perfil</span> <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/GitHub_logo_2013.svg" className="github" alt="github" />
        </h1>
        <div className="input-group">
          <input
            type="text"
            placeholder="Digite um usuário do Github"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default GitHubProfileSearch;