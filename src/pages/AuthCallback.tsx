// src/pages/AuthCallback.tsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    // Lấy session sau khi Supabase xử lý callback từ Google
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        // Login thành công → redirect về dashboard
        navigate('/dashboard', { replace: true });
      } else {
        // Lỗi → quay về login
        navigate('/login', { replace: true });
      }
    }).catch((err) => {
      console.error('Lỗi xử lý callback:', err);
      navigate('/login');
    });
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Đang xác thực đăng nhập...</h2>
        <p className="text-gray-600 text-lg">Vui lòng chờ trong giây lát</p>
        <div className="mt-6 animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
      </div>
    </div>
  );
}