import {useComment} from '../hooks/comment';
import CommentDel from './CommentDel';
import CommentEdit from './CommentEdit';

function MovieComment({movieId}) {
    const {comment, setComment, comments, handleSubmit, handleReplyClick, handleReplySubmit, replyId, setReplyText, replyText
        ,handleDelete, editHandler
    } = useComment(movieId);


    console.log('comments', comments)


    return (
        <div style={{ marginTop: '2rem' }}>
            <form onSubmit={handleSubmit}>
                <label>댓글:</label>
                <input type="text" placeholder="댓글을 입력하세요." value={comment} onChange={(e) => setComment(e.target.value)} />
                <button type="submit">등록</button>
            </form>
            <ul style={{ marginTop: '1rem' }}>
                {comments.filter((c) => c.parentIndex === null)
                .map((c, idx) => (
                <li key={c.id} style={{ marginBottom: '0.5rem' }}>
                    <strong>{c.user}</strong> ({c.date})<br />
                    {c.text} <br/>
                    <button onClick={() => handleReplyClick(c.id)}>댓글달기</button>
                    <CommentEdit comment={c}  editHandler={editHandler} />
                    <CommentDel onDelete={handleDelete} id={c.id} />

                    {replyId === c.id && (
                        <form onSubmit={(e) => {e.preventDefault(); handleReplySubmit(c.id);}}>
                            <input type="text" placeholder="답글 남기기" value={replyText} onChange={(e) => setReplyText(e.target.value)} />
                            <button type='submit'>등록</button>
                        </form>
                    )}

                    <ul style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>
                        {comments.filter((reply) => reply.parentIndex === c.id)
                        .map((reply, reIdx) => (
                            <li key={`reply-${c.id}-${reIdx}`}>
                                ↳ <strong>{reply.user}</strong> ({reply.date}) <br/>
                                {reply.text}
                                <CommentEdit comment={reply} editHandler={editHandler} />
                                <CommentDel id={reply.id} onDelete={handleDelete} />
                            </li>
                        ))}
                    </ul>
                </li>
                ))}
            </ul>
        </div>
    );
}
export default MovieComment
