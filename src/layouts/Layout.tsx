import { useNavigate, useLocation, Outlet } from 'react-router-dom';

export default function Layout() {
  const navigate = useNavigate();
  const loc = useLocation();
  const isAdminPath = loc.pathname.startsWith('/admin');

  const mainMenu = [
    { n: 'Tổng quan', i: '📊', p: '/dashboard' },
    { n: 'Quản trị trường', i: '🏛️', p: '/admin/nhan-su' },
    { n: 'Soạn bài AI', i: '🤖', p: '/soanbai-ai' },
    { n: 'Sổ điểm thông minh', i: '📈', p: '/so-diem' },
    { n: 'Sổ chủ nhiệm', i: '📅', p: '/so-chu-nhiem' },
    { n: 'Rubrics', i: '📝', p: '/rubrics' },
    { n: 'Kế hoạch chuyên môn', i: '📚', p: '/ke-hoach' },
    { n: 'Video bài giảng', i: '🎬', p: '/video' },
    { n: 'Game center', i: '🎮', p: '/game' },
    { n: 'Kho tài nguyên', i: '📁', p: '/kho' },
    { n: 'Giới thiệu ứng dụng', i: 'ℹ️', p: '/about' },
  ];

  const adminSubMenu = [
    { n: 'Nhân sự & Tổ chức', p: '/admin/nhan-su' },
    { n: 'Hành chính Văn phòng', p: '/admin/hanh-chinh' },
    { n: 'Chi bộ', p: '/admin/chi-bo' },
    { n: 'Công đoàn', p: '/admin/cong-doan' },
    { n: 'Quản lý tài chính', p: '/admin/tai-chinh' },
    { n: 'Quản lý chuyên môn', p: '/admin/chuyen-mon' },
    { n: 'Quản lý cơ sở vật chất', p: '/admin/co-so-vat-chat' },
    { n: 'Báo cáo tổng hợp', p: '/admin/bao-cao' },
    { n: 'Soạn TKB AI', p: '/admin/tkb-ai' },
  ];

  return (
    <div style={{ display: 'flex', height: '100vh', background: '#f1f5f9', overflow: 'hidden' }}>
      {/* SIDEBAR CHÍNH (BẤT BIẾN) */}
      <div style={{ width: '280px', background: '#1e293b', display: 'flex', flexDirection: 'column', padding: '20px 15px', zIndex: 20 }}>
        <div style={{ textAlign: 'center', marginBottom: '25px' }}>
          <div style={{ width: '60px', height: '60px', background: 'white', borderRadius: '50%', margin: '0 auto 10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px', border: '3px solid #fbbf24' }}>🏫</div>
          <h2 style={{ color: 'white', fontSize: '15px', fontWeight: '900', margin: 0 }}>THCS BÌNH HÒA</h2>
          <p style={{ color: '#94a3b8', fontSize: '11px', margin: '4px 0 0' }}>NH: 2025 - 2026</p>
        </div>
        <nav style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '5px' }}>
          {mainMenu.map(m => (
            <div key={m.p} onClick={() => navigate(m.p)} style={{
              padding: '12px 15px', borderRadius: '12px', color: loc.pathname.includes(m.p) ? '#1e293b' : '#94a3b8',
              background: loc.pathname.includes(m.p) ? '#fbbf24' : 'transparent',
              cursor: 'pointer', fontWeight: 'bold', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '10px'
            }}><span>{m.i}</span> {m.n.toUpperCase()}</div>
          ))}
        </nav>
        <button onClick={() => window.close()} style={{ marginTop: '15px', padding: '15px', borderRadius: '15px', background: '#ef4444', color: 'white', border: 'none', fontWeight: '900', cursor: 'pointer' }}>🚪 THOÁT ỨNG DỤNG</button>
      </div>

      {/* SIDEBAR PHỤ QUẢN TRỊ */}
      {isAdminPath && (
        <div style={{ width: '250px', background: 'white', borderRight: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', padding: '20px 15px', animation: 'slideIn 0.3s' }}>
          <h3 style={{ fontSize: '11px', color: '#64748b', fontWeight: '900', marginBottom: '15px' }}>QUẢN TRỊ TRƯỜNG</h3>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {adminSubMenu.map(s => (
              <div key={s.p} onClick={() => navigate(s.p)} style={{
                padding: '10px 15px', borderRadius: '8px', fontSize: '13px', fontWeight: 'bold',
                color: loc.pathname.startsWith(s.p) ? '#2563eb' : '#475569',
                background: loc.pathname.startsWith(s.p) ? '#eff6ff' : 'transparent',
                cursor: 'pointer'
              }}>{s.n}</div>
            ))}
          </nav>
        </div>
      )}
      <div style={{ flex: 1, overflowY: 'auto' }}><Outlet /></div>
      <style>{`@keyframes slideIn { from { width: 0; opacity: 0; } to { width: 250px; opacity: 1; } }`}</style>
    </div>
  );
}