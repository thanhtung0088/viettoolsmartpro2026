import { Routes, Route, Navigate, useNavigate, useLocation, Outlet } from 'react-router-dom';
import { useState, useRef } from 'react';

import Dashboard from './pages/Dashboard';
import AdminNhanSu from './pages/AdminNhanSu';
import AdminHanhChinh from './pages/AdminHanhChinh';
import SoanBaiAL from './pages/SoanBaiAL.tsx';  // ← thêm .tsx ở cuối
import SoDiem from './pages/SoDiem';
import SoChuNhiem from './pages/SoChuNhiem';
import RubricsDanhGia from './pages/RubricsDanhGia';
import KeHoachChuyenMon from './pages/KeHoachChuyenMon';
import VideoBaiGiang from './pages/VideoBaiGiang';
import GameCenter from './pages/GameCenter';
import KhoTainguyen from './pages/KhoTainguyen';

// TRỢ LÝ AI ROBOT CHUYỂN ĐỘNG
const RobotAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 9999 }}>
      <style>{`
        @keyframes floating {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .robot-hover { animation: floating 3s ease-in-out infinite; cursor: pointer; }
      `}</style>
     
      {isOpen && (
        <div style={{ width: '320px', background: '#fff', borderRadius: '25px', boxShadow: '0 20px 60px rgba(0,0,0,0.2)', marginBottom: '15px', border: '2px solid #059669', overflow: 'hidden' }}>
          <div style={{ background: '#059669', color: '#fff', padding: '15px', fontWeight: '900', textAlign: 'center' }}>🤖 TRỢ LÝ THÔNG MINH</div>
          <div style={{ padding: '20px', height: '180px', background: '#f8fafc', fontSize: '13px' }}>
            Chào thầy cô! Tôi là Robot AI của THCS Bình Hòa. Tôi có thể giúp thầy cô nhận xét điểm số hoặc soạn bài giảng nhanh chóng!
          </div>
          <div style={{ padding: '10px' }}><input placeholder="Hỏi Robot ngay..." style={{ width: '100%', padding: '10px', borderRadius: '10px', border: '1px solid #ddd' }} /></div>
        </div>
      )}
      <div className="robot-hover" onClick={() => setIsOpen(!isOpen)} style={{ width: '80px', height: '80px', background: '#059669', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px', boxShadow: '0 10px 30px rgba(5,150,105,0.4)', border: '4px solid #fff' }}>
        🤖
      </div>
    </div>
  );
};

const MainLayout = () => {
  const nav = useNavigate();
  const loc = useLocation();
  const fileRef = useRef<HTMLInputElement>(null);
  const [logo, setLogo] = useState(localStorage.getItem('school-logo') || "/logo_default.png");

  const handleLogoChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (r) => {
        const url = r.target?.result as string;
        setLogo(url);
        localStorage.setItem('school-logo', url);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw', overflow: 'hidden' }}>
      {/* SIDEBAR CHÍNH */}
      <div style={{ width: '260px', background: '#1e293b', display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
        <div style={{ padding: '30px 20px', textAlign: 'center' }}>
          {/* LOGO */}
          <div onClick={() => fileRef.current?.click()} style={{ width: '130px', height: '130px', margin: '0 auto', borderRadius: '50%', background: '#fff', border: '5px solid #059669', cursor: 'pointer', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 15px rgba(0,0,0,0.3)' }}>
             <img src={logo} style={{ width: '90%', height: '90%', objectFit: 'contain' }} alt="logo" />
             <input type="file" ref={fileRef} hidden onChange={handleLogoChange} accept="image/*" />
          </div>
          <div style={{ color: '#fbbf24', fontWeight: '950', marginTop: '15px', fontSize: '15px' }}>THCS BÌNH HÒA</div>
          <div style={{ color: '#94a3b8', fontSize: '10px', marginTop: '5px' }}>NH: 2025 - 2026</div>
        </div>
       
        <nav style={{ flex: 1, padding: '0 15px', overflowY: 'auto' }}>
          {[
            { n: '📊 TỔNG QUAN', p: '/dashboard' },
            { n: '🏛️ QUẢN TRỊ TRƯỜNG', p: '/admin/nhan-su' },
            { n: '🔮 SOẠN BÀI AI', p: '/soan' },
            { n: '📈 SỔ ĐIỂM THÔNG MINH', p: '/diem' },
            { n: '📋 SỔ CHỦ NHIỆM', p: '/chunhiem' },
            { n: '⚖️ RUBRICS', p: '/rubrics' },
            { n: '📚 KẾ HOẠCH CHUYÊN MÔN', p: '/ke-hoach' },
            { n: '🎥 VIDEO BÀI GIẢNG', p: '/video' },
            { n: '🎮 GAME CENTER', p: '/game' },
            { n: '📁 KHO TÀI NGUYÊN', p: '/kho' },
            { n: 'ℹ️ GIỚI THIỆU ỨNG DỤNG', p: '/about' },
          ].map(m => (
            <div 
              key={m.p} 
              onClick={() => nav(m.p)} 
              style={{
                padding: '14px 18px',
                color: loc.pathname === m.p || (loc.pathname.startsWith('/admin') && m.p.includes('admin')) ? '#fff' : '#94a3b8',
                background: loc.pathname === m.p || (loc.pathname.startsWith('/admin') && m.p.includes('admin')) ? '#059669' : 'transparent',
                borderRadius: '15px',
                cursor: 'pointer',
                fontWeight: '900',
                fontSize: '11px',
                marginBottom: '5px'
              }}
            >
              {m.n}
            </div>
          ))}
        </nav>
      </div>

      <div style={{ flex: 1, background: '#f1f5f9', overflowY: 'auto' }}>
        <Outlet />
      </div>

      <RobotAI />
    </div>
  );
};

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to="/dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="admin/nhan-su" element={<AdminNhanSu />} />
        <Route path="admin/hanh-chinh" element={<AdminHanhChinh />} />
        <Route path="soan" element={<SoanBaiAL />} />  {/* ← Sửa ở đây luôn cho khớp */}
        <Route path="diem" element={<SoDiem />} />
        <Route path="video" element={<VideoBaiGiang />} />
        <Route path="chunhiem" element={<SoChuNhiem />} />
        <Route path="ke-hoach" element={<KeHoachChuyenMon />} />
        <Route path="game" element={<GameCenter />} />
        <Route path="kho" element={<KhoTainguyen />} />
        <Route path="rubrics" element={<RubricsDanhGia />} />
      </Route>
    </Routes>
  );
}