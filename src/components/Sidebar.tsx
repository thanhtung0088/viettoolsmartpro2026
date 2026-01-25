import { NavLink } from "react-router-dom";
import { Home, BookOpen, Video } from "lucide-react";

const menus = [
  { to: "/", label: "Tổng quan", icon: Home },
  { to: "/soan-bai-ai", label: "Soạn bài AI", icon: BookOpen },
  { to: "/video-day", label: "Video dạy", icon: Video },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#4b0f0f] p-4">
      <h1 className="font-bold text-lg mb-6">VIETEDU SMART</h1>
      <nav className="space-y-2">
        {menus.map(m => (
          <NavLink
            key={m.to}
            to={m.to}
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded ${
                isActive ? "bg-red-600" : "hover:bg-red-800"
              }`
            }
          >
            <m.icon size={18} /> {m.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
