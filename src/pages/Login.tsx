// src/pages/Login.tsx
import { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Ép kiểu về chữ thường và xóa khoảng trắng để tránh gõ nhầm
    const user = username.trim().toLowerCase();
    const pass = password.trim();

    // Chấp nhận admin / 123456
    if (user === 'admin' && pass === '123456') {
      localStorage.setItem('isLoggedIn', 'true');
      // Ép trình duyệt nhảy trang để cắt đuôi mọi lỗi chớp chớp
      window.location.href = '/dashboard';
    } else {
      alert('Sai thông tin! Bạn hãy nhập đúng: admin và 123456');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a] font-sans">
      <div className="bg-[#1e293b] p-10 rounded-[32px] shadow-2xl w-full max-w-md border border-slate-700">
        <h2 className="text-3xl font-black text-center mb-8 text-white tracking-tight">
          VIETEDU SMART
        </h2>
        
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <input 
              type="text" 
              placeholder="Tên đăng nhập (admin)" 
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-600 text-white font-bold outline-none focus:border-blue-500 transition-all"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="off"
            />
          </div>
          
          <div>
            <input 
              type="password" 
              placeholder="Mật khẩu (123456)" 
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-600 text-white font-bold outline-none focus:border-blue-500 transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-black text-xl shadow-lg shadow-blue-900/20 transition-all active:scale-95"
          >
            ĐĂNG NHẬP
          </button>
        </form>
        
        <p className="mt-6 text-center text-slate-500 text-sm font-medium">
          Dùng tài khoản <span className="text-blue-400">admin</span> mật khẩu <span className="text-blue-400">123456</span>
        </p>
      </div>
    </div>
  );
}