import { useState } from 'react';

// --- ĐỊNH NGHĨA KIỂU DỮ LIỆU ---
type SubMenuItem = { id: string; label: string; icon: string };
type MenuItem = {
  id: string;
  label: string;
  icon: string;
  subItems?: SubMenuItem[];
};

export default function AdminTruong() {
  const [activeTab, setActiveTab] = useState('nhansu');
  const [expandedMenu, setExpandedMenu] = useState<string | null>('hanhchinh'); // Mở sẵn Hành chính

  const menuItems: MenuItem[] = [
    { id: 'nhansu', label: 'Nhân sự & Tổ chức', icon: '👥' },
    { 
      id: 'hanhchinh', 
      label: 'Hành chính Văn phòng', 
      icon: '🏢',
      subItems: [
        { id: 'ketoan', label: 'Kế toán - Tài vụ', icon: '💰' },
        { id: 'hocvu', label: 'Học vụ - Văn thư', icon: '📁' },
        { id: 'cntt', label: 'Công nghệ thông tin', icon: '💻' },
        { id: 'yte', label: 'Y tế học đường', icon: '🏥' },
        { id: 'thietbi', label: 'Thiết bị dạy học', icon: '🧪' },
        { id: 'thuvien', label: 'Thư viện', icon: '📖' },
        { id: 'tuvan', label: 'Tư vấn học đường', icon: '🤝' },
        { id: 'doandoi', label: 'Đoàn - Đội', icon: '🏁' },
        { id: 'baove', label: 'Bảo vệ - Phục vụ', icon: '🛡️' },
        { id: 'giamthi', label: 'Giám thị', icon: '⚖️' },
      ]
    },
    { id: 'chibo', label: 'Chi bộ', icon: '🚩' },
    { id: 'congdoan', label: 'Công đoàn', icon: '🤝' },
    { id: 'taichinh', label: 'Quản lý tài chính', icon: '💵' },
    { id: 'chuyenmon', label: 'Quản lý chuyên môn', icon: '🎓' },
    { id: 'csvc', label: 'Quản lý cơ sở vật chất', icon: '🏗️' },
    { id: 'baocao', label: 'Báo cáo tổng hợp', icon: '📊' },
    { id: 'tkb-ai', label: 'Soạn TKB AI', icon: '🤖' },
  ];

  // Tìm label hiện tại để hiển thị
  const getCurrentLabel = () => {
    for (const item of menuItems) {
      if (item.id === activeTab) return item.label;
      const sub = item.subItems?.find(s => s.id === activeTab);
      if (sub) return sub.label;
    }
    return 'Không gian làm việc';
  };

  return (
    <div className="flex h-full bg-slate-50 overflow-hidden animate-in fade-in duration-500">
      
      {/* SIDEBAR PHỤ (Cạnh sidebar chính) */}
      <div className="w-72 bg-white border-r border-slate-200 flex flex-col shadow-sm">
        <div className="p-6 border-b">
          <h2 className="text-xl font-black text-blue-900 uppercase italic tracking-tighter">Quản trị trường</h2>
          <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Hệ thống điều hành số</p>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
          {menuItems.map((item) => (
            <div key={item.id} className="space-y-1">
              <button
                onClick={() => {
                  if (item.subItems) {
                    setExpandedMenu(expandedMenu === item.id ? null : item.id);
                  } else {
                    setActiveTab(item.id);
                  }
                }}
                className={`w-full flex items-center justify-between p-3 rounded-2xl transition-all ${
                  activeTab === item.id ? 'bg-blue-600 text-white shadow-lg' : 'hover:bg-slate-100 text-slate-600'
                }`}
              >
                <div className="flex items-center gap-3 font-bold text-sm">
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
                {item.subItems && (
                  <span className={`text-[10px] transition-transform ${expandedMenu === item.id ? 'rotate-180' : ''}`}>▼</span>
                )}
              </button>

              {/* Hiển thị Sub-menu nếu có */}
              {item.subItems && expandedMenu === item.id && (
                <div className="ml-4 pl-4 border-l-2 border-slate-100 space-y-1 mt-1">
                  {item.subItems.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => setActiveTab(sub.id)}
                      className={`w-full text-left p-2.5 rounded-xl text-xs font-bold transition-all ${
                        activeTab === sub.id ? 'bg-blue-50 text-blue-600' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      • {sub.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* KHÔNG GIAN LÀM VIỆC CHÍNH */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header Taskbar */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
          <div>
            <h1 className="text-2xl font-black text-slate-800 uppercase italic">{getCurrentLabel()}</h1>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-black text-[11px] uppercase shadow-lg shadow-blue-200 hover:scale-105 transition-transform active:scale-95">
              ➕ Thêm mới
            </button>
            <button className="bg-slate-100 text-slate-600 px-5 py-2.5 rounded-xl font-black text-[11px] uppercase hover:bg-slate-200 transition-colors">
              📥 Xuất Excel
            </button>
            <button className="bg-slate-800 text-white px-5 py-2.5 rounded-xl font-black text-[11px] uppercase hover:bg-slate-700 transition-colors">
              🔍 Tìm kiếm
            </button>
          </div>
        </header>

        {/* Nội dung Workspace động */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="bg-white rounded-[40px] shadow-2xl shadow-slate-200 border border-slate-100 min-h-full p-10 relative overflow-hidden">
            {/* Background trang trí */}
            <div className="absolute top-[-10%] right-[-5%] text-[200px] opacity-[0.02] font-black italic select-none">
              {activeTab.toUpperCase()}
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-blue-50 rounded-3xl flex items-center justify-center text-3xl">
                  {getCurrentLabel().substring(0, 1)}
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-700">Trình quản lý dữ liệu số</h3>
                  <p className="text-slate-400 font-medium">Cập nhật lần cuối: Hôm nay, 10:45 AM</p>
                </div>
              </div>

              {/* Bảng dữ liệu mẫu (Kích hoạt cho tất cả các nút) */}
              <div className="border border-slate-100 rounded-3xl overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 border-b border-slate-100">
                    <tr>
                      <th className="p-5 font-black text-[10px] uppercase text-slate-400">Nội dung công việc</th>
                      <th className="p-5 font-black text-[10px] uppercase text-slate-400">Người phụ trách</th>
                      <th className="p-5 font-black text-[10px] uppercase text-slate-400">Thời hạn</th>
                      <th className="p-5 font-black text-[10px] uppercase text-slate-400">Trạng thái</th>
                      <th className="p-5 font-black text-[10px] uppercase text-slate-400">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm font-bold text-slate-600">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <tr key={i} className="border-b border-slate-50 hover:bg-blue-50/50 transition-colors">
                        <td className="p-5 italic text-blue-900">Kế hoạch triển khai nhiệm vụ tháng {i+1}</td>
                        <td className="p-5">Phòng {getCurrentLabel()}</td>
                        <td className="p-5 text-slate-400">20/02/2026</td>
                        <td className="p-5">
                          <span className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-[10px] uppercase">Hoàn thành</span>
                        </td>
                        <td className="p-5">
                          <div className="flex gap-2">
                            <button className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">✎</button>
                            <button className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-red-500 hover:text-white transition-all">🗑</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}