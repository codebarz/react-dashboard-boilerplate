import React from 'react';

//Components
import MenuItems from '../MenuItems';
import NavLogo from '../NavLogo';

function SideNav(props) {
  return (
    <nav id="admin-side-nav">
      <div className="admin-side-nav-header">
        <NavLogo></NavLogo>
        <i onClick={props.onclick}>
          <img src="/assets/images/menu.svg" alt="Toggle Menu" />
        </i>
      </div>
      <div className="admin-side-nav-menu">
        <MenuItems></MenuItems>
      </div>
    </nav>
  );
}

export default SideNav;
