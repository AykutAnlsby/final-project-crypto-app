import React from "react";
import { useParams } from "react-router-dom";

const CoinMainPage = () => {
  const { id } = useParams();
  const [coin, setcoin] = useState();

  return <div>Hello CoinMainPage</div>;
};

export default CoinMainPage;
