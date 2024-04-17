import React, { useState } from 'react';
import './ShopByDeptMenu.css'; // Import the CSS file

function ShopByDeptMenu() {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  return (
    <li className="shop-by-dept-menu">
      <a onClick={handleMenuClick}>Shop by Department</a>
      <ul className={`submenu ${isSubmenuOpen ? 'active' : ''}`}>
        <li>
          <a href="#">Food</a>
        </li>
        {/* Include other department links here if desired (remove comment) */}
        {/* <li>
          <a href="#">Beverages</a>
        </li>
        <li>
          <a href="#">Household</a>
        </li> */}
      </ul>
    </li>
  );
}

export default ShopByDeptMenu;
