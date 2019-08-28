import React from 'react';

//Components
import MenuItems from '../MenuItems';
import NavLogo from '../NavLogo';

function SideNav(props) {
  return (
    <nav id="admin-side-nav">
      <div className="admin-side-nav-header">
        <NavLogo></NavLogo>
        <i className="mdi mdi-menu-open" onClick={props.onclick} />
      </div>
      <div className="admin-side-nav-menu">
        <MenuItems></MenuItems>
      </div>
    </nav>
  );
}

export default SideNav;
