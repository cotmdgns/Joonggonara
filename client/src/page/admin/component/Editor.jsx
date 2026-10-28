import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

const Editor = ({ mode,textEditor, dispatch ,readOnly,modules,textEditorUpdate}) => {

  // 에디터 도구 설정
  const modulesBox = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],

      // 글자색상 및 배경색상
      [{ color: [] }, { background: [] }],

      // 글머리 기호 및 번호 목록
      [{ list: "ordered" }, { list: "bullet" }],

      // 정렬
      [{ align: [] }],

      ["link", "image"],
      ["clean"]
    ]
  };

  return (
    <ReactQuill
        id="Editor-box"
        theme="snow"
        value={
          mode === "update"
            ? (textEditorUpdate ?? textEditor ?? "")
            : (textEditor ?? "")
        }
        modules={modules != null ? modules: modulesBox }
        onChange={(e) => {
          if(mode == "update"){
          dispatch({
            type: "textEditorUpdateState",
            payload: e
          });
          }else{
            dispatch({
              type: "textEditorState",
              payload: e
            });
          }
        }}
        readOnly={readOnly}
      />
  );
};

export default Editor;