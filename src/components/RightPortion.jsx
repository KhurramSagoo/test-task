import React from "react";
import "./RightPortion.css";
import reload from "../assets/icons/reload.svg";
import MiddlePart from "./MiddlePart";

const RightPortion = () => {
  return (
    <div className=" portion-div">
      {/* top portion */}
      <div className=" upper">
        <div className=" upper-left">
          <h2 className="top">Beginnen Sie Ihre Verkaufsreise 👋 </h2>
          <h6 className="bottom">
            Entdecken Sie mühelos jede Facette Ihres Verkaufsmandatsvertrags.
          </h6>
        </div>
        <div className=" upper-right">
          <img src={reload} alt="" className="reload" />
          <p>Reload</p>
        </div>
      </div>
      {/* middle */}
      <div className="middle-part">
        <MiddlePart />
      </div>
    </div>
  );
};

export default RightPortion;
