import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export function useComment(movieId) {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const userName = localStorage.getItem('userName');
    const [replyId, setReplyId] = useState(null);
    const [replyText, setReplyText] = useState('');
    const [count, setCount] = useState(0);
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!comment) return;
        const newComment = {movieId, user:userName, text:comment, date: new Date().toLocaleString(), parentIndex: null, id: uuidv4()};
        setComments([...comments, newComment]);
        setComment('');
        setCount((prev) => prev +1 );
    };

    const handleReplyClick = (id) => {
        setReplyId(id === replyId ? null : id);
        setReplyText('');
    };

    const handleReplySubmit = (id) => {
        if (!replyText) return;
        const newReply = {movieId, user:userName, text: replyText, date: new Date().toLocaleString(), parentIndex: id, id: uuidv4()}
        setComments([...comments, newReply]);
        setReplyText('');
        setReplyId(null);
        setCount((prev) => prev +1 );
    };

    const handleDelete = (id) => {
        const updateCommens = [...comments];
        const targetCommnetIndex = updateCommens.findIndex((item) => item.id === id)
        updateCommens.splice(targetCommnetIndex, 1);
        setComments(updateCommens);
    };

    //idx , text 
    const editHandler = (id, editText) => {
        const updateCommens = [...comments]; 
        const targetCommnetIndex = updateCommens.findIndex((item) => item.id === id)
        updateCommens[targetCommnetIndex] = {...updateCommens[targetCommnetIndex], text : editText};
        setComments(updateCommens)
    };

    return {
        comment, setComment, comments, setComments, handleSubmit, handleReplyClick, handleReplySubmit, replyId, setReplyId, replyText, setReplyText
        , handleDelete, editHandler
    }
}