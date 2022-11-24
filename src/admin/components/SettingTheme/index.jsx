import React from "react";
import "./SettingTheme.css";
import Switch from "react-switch";

function SettingTheme() {
  return (
    <div className="Theme-container">
      <div className="Theme-card-one">
        <h4>Change The App Theme</h4>
        <Switch checked={false} uncheckedIcon={false} />
      </div>
      <div className="Theme-card-two">
        <h4>Change The Card Theme</h4>
        <Switch checked={false} uncheckedIcon={false} />
      </div>
    </div>
  );
}

export default SettingTheme;
