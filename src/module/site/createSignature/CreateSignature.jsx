import React, { useState } from "react";
import "./CreateSignature.scss";
import { ScreenView, SiteEditor } from "../../../components";

const CreateSignature = () => {
  return (
    <>
      <div className="createsignature">
        <div className="createsignature-container">
          <div className="createsignature-container-editor">
            <SiteEditor />
          </div>
          <div className="createsignature-container-view">
            <ScreenView>hello</ScreenView>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateSignature;
