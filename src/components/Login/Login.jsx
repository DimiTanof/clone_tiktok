import React, { useState } from 'react';
import { Login } from 'firebase'; // import Firebase Authentication
import './Login.css'; // import CSS file

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      // Đăng nhập thành công, chuyển hướng người dùng đến trang chính
    } catch (error) {
      // Xử lý lỗi đăng nhập
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <h1>Đăng nhập</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Mật khẩu"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Đăng nhập</button>
    </div>
  );
}

export default Login;
