
import { useState } from "react";
import Selector from "../selector/Selector";

const Design = () => {
  const [select, setSelected] = useState("");

  const fonts = ["Arial", "Georgia", "Verdana", "Palatino", "Lato", "Roboto"];

  return (
    <>
      <div className="designeditor">
        <div className="designeditor-container">
          <h4>Enhance your style</h4>
          <div className="designeditor-container-inputs">
            <Selector
              data={fonts}
              selected="Choose Font"
              className="editselector"
              label="Font family"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Design;
