/*
 * See https://developers.google.com/web/updates/2016/02/font-display and
 * https://css-tricks.com/font-display-masses/#article-header-id-2
 * for `font-display` information
 */

export default function Styles({ fontSize, fontFamily }) {
  return (
    <style jsx global>
      {`
        .CodeMirror {
          font-family: ${fontFamily}, monospace;
          font-size: ${fontSize}px;
          background-color: #151718;
          padding-top: 40px;
        }
        .CodeMirror * {
          font-weight: 500;
          line-height: 25px;
        }
        .CodeMirror {
          width: 50vw;
          height: 40vh;
          border-radius: 10px;
          -webkit-box-shadow: 0px 0px 29px 5px rgba(0, 0, 0, 0.27);
          -moz-box-shadow: 0px 0px 29px 5px rgba(0, 0, 0, 0.27);
          box-shadow: 0px 0px 29px 5px rgba(0, 0, 0, 0.27);
        }
        .CodeMirror-linenumbers {
        }
      `}
    </style>
  );
}
