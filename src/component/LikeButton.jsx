import { useEffect, useState } from "react";
import {motion} from 'framer-motion';

function LikeButton({movieId}) {
    const likeKey = `like-${movieId}`;
    const dislikeKey = `dislike=${movieId}`;

    const [like, setLike] = useState(false);
    const [dislike, setDisLike] = useState(false);

    useEffect(() => {
        const liked = localStorage.getItem(likeKey) === 'true';
        const disLiked = localStorage.getItem(dislikeKey) === 'true';
        setLike(liked);
        setDisLike(disLiked);
    }, [movieId]);

    const handleLike = () => {
        const newLike = !like;
        setLike(newLike);
        setDisLike(false);
        localStorage.setItem(likeKey, newLike);
        localStorage.setItem(dislikeKey, false);
    }

    const handleDislike = () => {
        const newDisLike = !dislike;
        setDisLike(newDisLike);
        setLike(false);
        localStorage.setItem(dislikeKey, newDisLike);
        localStorage.setItem(likeKey, false);
    }


    return (
    <div style={{ marginTop: '1rem' }}>
      <motion.button onClick={handleLike} whileTap={{ scale: 1.3 }} animate={{ color: like ? "#ff4d4f" : "#000" }}
       transition={{ type: "spring", stiffness: 300 }} style={{ fontSize: '1.2rem', marginRight: '1rem',  cursor: "pointer"  }}>
        {like ? "👍 좋아요 취소" : "👍 좋아요"}
      </motion.button>
      <motion.button onClick={handleDislike} whileTap={{ scale: 1.3 }} animate={{ color: dislike ? "#ff4d4f" : "#000" }}
       transition={{ type: "spring", stiffness: 300 }} style={{ fontSize: '1.2rem', marginRight: '1rem',  cursor: "pointer"  }}>
        {dislike ? "👎 싫어요 취소" : "👎 싫어요"}
      </motion.button>
    </div>
  );
}
export default LikeButton