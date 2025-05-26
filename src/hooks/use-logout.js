import { useNavigate } from "react-router-dom";

export function useLogout() {
    const navigate = useNavigate();

    const logoutHandler = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        alert('로그아웃 되었습니다.');
        navigate('/');
    }

    return (
        logoutHandler
    )
}