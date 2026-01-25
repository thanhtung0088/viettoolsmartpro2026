export default function KhoTaiNguyen() {
  const resources = [
    { n: 'BỘ GIÁO DỤC', url: 'https://moet.gov.vn', i: '🏛️' },
    { n: 'HÀNH TRANG SỐ', url: 'https://hanhtrangso.nxbgd.vn', i: '📒' },
    { n: 'THƯ VIỆN VIOLET', url: 'https://violet.vn', i: '📚' },
    { n: 'HỌC LIỆU MOET', url: 'https://hoclieu.vn', i: '💻' },
    { n: 'TẬP HUẤN GD', url: 'https://taphuan.nxbgd.vn', i: '✍️' },
    { n: 'TRƯỜNG HỌC KẾT NỐI', url: 'https://truonghocketnoi.edu.vn', i: '🌐' },
    { n: 'KHAN ACADEMY', url: 'https://vi.khanacademy.org', i: '🎓' },
    { n: 'CANVA GD', url: 'https://canva.com', i: '🎨' },
  ];

  return (
    <div style={{ background: 'white', padding: '30px', borderRadius: '35px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}>
      <h2 style={{ fontWeight: '900', marginBottom: '25px' }}>📁 KHO TÀI NGUYÊN SỐ</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
        {resources.map((r, i) => (
          <a key={i} href={r.url} target="_blank" style={{
            textDecoration: 'none', background: '#f8fafc', padding: '20px', borderRadius: '20px', 
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', border: '1px solid #e2e8f0', transition: '0.3s'
          }} onMouseEnter={e => e.currentTarget.style.borderColor = '#3b82f6'}>
            <span style={{ fontSize: '35px' }}>{r.i}</span>
            <span style={{ color: '#1e293b', fontWeight: '900', fontSize: '12px' }}>{r.n}</span>
          </a>
        ))}
      </div>
    </div>
  );
}