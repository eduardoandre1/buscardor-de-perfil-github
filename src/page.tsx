import React, {useState } from "react";
import "./GitHubProfileSearch.css";

const GitHubProfileSearch: React.FC = () => {
  
  type Profile = {
    name: string;
    image: string;
    bio: string;
    status: 'pending' | 'found' | 'notFound';
  };
  const [profile, SetProfile] = useState<Profile>({
    name: "",
    image:"",
    bio: "",
    status: 'pending'
})
const [username, setUsername] = useState("");
const [show,setShow] = useState(false);
  async function GetProfile(name: string){
    if (!name) return;
    setShow(false);
    try {
      const response = await fetch(`https://api.github.com/users/${name}`);
      if (!response.ok) {
        setShow(true);
        SetProfile( {
          bio:"",
          image:"",
          name:"",
          status: "notFound"
        })
        return
      }
      const data = await response.json();
      SetProfile({
        name: data.name, 
        bio: data.bio?data.bio:"este usuário não possui uma biografia em seu perfil do github", 
        image: data.avatar_url,
        status: "found",
      });
      setShow(true)
    } catch (error: any) {
      SetProfile( {
        bio:"",
        image:"",
        name:"",
        status: "notFound"
      })
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
        <div className={`errorBox ${profile.status==="notFound"&&show?"":"hidden"  }`}>
          <h3>Nenhum perfil foi encontrado com este nome de usuário.<br />
          Tente novamente</h3>
        </div>
        <div className={`profileBox ${profile.status==="found"&&show?"show":""}`}>
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