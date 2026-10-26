import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

import { useState } from 'react';

const Editor = () => {
    const [content, setContent] = useState('');

    return (
        <div id="Editor-div">
            <ReactQuill
                id="Editor-box"
                theme="snow"
                value={content}
                onChange={setContent}
            />
        </div>
    );
}

export default Editor;