import ShopByDeptMenu from "./ShopByDeptMenu";

function MainNavigation() {
  return (
    <nav>
      <ul>
        <ShopByDeptMenu />
        <li>
          <a href="#">Mother's Day</a>
        </li>
        {/* ... other navigation items */}
      </ul>
    </nav>
  );
}

export default MainNavigation;
