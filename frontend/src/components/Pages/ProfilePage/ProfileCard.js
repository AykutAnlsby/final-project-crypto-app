import "./ProfileCard.css";
import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const ProfileCard = () => {
  const { user, isAuthenticated } = useAuth0();
  //   const [name, setName] = useState("Your Name");
  //   const [email, setEmail] = useState("Your Email");
  const [coins, setCoins] = useState([]);
  const [about, setAbout] = useState(
    "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects."
  );

  useEffect(() => {
    fetch(`/api/profile?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data.followedCoins);
        setCoins(data.data.followedCoins);
      });
  }, []);
  //   if (coins.length === 0) {
  //     return <p>Loading</p>;
  //   }
  // const response = await fetch(`/api/profile?email=${user.email}`)

  return (
    <UserContainer>
      <div className="Card">
        <div className="upper-container">
          <div className="image-container">
            <img src={user.picture} alt="" height="100px" width="100px" />
          </div>
        </div>
        <div className="lower-container">
          <h3>{user.name}</h3>
          <h4> {user.email}</h4>
          <h3>Followed Coins :</h3>
          {coins.map((coin, index) => {
            return <h4 key={index}>{coin}</h4>;
          })}
          <p>{about}</p>

          <button>
            <a target="_blank" href="https://www.tesla.com/elon-musk">
              Visit Profile
            </a>
          </button>
        </div>
      </div>
    </UserContainer>
  );
};

export default ProfileCard;

const UserContainer = styled.div`
  width: 480px;
  margin: 0 auto;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 1px 10px 1px black;
  padding: 20px;
  justify-content: center;
  display: flex;
`;

// import { useContext, useState, useEffect } from "react";

// import { CurrentUserContext } from "./CurrentUserContext";
// import styled from "styled-components";
// import Tweet from "./Tweet";
// import { NavLink, useParams } from "react-router-dom";
// import { COLORS } from "./constants";
// import { GrLocation } from "react-icons/gr";

// // const Profile = () => {
// //   const { user, isAuthenticated } = useAuth0();

// //   return (
// //     isAuthenticated && (
// //       <div>
// //         <img src={user.picture} alt={user.name} />
// //         <h2>Welcome {user.name}</h2>
// //         <p>[{user.email}</p>
// //       </div>
// //     )
// //   );
// // };

// // export default Profile;

// const Profile = () => {
//   const { currentUser } = useContext(CurrentUserContext);
//   const { user, isAuthenticated } = useAuth0();
//   const [tweetData, setTweetData] = useState(null); /////////////////////////// 1. make sometihing  in profile
//   /////////////////////////////////////// imn profile
//   // let handle = "treasurymog";
//   let handle = useParams();
//   const [profileData, setProfileData] = useState({});

//   useEffect(() => {
//     console.log(handle);
//     fetch(`/api/${handle.profileId}/profile`)
//       //////////
//       .then((res) => res.json())

//       .then((data) => {
//         console.log("ProfileData", data);
//         setProfileData(data);
//         console.log(profileData);
//       });
//   }, [handle.profileId]);

//   useEffect(() => {
//     //
//     fetch(`/api/${handle.profileId}/feed`)
//       .then((res) => res.json())

//       .then((data) => {
//         console.log("FeedData", data);
//         setTweetData(data);
//       });
//   }, []);
//   //use params

//   //reason only once
//   ////////////////////////////
//   // to fetch the data......
//   //and use the results to render an array of Tweets

//   // put useEfect with fetch
//   //use params   check ecosysyem
//   ///api/:handle/feed   /// handle is need to be variable variable to use params
//   //
//   console.log(profileData);

//   return (
//     <Wrapper>
//       <div>
//         <Banner src={profileData.profile?.bannerSrc} />
//         <AvatarContainer>
//           <Avatar src={profileData.profile?.avatarSrc} />
//           <Button>Following</Button>
//         </AvatarContainer>

//         <Desc>
//           <DisplayName>{profileData.profile?.displayName}</DisplayName>
//           <Handle> @{profileData.profile?.handle}</Handle>
//         </Desc>
//         <UserInfo>
//           <p>{profileData.profile?.bio}</p>
//           <TweetLocation>
//             <GrLocation /> {profileData.profile?.location}{" "}
//             {profileData.profile?.joined}
//           </TweetLocation>
//           <p>
//             {profileData.profile?.numFollowing} Following{" "}
//             {profileData.profile?.numFollowers}
//             Followers
//           </p>
//         </UserInfo>
//         <Tabs>
//           <HoverText>Tweets</HoverText>
//           <HoverText>Media</HoverText>
//           <HoverText>Likes</HoverText>
//         </Tabs>
//       </div>
//       <TweetArea>
//         {tweetData?.tweetIds?.map((item) => {
//           return <Tweet key={item} idName={tweetData?.tweetsById[item]} />;

//           // numOwned={purchasedItems[item.id]}
//         })}
//       </TweetArea>
//     </Wrapper>
//   );
// };

// const TweetArea = styled.div`
//   display: flex;
//   flex-direction: column;
// `;
// const Wrapper = styled.div`
//   display: flex;
//   padding: 15px;
//   flex-direction: column;
//   width: 700px;
// `;
// const AvatarContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   padding: 15px;
//   position: relative;
// `;
// const UserInfo = styled.div`
//   display: flex;
//   flex-direction: column;
// `;
// const Tabs = styled.div`
//   display: flex;
//   flex-grow: 1;
//   padding: 15px;
//   justify-content: space-between;
//   font-weight: 650;
//   color: grey;
//   &.active {
//     color: ${COLORS.primary};
//   }
// `;
// const HoverText = styled.p`
//   color: #606470;
//   :hover {
//     color: #8f71ff;
//     text-decoration: underline;
//     text-underline-offset: 30px;
//     cursor: pointer;
//   }
// `;

// const Banner = styled.img`
//   width: 700px;
// `;
// const Avatar = styled.img`
//   border-radius: 50%;
//   height: 150px;
//   margin-top: -85px;
//   border: 2px solid white;
// `;
// const Button = styled.button`
//   border-radius: 35px;
//   height: 40px;
//   width: 130px;
//   border: none;
//   background-color: hsl(258deg, 100%, 50%);
//   color: white;
//   font-weight: bold;
// `;
// const DisplayName = styled.span`
//   font-weight: 800;
//   margin-right: 10px;
// `;
// const Handle = styled.span`
//   font-weight: 400;
//   margin-right: 10px;
// `;
// const Desc = styled.div`
//   font-weight: 400;
// `;

// const TweetLocation = styled.p`
//   padding-right: 10px;
//   flex-direction: column;
// `;
// export default Profile;
