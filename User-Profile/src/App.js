import React from 'react'

const UserProfile = ({user}) => {
  return (
    <div>
      <h1> User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

const ProfilePicture = ({user}) => {
    return(
        <div>
            <h1>Profile Picture</h1>
            <img src={user.profilePictureUrl} alt="Profile" />
        </div>
    );
};

const App = () => {
    const user = {
        name: "John Doe",
        email: "johndoe@gmail.com",
        profilePictureUrl: "https://res.cloudinary.com/demo/image/facebook/65646572251.jpg",

    };

    return (
        <div>
            <UserProfile user={user} />
            <ProfilePicture user={user} />
        </div>
    );
};

export default App
