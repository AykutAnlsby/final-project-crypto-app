import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const FollowCoinButton = (props) => {
  const { user, isAuthenticated } = useAuth0();
  const followCoin = async () => {
    if (!isAuthenticated) {
      console.log("not Authenticated");
      return;
    }
    await fetch("/api/follow-coin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        coinName: props.value.id,
      }),
      // window alert made from here
    }).then(alert(`${props.value.id} has been succesfully added in list.`));
  };

  const coinFollowmessage = (props) => {
    alert(" is succesfully added in the list.");
  };
  return (
    <div>
      <button
        disabled={!isAuthenticated}
        id="follow"
        className="button"
        onClick={() => followCoin()}
      >
        FollowCoin
      </button>
    </div>
  );
};

export default FollowCoinButton;
