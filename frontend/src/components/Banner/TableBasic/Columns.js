import FollowCoinButton from "./FollowCoinButton";
import UnFollowCoinButton from "./UnFollowCoinButton";
export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "CurrentPrice",
    accessor: "current_price",
  },
  {
    Header: "MarketCap",
    accessor: "market_cap",
  },
  {
    Header: "Percentage",
    accessor: "price_change_percentage_24h",
  },
  {
    Header: "FollowCoin",
    Cell: ({ cell }) => {
      // console.log("cell ", cell);
      return <FollowCoinButton value={{ id: cell.row.original.id }} />;
    },
  },
  {
    Header: "UnfollowCoin",
    Cell: ({ cell }) => {
      // console.log("cell ", cell);
      return <UnFollowCoinButton value={{ id: cell.row.original.id }} />;
    },
  },
];
