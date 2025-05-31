// =====================================================
// 📦 Imports
// =====================================================
import MenuDropdown from "./MenuDropdown";
import { createPortal } from "react-dom";

// =====================================================
// 🌀 MenuPortal Component
// =====================================================
const MenuPortal = ({ showDropdown, handleNavigate, dropdownRef, handleClickSound }) => {
  // 🎨 Render dropdown in a portal
  return createPortal(
    <MenuDropdown showDropdown={showDropdown} handleNavigate={handleNavigate} dropdownRef={dropdownRef} handleClickSound={handleClickSound} />,
    document.body
  );
};

export default MenuPortal;
