import { useLocation } from 'react-router-dom';

export default function AdminManager() {
  const location = useLocation();
  const path = location.pathname;

  const config: any = {
    '/admin/chi-bo': { n: 'Chi bộ Đảng', i: '☭', c: '#ef4444', tasks: ['Nghị quyết', 'Đảng viên', 'Đảng phí'] },
    '/admin/cong-doan': { n: 'Công đoàn - Đoàn TN', i: '🤝', c: '#3b82f6', tasks: ['Thi đua', 'Thăm hỏi', 'Phong trào'] },
    '/admin/tai-chinh': { n: 'Quản lý tài chính', i: '💰', c: '#10b981', tasks: ['Dự toán', 'Quyết toán', 'Thu chi'] },
    '/admin/co-so-vat-chat': { n: 'Cơ sở vật chất', i: '🏗️', c: '#f59e0b', tasks: ['Kiểm kê', 'Bảo trì', 'Mua sắm'] },
    '/admin/chuyen-mon': { n: 'Quản lý chuyên môn', i: '📖', c: '#8b5cf6', tasks: ['Kế hoạch', 'Thanh tra', 'Dự giờ'] },
    '/admin/bao-cao': { n: 'Báo cáo tổng hợp', i: '📊', c: '#06b6d4', tasks: ['EMIS', 'Thống kê', 'Phổ cập'] },
    '/admin/tkb-ai': { n: 'Soạn TKB AI', i: '🤖', c: '#1e293b', tasks: ['Phân công', 'Ràng buộc', 'Tối ưu'] },
    '/soanbai-ai': { n: 'Soạn bài AI', i: '🤖', c: '#2563eb', tasks: ['Tạo giáo án', 'Tạo bài tập', 'Gợi ý ý tưởng'] },
    '/so-diem': { n: 'Sổ điểm thông minh', i: '📈', c: '#d97706', tasks: ['Nhập điểm', 'Tính trung bình', 'Xuất học bạ'] },
  };

  const cur = config[path] || { n: 'Hệ thống', i: '⚙️', c: '#64748b', tasks: ['Cài đặt'] };

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ background: cur.c, padding: '30px 40px', borderRadius: '35px', color: 'white' }}>
        <h2 style={{ margin: 0, fontSize: '30px', fontWeight: '900' }}>{cur.i} {cur.n.toUpperCase()}</h2>
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          {cur.tasks.map((t: string) => (
            <button key={t} style={{ padding: '12px 25px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.2)', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>{t.toUpperCase()}</button>
          ))}
        </div>
      </div>
      <div style={{ flex: 1, minHeight: '550px', background: 'white', borderRadius: '40px', border: '2px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '80px' }}>{cur.i}</div>
          <h2 style={{ color: '#1e293b', fontWeight: '900' }}>KHÔNG GIAN LÀM VIỆC {cur.n.toUpperCase()}</h2>
          <p style={{ color: '#94a3b8' }}>Hệ thống đã sẵn sàng. Hãy chọn tác vụ phía trên để bắt đầu.</p>
        </div>
      </div>
    </div>
  );
}