import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const WorkspaceHCVP = () => {
  const { type } = useParams();
  const nav = useNavigate();
  
  const config: any = {
    'ke-toan': { n: 'Kế toán - Tài vụ', tools: ['Lập bảng lương', 'Quản lý thu chi', 'Báo cáo quyết toán', 'Hóa đơn điện tử'] },
    'hoc-vu': { n: 'Học vụ - Văn thư', tools: ['Tiếp nhận công văn', 'Quản lý hồ sơ HS', 'Cấp phát văn bằng', 'Lưu trữ hồ sơ'] },
    'cntt': { n: 'Công nghệ thông tin', tools: ['Quản trị Website', 'Hệ thống hạ tầng', 'Bảo trì phần mềm', 'Hỗ trợ kỹ thuật'] },
    'y-te': { n: 'Y tế học đường', tools: ['Hồ sơ sức khỏe', 'Cấp phát thuốc', 'Bảo hiểm y tế', 'Vệ sinh học đường'] },
    'thiet-bi': { n: 'Thiết bị dạy học', tools: ['Danh mục thiết bị', 'Phiếu mượn đồ dùng', 'Thanh lý tài sản', 'Sửa chữa thiết bị'] },
    'thu-vien': { n: 'Thư viện', tools: ['Quản lý đầu sách', 'Thẻ thư viện', 'Theo dõi mượn trả', 'Sách giáo khoa'] },
    'tu-van': { n: 'Tư vấn học đường', tools: ['Lịch tư vấn', 'Hồ sơ tâm lý', 'Chuyên đề kỹ năng', 'Hỗ trợ học sinh'] },
    'doan-doi': { n: 'Đoàn - Đội', tools: ['Sổ chi đoàn', 'Kế hoạch phong trào', 'Quản lý đội viên', 'Phát thanh học đường'] },
    'bao-ve': { n: 'Bảo vệ - Phục vụ', tools: ['Lịch trực bảo vệ', 'Sổ khách ra vào', 'Quản lý vệ sinh', 'An toàn PCCC'] },
    'giam-thi': { n: 'Giám thị', tools: ['Sổ trực tuần', 'Theo dõi nề nếp', 'Biên bản vi phạm', 'Thi đua lớp'] },
  };

  const item = config[type || ''] || config['ke-toan'];

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => nav('/admin/hcvp')} style={{ marginBottom: '15px', padding: '5px 15px', cursor: 'pointer' }}>← Quay lại</button>
      <div style={{ background: '#fff', borderRadius: '15px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
        <div style={{ background: '#1e293b', color: '#fff', padding: '15px 25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0 }}>💼 KHÔNG GIAN LÀM VIỆC: {item.n.toUpperCase()}</h3>
          <div style={{ display: 'flex', gap: '10px' }}>
            {item.tools.map((t: string) => (
              <button key={t} style={{ padding: '8px 15px', background: '#059669', border: 'none', color: '#fff', borderRadius: '6px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer' }}>{t.toUpperCase()}</button>
            ))}
          </div>
        </div>
        <div style={{ height: '500px', padding: '40px', textAlign: 'center', color: '#94a3b8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
           <span style={{ fontSize: '100px', opacity: 0.2 }}>📁</span>
           <p>HỆ THỐNG QUẢN LÝ NGHIỆP VỤ {item.n.toUpperCase()} ĐANG SẴN SÀNG</p>
           <p style={{ fontSize: '12px' }}>Dữ liệu được bảo mật và lưu trữ theo quy định của Ngành Giáo dục</p>
        </div>
      </div>
    </div>
  );
};
export default WorkspaceHCVP;