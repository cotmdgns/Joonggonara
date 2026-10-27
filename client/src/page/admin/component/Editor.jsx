import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

const Editor = ({ textEditor, dispatch }) => {
  return (
    <div id="Editor-div">
      <ReactQuill
        id="Editor-box"
        theme="snow"
        value={textEditor}
        onChange={(e) => {
          dispatch({ type: "textEditorState", payload: e });
        }}
      />
    </div>
  );
};

export default Editor;
