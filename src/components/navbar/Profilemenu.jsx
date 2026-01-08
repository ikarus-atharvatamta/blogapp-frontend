import { useEffect, useState } from "react";

export default function ProfileDropdown({ user, onLogout }) {
  const [open, setOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (open && !e.target.closest(".dropdown")) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative">
      <img
        src={user.avatar}
        alt="profile"
        onClick={() => setOpen(!open)}
        className="w-10 h-10 rounded-full border-2 border-[#CF462A] cursor-pointer"
      />

      {open && (
        <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-xl p-4 z-50">
          {/* <p className="font-semibold text-sm">{user.name}</p>
          <p className="text-xs text-gray-500 mb-3">{user.email}</p> */}
          <button className="mx-2 w-full text-left text-sm py-2  rounded hover:cursor-pointer">
            Edit
          </button>
          <hr className="w-full h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
          <button className="w-full text-left text-sm py-2 px-2 rounded hover:cursor-pointer hover:bg-gray-100">
            Name
          </button>
          <button className="w-full text-left text-sm py-2 px-2 rounded hover:cursor-pointer hover:bg-gray-100">
            Email
          </button>
          <button
            onClick={onLogout}
            className="w-full text-left text-sm py-2 px-2 hover:bg-red-50 rounded cursor-pointer text-red-600"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
