import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

function MovieList() {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    const apiKey = import.meta.env.VITE_TMDB_API_KEY;

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/discover/movie', {
            params : { api_key : apiKey, language : 'ko-KR', sort_by : 'popularity.desc', page : page }
        })
        .then((res) => setMovies(res.data.results))
        .catch((err) => console.error('영화 데이터를 불러오는데 실패했습니다:', err));
    }, [page]);

    return (
        <div>
        <h2>영화 목록</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                {movies.map((movie) => (
                <Link to={`/movie/${movie.id}`} key={movie.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ width: '200px' }}>
                        <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title} style={{ width: '100%' }} />
                        <p>{movie.title}</p>
                    </div>
                </Link>
                ))}
            </div>
            <div>
                <button onClick={() => setPage((p) => Math.max(p - 1, 1))} disabled={page === 1}>이전</button>
                <button onClick={() => setPage((p) => p+1)}>다음</button>
            </div>
        </div>
    )
}
export default MovieList