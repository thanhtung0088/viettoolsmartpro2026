import React from 'react';

const AdminChuyenMon = () => {
  const actions = [
    { n: 'Phân công giảng dạy', c: '#3b82f6', desc: 'Quản lý số tiết, môn học theo học kỳ' },
    { n: 'Kế hoạch giáo dục', c: '#10b981', desc: 'Xây dựng khung chương trình năm học' },
    { n: 'Dự giờ - Thao giảng', c: '#f59e0b', desc: 'Lịch dự giờ và phiếu đánh giá giáo viên' },
    { n: 'Bồi dưỡng HSG', c: '#8b5cf6', desc: 'Danh sách và lịch dạy bồi dưỡng' }
  ];

  return (
    <div style={{ padding: '30px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <div>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>📚 QUẢN LÝ CHUYÊN MÔN</h2>
          <p style={{ color: '#64748b' }}>Hệ thống quản lý chất lượng dạy và học</p>
        </div>
        <button style={{ background: '#3b82f6', color: 'white', padding: '10px 20px', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>+ TẠO KẾ HOẠCH MỚI</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        {actions.map((a, i) => (
          <div key={i} style={{ background: 'white', padding: '20px', borderRadius: '15px', borderTop: `5px solid ${a.c}`, boxShadow: '0 4px 6px rgba(0,0,0,0.05)', cursor: 'pointer' }}>
            <h4 style={{ color: a.c, marginBottom: '10px', fontWeight: 'bold' }}>{a.n}</h4>
            <p style={{ fontSize: '13px', color: '#64748b' }}>{a.desc}</p>
            <div style={{ marginTop: '15px', fontSize: '12px', color: '#3b82f6', fontWeight: 'bold' }}>MỞ TRANG CÔNG VIỆC →</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '40px', background: 'white', padding: '20px', borderRadius: '15px', border: '1px solid #e2e8f0' }}>
        <h4 style={{ marginBottom: '20px' }}>DỮ LIỆU ĐANG XỬ LÝ</h4>
        <div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', border: '2px dashed #e2e8f0', borderRadius: '10px' }}>
          Đang tải biểu đồ phân tích chuyên môn...
        </div>
      </div>
    </div>
  );
};

export default AdminChuyenMon;