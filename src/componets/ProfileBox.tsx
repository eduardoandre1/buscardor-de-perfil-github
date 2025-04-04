
const ProfileBox: React.FC = () => {
    return (
        <div className={`ProfileBox ${profile.status!="found"?"":"displayNone"}`}>
        <div className="profile">
          <img className="avatar" src={profile.image} alt="Profile Image" />
          <div className="textSpace">
            <h1 className="name">{profile.name}</h1>
            <p  className="Biography">{profile.bio}</p>
          </div>
      </div>
    )
}