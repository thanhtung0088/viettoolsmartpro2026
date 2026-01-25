import React from 'react';

const AdminHanhChinh = () => {
  const cards = [
    { n: 'Kế toán - Tài vụ', i: '💰' }, { n: 'Học vụ - Văn thư', i: '📂' },
    { n: 'Công nghệ thông tin', i: '💻' }, { n: 'Y tế học đường', i: '🏥' },
    { n: 'Thiết bị dạy học', i: '🛠️' }, { n: 'Thư viện', i: '📚' },
    { n: 'Tư vấn học đường', i: '🤝' }, { n: 'Đoàn - Đội', i: '🚩' },
    { n: 'Bảo vệ - Phục vụ', i: '🛡️' }, { n: 'Giám thị', i: '📋' }
  ];

  return (
    <div style={{ padding: '25px' }}>
      <h2 style={{ marginBottom: '25px', color: '#1e293b' }}>📂 HÀNH CHÍNH VĂN PHÒNG</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px' }}>
        {cards.map(c => (
          <div key={c.n} style={{ background: '#fff', padding: '30px 15px', borderRadius: '20px', textAlign: 'center', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', borderBottom: '4px solid #059669' }}>
            <div style={{ fontSize: '40px', marginBottom: '10px' }}>{c.i}</div>
            <div style={{ fontWeight: 'bold', fontSize: '14px', color: '#334155' }}>{c.n}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AdminHanhChinh;