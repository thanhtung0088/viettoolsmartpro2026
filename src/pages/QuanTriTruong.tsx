// src/pages/QuanTriTruong.tsx - Trang Quản trị trường với sidebar phụ
import { useState } from 'react';

export default function QuanTriTruong() {
  const [selectedMain, setSelectedMain] = useState('nhansu'); // Mở đầu là Nhân sự & Tổ chức
  const [expandedHanhChinh, setExpandedHanhChinh] = useState(false);

  const mainMenus = [
    { id: 'nhansu', label: 'Nhân sự & Tổ chức' },
    { id: 'hanhchinh', label: 'Hành chính Văn phòng' },
    { id: 'chibo', label: 'Chi bộ' },
    { id: 'congdoan', label: 'Công đoàn' },
    { id: 'taichinh', label: 'Quản lý tài chính' },
    { id: 'chuyenmon', label: 'Quản lý chuyên môn' },
    { id: 'cosovatchat', label: 'Quản lý cơ sở vật chất' },
    { id: 'baocao', label: 'Báo cáo tổng hợp' },
    { id: 'tktbai', label: 'Soạn TKB AI' },
  ];

  const hanhChinhSub = [
    { id: 'ketoan', label: 'Kế toán - Tài vụ' },
    { id: 'hocvu', label: 'Học vụ - Văn thư' },
    { id: 'cntt', label: 'Công nghệ thông tin' },
    { id: 'yte', label: 'Y tế học đường' },
    { id: 'thietbi', label: 'Thiết bị dạy học' },
    { id: 'thuvien', label: 'Thư viện' },
    { id: 'tuvan', label: 'Tư vấn học đường' },
    { id: 'doandoi', label: 'Đoàn - Đội' },
    { id: 'baove', label: 'Bảo vệ - Phục vụ' },
    { id: 'giamthi', label: 'Giám thị' },
  ];

  const getTitle = () => {
    if (selectedMain === 'hanhchinh') return expandedHanhChinh ? 'Hành chính Văn phòng - Chọn chuyên môn' : 'Hành chính Văn phòng';
    return mainMenus.find(m => m.id === selectedMain)?.label || 'Quản trị trường';
  };

  return (
    <div style={{ display: 'flex', height: '100vh', background: '#f8f9fa' }}>
      {/* Sidebar phụ */}
      <div style={{
        width: '320px',
        background: '#ffffff',
        borderRight: '1px solid #dee2e6',
        padding: '20px',
        overflowY: 'auto',
        boxShadow: '2px 0 10px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ margin: '0 0 25px 0', color: '#4e73df', fontSize: '24px' }}>Quản trị trường</h2>

        <ul style={{ listStyle: 'none', padding: 0 }}>
          {mainMenus.map(item => (
            <li key={item.id} style={{ marginBottom: '10px' }}>
              <button
                onClick={() => {
                  setSelectedMain(item.id);
                  if (item.id !== 'hanhchinh') setExpandedHanhChinh(false);
                }}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  background: selectedMain === item.id ? '#4e73df' : '#f1f3f5',
                  color: selectedMain === item.id ? 'white' : '#333',
                  border: 'none',
                  borderRadius: '10px',
                  textAlign: 'left',
                  fontSize: '16px',
                  cursor: 'pointer',
                  fontWeight: selectedMain === item.id ? 'bold' : 'normal',
                  transition: 'all 0.2s'
                }}
              >
                {item.label}
                {item.id === 'hanhchinh' && ' ' + (expandedHanhChinh ? '▲' : '▼')}
              </button>

              {/* Menu con Hành chính Văn phòng */}
              {item.id === 'hanhchinh' && (
                <div style={{ 
                  maxHeight: expandedHanhChinh ? '600px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.4s ease'
                }}>
                  <ul style={{ paddingLeft: '25px', margin: '12px 0', listStyle: 'none' }}>
                    {hanhChinhSub.map(sub => (
                      <li key={sub.id} style={{ marginBottom: '8px' }}>
                        <button
                          onClick={() => alert(`Mở chuyên môn: ${sub.label}`)}
                          style={{
                            width: '100%',
                            padding: '10px 16px',
                            background: '#f8f9fa',
                            border: 'none',
                            borderRadius: '8px',
                            textAlign: 'left',
                            fontSize: '14px',
                            cursor: 'pointer',
                            transition: 'background 0.2s'
                          }}
                          onMouseEnter={e => e.currentTarget.style.background = '#e9ecef'}
                          onMouseLeave={e => e.currentTarget.style.background = '#f8f9fa'}
                        >
                          {sub.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Không gian làm việc chính */}
      <div style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
        <h1 style={{ marginTop: 0, color: '#333', fontSize: '32px' }}>{getTitle()}</h1>

        {/* Thanh tác vụ chuyên môn (mẫu - tất cả nút kích hoạt) */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '15px',
          marginBottom: '40px'
        }}>
          <button onClick={() => alert('Thêm mới')} style={toolbarBtn}>Thêm mới</button>
          <button onClick={() => alert('Sửa')} style={toolbarBtn}>Sửa</button>
          <button onClick={() => alert('Xóa')} style={toolbarBtn}>Xóa</button>
          <button onClick={() => alert('Xuất Excel')} style={toolbarBtn}>Xuất Excel</button>
          <button onClick={() => alert('In báo cáo')} style={toolbarBtn}>In báo cáo</button>
          <button onClick={() => alert('Tìm kiếm')} style={toolbarBtn}>Tìm kiếm</button>
          <button onClick={() => alert('Lưu thay đổi')} style={toolbarBtn}>Lưu thay đổi</button>
        </div>

        {/* Nội dung placeholder cho không gian làm việc */}
        <div style={{
          background: '#ffffff',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          minHeight: '500px'
        }}>
          <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.6' }}>
            Đây là khu vực làm việc cho mục "{getTitle()}".<br />
            Bạn có thể thêm bảng danh sách, form nhập liệu, biểu đồ thống kê, lịch sử thay đổi, hoặc nội dung chuyên môn ở đây.<br />
            Tất cả các nút tác vụ ở trên đều đã kích hoạt (hiện alert để test chức năng).
          </p>
        </div>
      </div>
    </div>
  );
}

const toolbarBtn = {
  padding: '10px 20px',
  background: '#4e73df',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  fontSize: '14px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'background 0.2s',
  boxShadow: '0 2px 8px rgba(78,115,223,0.3)'
};