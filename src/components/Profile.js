import React from "react";
import Card from "../UI/Card";
import "./Profile.styles.css";

const Profile = ({ img, altText, Name, Job, Company, Link }) => {
  return (
    <>
      <Card>
        <div className="profile-start">
          <img src={img} alt={altText} width="408" />
          <h2 className="profile-title">My profile</h2>

          
          <div className="profile-data">
            <h3>Name</h3>
            <h3>{Name}</h3>
          </div>
          <div className="profile-data">
            <h3>Job</h3>
            <h3>{Job}</h3>
          </div>
          <div className="profile-data">
            <h3>Company</h3>
            <h3>{Company}</h3>
          </div>

          <div className="socials-container"></div>

          <div className="button-con">
            <button className="view-button">
              <a href={Link}>View profile</a>
            </button>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Profile;
