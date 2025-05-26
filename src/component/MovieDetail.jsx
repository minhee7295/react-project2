import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import MovieComment from "./MovieComment";
import axios from "axios";
import LikeButton from "./LikeButton";

function MovieDetail() {
    const {id} = useParams(); //파라미터값을 url통해서 넘겨 받기 가능
    const [movie, setMovie] = useState(null);
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
            params: { api_key: apiKey, language: 'ko-KR' }
        })
        .then((res) => setMovie(res.data))
        .catch((err) => console.error('영화 상세 정보를 불러오는데 실패했습니다:', err));
    }, [id]);

    if (!movie) return <div>로딩 중...</div>;

    return (
        <div style={{ padding: '1rem' }}>
            <button onClick={() => navigate(-1)} style={{position: 'absolute', right : '8px', top : '8px'}}>뒤로가기</button>
            <h2>{movie.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} style={{ width: '300px' }} />
            <p><strong>개요:</strong> {movie.overview}</p>
            <p><strong>평점:</strong> {movie.vote_average}</p>
            <p><strong>개봉일:</strong> {movie.release_date}</p>
            <LikeButton movieId={movie.id} />
            <MovieComment movieId={movie.id} />
        </div>
    );
}
export default MovieDetail