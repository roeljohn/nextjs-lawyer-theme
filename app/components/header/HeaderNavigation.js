const HeaderNavigation = ({ menu_items }) => {
    return (
        <ul class="navbar-nav w-100 justify-content-center">     
            {menu_items && menu_items.map((menu, index) => (
                <li class="nav-item">
                    <a class="nav-link" href={menu.url}>{menu.title.rendered}</a>
                </li>
            ))}
        </ul>
    );
};
  
export default HeaderNavigation;
