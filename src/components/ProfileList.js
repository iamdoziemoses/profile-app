import React from "react";
import Profile from "./Profile";
import "./ProfileList.styles.css";
import { profiles } from "../profile-data";

const ProfileList = () => {
  return (
    <>
      <div className="team-title">
        <h1>Team Members</h1>
      </div>

      <div className="profile-container">
        {profiles.map((profile) => {
          const { img, altText, name, job, company, link } = profile;
          return (
            <Profile
              img={img}
              altText={altText}
              Name={name}
              Job={job}
              Company={company}
              link={link}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProfileList;

// <Profile
//         img="/images/john.png"
//         altText="John Doe"
//         Name="John Doe"
//         Job="Web Developer"
//         Company="Zino"
//       />

//       <Profile
//         img="/images/profile3.png"
//         altText="John Doe"
//         Name="Zino Akpareva"
//         Job="Web Developer"
//         Company="Zino"
//       />
//     </div>
