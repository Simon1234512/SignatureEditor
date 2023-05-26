import React,{useContext} from "react";
import "./ScreenView.scss";
import { AppContext } from "../siteEditor/AppContext";

const ScreenView = (props) => {

  const { data } = useContext(AppContext);
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
          <div className="screenview-container-middle">{data.name}</div>
          <div className="screenview-container-bottom">{data.title}</div>
          <div className="screenview-container-bottom">{data.company}</div>
          <div className="screenview-container-bottom">{data.phone}</div>
          <div className="screenview-container-bottom">{data.websitelink}</div>
          <div className="screenview-container-bottom">{data.email}</div>
          <div className="screenview-container-bottom">{data.address}</div>
          <div className="screenview-container-content">{props.children}</div>
        </div>
      </div>
    </>
  );
};

export default ScreenView;
