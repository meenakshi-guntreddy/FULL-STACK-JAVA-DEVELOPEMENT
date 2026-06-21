import { useState } from "react";

function ProfileCard(props) {

  const [showBio, setShowBio] = useState(false);

  return (
    <div>

      <img
        src={props.image}
        alt={props.name}
        width="150"
      />

      <h2>{props.name}</h2>

      <button onClick={() => setShowBio(!showBio)}>
        {showBio ? "Hide Bio" : "Show Bio"}
      </button>

      {showBio && <p>{props.bio}</p>}

    </div>
  );
}

export default ProfileCard;