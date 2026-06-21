import ProfileCard from "./components/ProfileCard";
import profileImage from "./assets/profile.jpg";

function App() {
  return (
    <div>
      <h1>Profile Card React App</h1>

      <ProfileCard
        name="Meenakshi"
        bio="React Developer with 2 years experience"
        image={profileImage}
      />
    </div>
  );
}

export default App;