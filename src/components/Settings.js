import React, { useState } from "react";
import Option from "../Option";

const Settings = ({
  lang,
  setLang,
  theme,
  setTheme,
  setColor,
  color,
  func,
}) => {
  const [showTheme, setShowTheme] = useState(false);
  const [showLang, setShowLang] = useState(false);
  const themes = [
    "material",
    "nord",
    "night",
    "seti",
    "monokai",
    "ambiance",
    "eclipse",
    "idea",
    "icecoder",
    "elegant",
    "cobalt",
    "duotone-dark",
    "duotone-light",
  ];
  const languages = [
    "Javascript",
    "Plain Text",
    "Python",
    "Java",
    "C",
    "C++",
    "C#",
    "Dart",
    "Lua",
    "PHP",
    "Perl",
    "Kotlin",
    "MySQL",
    "Typescript",
    "R",
    "Ruby",
    "YAML",
    "JSON",
    "Django",
    "CoffeScript",
    "Bash",
    "HTML/XML",
    "CSS",
    "Sass",
  ];

  return (
    <div className="setting">
      <div className="theme-select">
        <i className="material-icons color" style={{ color: "white" }}>
          color_lens
        </i>
        <div
          className="theme-info"
          onClick={() => {
            setShowTheme(!showTheme);
          }}
        >
          {theme}
          <i className="material-icons" style={{ color: "white" }}>
            arrow_drop_down
          </i>
        </div>
        <div
          className="options"
          style={{
            opacity: showTheme ? "1" : "0",
            pointerEvents: showTheme ? "all" : "none",
          }}
        >
          {themes.map((theme) => (
            <Option
              key={theme}
              text={theme}
              setValue={setTheme}
              val={showTheme}
              show={setShowTheme}
            />
          ))}
        </div>
      </div>
      {/* language */}
      <div className="theme-select">
        <i className="material-icons color" style={{ color: "white" }}>
          language
        </i>
        <div
          className="theme-info"
          onClick={() => {
            setShowLang(!showLang);
          }}
        >
          {lang}
          <i className="material-icons" style={{ color: "white" }}>
            arrow_drop_down
          </i>
        </div>
        <div
          className="options"
          style={{
            opacity: showLang ? "1" : "0",
            pointerEvents: showLang ? "all" : "none",
          }}
        >
          {languages.map((lan) => (
            <Option
              key={lan}
              text={lan}
              setValue={setLang}
              val={showLang}
              show={setShowLang}
            />
          ))}
        </div>
      </div>
      {/* color select*/}
      <input
        type="color"
        className="select-color"
        onChange={(e) => {
          setColor(e.target.value);
        }}
        value={color}
      />
      <i className="material-icons copy" onClick={func}>
        content_copy
      </i>
    </div>
  );
};

export default Settings;
