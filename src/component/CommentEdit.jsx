import { useState } from 'react';

function CommentEdit({comment,  editHandler}) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState('');

    const editClick = () => {
        setIsEditing(true)
    };

    const editSubmit = (id) => {
        editHandler(id, editText);
        setIsEditing(false);
        setEditText(comment.text);
    };

    if (isEditing) {
        return (
            <>
                <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} />
                <button onClick={() => editSubmit(comment.id)}>저장</button>
                <button onClick={() => setIsEditing(false)}>취소</button>
            </>
        )
    }

    return (
        <button onClick={() => editClick()}>수정</button>
    )
}
export default CommentEdit