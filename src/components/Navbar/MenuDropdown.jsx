// =====================================================
// 📦 MenuDropdown Component
// =====================================================
const MenuDropdown = ({ showDropdown, handleNavigate, dropdownRef, handleClickSound }) => {
  // 🔊 Play click sound and navigate
  const handleClick = (path) => {
    handleClickSound();
    handleNavigate(path);
  };

  // 🗺️ Menu entries
  const menuItems = [
    { path: "/", icon: "/icons/rune.png", label: "Home" },
    { path: "/about", icon: "/icons/q-mark.png", label: "About" },
    { path: "/projects", icon: "/icons/pouch.png", label: "Projects" },
    { path: "/contact", icon: "/icons/letter.png", label: "Contact" },
  ];

  // =====================================================
  // 🎨 Render
  // =====================================================
  return (
    <div ref={dropdownRef} className={`menu-with-bg ${showDropdown ? "open" : ""}`}>
      <div className="menu-slot-wrapper">
        {menuItems.map(({ path, icon, label }) => (
          <button key={path} type="button" className={`menu-slot ${label.toLowerCase()}-slot`} onClick={() => handleClick(path)}>
            <img src={icon} className="menu-icon" alt={label} />
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MenuDropdown;
