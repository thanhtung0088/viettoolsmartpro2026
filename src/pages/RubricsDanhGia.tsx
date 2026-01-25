import { useState } from 'react';

export default function RubricsDanhGia() {
  const [criteria, setCriteria] = useState([
    { id: 1, name: 'Kỹ năng làm việc nhóm', level1: 'Chưa đạt', level2: 'Đạt', level3: 'Khá', level4: 'Tốt' },
    { id: 2, name: 'Kỹ năng thuyết trình', level1: 'Tự ti', level2: 'Nói được', level3: 'Lưu loát', level4: 'Lôi cuốn' }
  ]);

  return (
    <div className="p-8 space-y-6">
      <div className="bg-white p-8 rounded-[40px] shadow-xl flex justify-between items-center border border-slate-100">
        <h2 className="text-2xl font-black text-blue-900 uppercase italic">Rubrics Đánh Giá Năng Lực</h2>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-black text-[11px] uppercase">+ Thêm tiêu chí</button>
      </div>

      <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border">
        <table className="w-full text-center">
          <thead className="bg-slate-50 font-black text-[10px] uppercase text-slate-500 border-b">
            <tr>
              <th className="p-6 text-left">Tiêu chí đánh giá</th>
              <th className="p-6">Mức 1</th>
              <th className="p-6">Mức 2</th>
              <th className="p-6">Mức 3</th>
              <th className="p-6 text-blue-600">Mức 4 (Xuất sắc)</th>
            </tr>
          </thead>
          <tbody>
            {criteria.map((c) => (
              <tr key={c.id} className="border-b font-black text-[12px] hover:bg-blue-50">
                <td className="p-6 text-left text-slate-800 uppercase italic border-r bg-slate-50/50">{c.name}</td>
                <td className="p-6 text-slate-400">{c.level1}</td>
                <td className="p-6 text-slate-500">{c.level2}</td>
                <td className="p-6 text-slate-600">{c.level3}</td>
                <td className="p-6 text-blue-700 bg-blue-50/50 font-bold">{c.level4}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}