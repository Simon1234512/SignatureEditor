import React,{useContext} from "react";
import "./ScreenView.scss";
import { AppContext } from "../siteEditor/AppContext";

const ScreenView = (props) => {

  const { name , title , company , phone , website , email , address  } = useContext(AppContext);
 //const {title} = useContext(AppContext);
  return (
    <>
      <div className="screenview">
        <div className="screenview-container">
          <div className="screenview-container-top">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="screenview-container-middle">{name}</div>
          <div className="screenview-container-bottom">{title}</div>
          <div className="screenview-container-bottom">{company}</div>
          <div className="screenview-container-bottom">{phone}</div>
          <div className="screenview-container-bottom">{website}</div>
          <div className="screenview-container-bottom">{email}</div>
          <div className="screenview-container-bottom">{address}</div>
          <div className="screenview-container-content">{props.children}</div>
        </div>
      </div>
    </>
  );
};

export default ScreenView;
