import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProfileButton = () => {
  return (
    <div>
      <Link to="/profile/page">
        <button class="button" role="button">
          Profile Page
        </button>
      </Link>
    </div>
  );
};

export default ProfileButton;
