import React, { useState } from "react";
import "./GitHubProfileSearch.css";

const GitHubProfileSearch: React.FC = () => {
  const [username, setUsername] = useState("");
  type Profile = {
    name: string;
    image: string;
    bio: string;
    status: 'pending' | 'found' | 'notFound';
  };
  const [profile, SetProfile] = useState<Profile>({
    name: "",
    image:"",
    bio: "Desenvolvedor front-end apaixonado por criar interfaces intuitivas e acessíveis. Especialista em UX/UI e e-commerces, transformando design em código eficiente. Sempre explorando novas tecnologias para melhorar a experiência do usuário. 🚀",
    status: 'pending'
})
  async function GetProfile(name: string){
    if (!name) return;
    try {
      const response = await fetch(`https://api.github.com/users/${name}`);
      if (!response.ok) {
        throw new Error("Usuário não encontrado!");
      }
      const data = await response.json();
      SetProfile({
        name: data.name, 
        bio: data.bio?data.bio:"este usuário não possui uma biografia em seu perfil do github", 
        image: data.avatar_url,
        status: "found"
      });
      console.log(data);
    } catch (error: any) {
      console.log(error.message);
    }
  }

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
          <button onClick={()=>GetProfile(username)}>
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
        <div className="profileBox">
          <div className="profile">
            <img className="avatar" src={profile.image} alt="Profile Image" />
            <div className="textSpace">
              <h1 className="name">{profile.name}</h1>
              <p  className="Biography">{profile.bio}</p>
            </div>
        </div>

        </div>
      </div>
    </div>
    </>
  );
};

export default GitHubProfileSearch;