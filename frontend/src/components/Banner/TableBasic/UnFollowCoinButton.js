import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UnFollowCoinButton = (props) => {
  const { user, isAuthenticated } = useAuth0();
  const unFollowCoin = async () => {
    if (!isAuthenticated) {
      console.log("not Authenticated");
      return;
    }
    await fetch("/api/unfollow-coin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        coinName: props.value.id,
      }),
    }).then(
      alert(`${props.value.id} has been succesfully removed in the list.`)
    );
  };
  const coinUnFollowmessage = (props) => {
    alert(" is succesfully removed in the list.");
  };
  return (
    <div>
      <button
        disabled={!isAuthenticated}
        className="button"
        onClick={() => unFollowCoin()}
      >
        UnFollowCoin
      </button>
    </div>
  );
};

export default UnFollowCoinButton;
