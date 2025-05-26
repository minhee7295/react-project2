import { useState } from "react"
import { users } from '../data/users';
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

        const user = users.find((i) => i.id === id && i.password === password);

        if(user) {
            const fakeToken = 'fake-token' + Date.now();
            localStorage.setItem('token', fakeToken);
            localStorage.setItem('userName', user.name); 

            alert(`${user.name}님 환영합니다!`);
            navigate('/home');
        } else {
            alert(`이메일 또는 비밀번호가 올바르지 않습니다.`);
        }
    };

    return (
        <div style={{ padding: '2rem' }}>
            <h2>로그인</h2>
            <form onSubmit={submitHandler}>
                <input type="id" placeholder="아이디" value={id} onChange={(e) => setId(e.target.value)} required />
                <input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">로그인</button>
            </form>
        </div>
    )

}
export default LoginPage