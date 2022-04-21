import React, { useMemo } from "react";
import { useTable } from "react-table";
import { COLUMNS } from "./Columns";
import "./table.css";
import { useEffect, useContext, useState } from "react";
import { CryptoContext } from "../../CryptoContext";

// Basic Table Create steps
//1. Get the data you want to display
//2.Define the columns for your table
//3. Use the data and columns defines to create tble instance using react-table
//4.Define basic structure HTML
//5. Use the table instance created in step 3 to bring life to the HTML
//6. Add Css desired  implements

const BasicTable = () => {
  //const { currency } = useParams();
  const { currency } = useContext(CryptoContext);
  const [coinTable, setCoinTable] = useState([]);
  //const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`/api/list-data/${currency}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setCoinTable(data.data);
        console.log(coinTable);
      });
  }, [currency]);
  //////////////////////////////////////////////////////////

  ///////////////////create favorite button////////////

  // const [favorites, setFavorites] = useState();
  //   const addFav = (props) => {
  //     let makeArray = favorites;
  //     let addArray = true;
  //     makeArray.map((item, key) => {
  //       if (item === props.i) {
  //         makeArray.splice(key, 1);
  //         addArray = false;
  //       }
  //     });
  //     if (addArray) {
  //       makeArray.push(props.i);
  //     }
  //     setFavorites([...array]);
  //   };

  ////////////////////////////
  const data = coinTable;
  const columns = useMemo(() => COLUMNS, []);
  let tableInstance = useTable({
    columns,
    data,
  });
  if (!coinTable) {
    return <p>Loading</p>;
  }
  const { getTableProps, getTableBodyProps, headerGroup, rows, prepareRow } =
    tableInstance;
  console.log(tableInstance);
  return (
    <table {...getTableProps()}>
      <thead>
        <tr>
          {/* {headerGroup?.map((headerGroup) => ( */}
          {/*  {...headerGroup.getHeaderGroupProps()}> */}
          {/* {headerGroup.headers.map((column) => ( */}
          <th>Coin Name </th>
          <th>Price </th>
          <th>Market Cap </th>
          <th>24H Percentage </th>
          <th>FollowCoin</th>
          <th>UnFollowCoin</th>
          {/* <th {...column.getHeaderGroupProps()}>
                {column.render("Header")} */}
          {/* ))} */}
        </tr>
        {/* ))} */}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
        <tr>
          <td>
            {/* {favorites.includes(i) ? (
              <IoIosHeart
                onClick={() => addFav({ items, i })}
                style={{ color: "red" }}
              />
            ) : (
              <IoIosHeartEmpty
                onClick={() => addFav({ items, i })}
                style={{ color: "red" }}
              />
            )} */}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default BasicTable;
