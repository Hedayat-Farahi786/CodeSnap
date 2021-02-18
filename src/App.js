import { useEffect, useState } from "react";
import html2canvas from "html2canvas";
import { UnControlled as CodeMirror } from "react-codemirror2";
import Navbar from "./components/Navbar";
import Settings from "./components/Settings";
import Styles from "./styles/Styles";
require("codemirror/mode/xml/xml");
require("codemirror/mode/javascript/javascript");
require("codemirror/mode/python/python");
require("codemirror/mode/php/php");
require("codemirror/mode/coffeescript/coffeescript");
require("codemirror/mode/dart/dart");
require("codemirror/mode/django/django");
require("codemirror/mode/go/go");
require("codemirror/mode/css/css");
require("codemirror/mode/sass/sass");
require("codemirror/mode/yaml/yaml");
require("codemirror/mode/vue/vue");
require("codemirror/mode/ruby/ruby");
require("codemirror/mode/sql/sql");

const App = () => {
  const [lang, setLang] = useState("python");
  const [theme, setTheme] = useState("material");
  const [color, setColor] = useState("#0C5699");
  const [code, setCode] = useState("//Code Here");
  const [fileName, setFileName] = useState("Untitled");
  const [showFileName, setShowFileName] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
  };

  const options = {
    mode: lang,
    theme: theme,
    lineNumbers: true,
    indentWithTabs: true,
    lineWiseCopyCut: true,
    spellcheck: true,
    autocorrect: true,
    screenReaderLabel: "Code editor",
    viewportMargin: Infinity,
    lineWrapping: true,
    smartIndent: true,
    extraKeys: {
      "Shift-Tab": "indentLess",
    },
  };
  function download() {
    html2canvas(document.querySelector(".app__editor")).then((canvas) => {
      var image = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      var tmpLink = document.createElement("a");
      tmpLink.download = `${fileName == "" ? "Untitled" : fileName}.png`;
      tmpLink.href = image;

      document.body.appendChild(tmpLink);
      tmpLink.click();
      document.body.removeChild(tmpLink);
    });
  }
  return (
    <div className="app">
      <div
        className="change-fileName"
        style={{
          opacity: showFileName ? "1" : "0",
          pointerEvents: showFileName ? "all" : "none",
        }}
      >
        <input
          type="text"
          className="fileName-input"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
        />
        <button
          className="fileName-button"
          onClick={() => setShowFileName(!showFileName)}
        >
          Update
        </button>
      </div>
      <Navbar
        func={download}
        fileName={fileName}
        setShowFileName={setShowFileName}
        showFileName={showFileName}
      />
      <Styles fontSize={14} fontFamily="Hack" />
      <div className="editor">
        <Settings
          setColor={setColor}
          color={color}
          lang={lang}
          setLang={setLang}
          theme={theme}
          setTheme={setTheme}
          func={copyCode}
        />
        <div className="app__editor" style={{ backgroundColor: color }}>
          <CodeMirror
            value={code}
            options={options}
            onChange={(editor, data, value) => {
              setCode(value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
