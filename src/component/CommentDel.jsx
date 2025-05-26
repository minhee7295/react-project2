function CommentDel({id, onDelete}) {
    return (
        <button onClick={() => onDelete(id)}>삭제</button>
    )
}
export default CommentDel