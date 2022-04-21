import react from "react";
import { useState, useContext } from "react";
import { CryptoContext } from "../CryptoContext";

const DropDown = () => {
  const { setCurrency } = useContext(CryptoContext);
  const [isActive, setIsActive] = useState(false);
  const options = ["usd", "cad", "eur"];

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        Currency <span>&#8595;</span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              onClick={(e) => {
                setCurrency(option);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default DropDown;
