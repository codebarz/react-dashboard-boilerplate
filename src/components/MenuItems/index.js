import React from 'react';

function MenuItems() {
  return (
    <ul className="admin-nav-menu-item">
      <h5>PAGES</h5>
      <li>
        <i className="mdi mdi-view-dashboard" />
        <span>Dashboard</span>
      </li>
      <li>
        <i className="mdi mdi-account-group" />
        <span>Manage Users</span>
      </li>
      <li>
        <i className="mdi mdi-chart-timeline-variant" />
        <span>Analytics</span>
      </li>
      <h5>Account Settings</h5>
      <li>
        <i className="mdi mdi-wrench" />
        <span>Settings</span>
      </li>
    </ul>
  );
}

export default MenuItems;
