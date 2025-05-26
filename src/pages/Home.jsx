import MovieList from "../component/MovieList";
import { useLogout } from "../hooks/use-logout";

function Home() {
    const {logoutHandler} = useLogout();

    return (
        <div>
            <button onClick={logoutHandler} style={{position: 'absolute', right : '8px', top : '8px'}}>로그아웃</button>
            <h1>🎬 Movie 🎬</h1>
            <div>
                <MovieList />
            </div>
        </div>
    );
}
export default Home