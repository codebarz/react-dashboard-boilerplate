import React, { useState } from 'react';

//Components
import SideNav from '../../components/SideNav';
import NavHeader from '../../components/NavHeader';
import PageHead from '../../components/PageHead';
import AnalyticsSummary from '../../components/AnalyticsSummary';

function Dashboard() {
  const [showToggle, setShowToggle] = useState(false);
  const handleNavToggle = e => {
    e.preventDefault();
    setShowToggle(!showToggle);
    const sideNav = document.querySelector('#admin-side-nav');
    const sideNavIcon = document.querySelector('#admin-side-nav i');
    const mainContent = document.querySelector('#admin-main-page');
    const mobileNav = document.querySelector('.admin-side-nav-menu');
    const navLogo = document.querySelector('.admin-nav-logo');
    const menuItem = document.querySelectorAll('.admin-nav-menu-item li span');
    if (!showToggle) {
      sideNav.classList.add('admin-shrink-nav');
      mainContent.classList.add('admin-shrink-main');
      sideNavIcon.classList.remove('mdi-menu-open');
      sideNavIcon.classList.add('mdi-forwardburger');
      mobileNav.classList.add('admin-show-menu');
      navLogo.classList.add('hide');
      menuItem.forEach(item => item.classList.add('hide'));
      return;
    }
    sideNav.classList.remove('admin-shrink-nav');
    mainContent.classList.remove('admin-shrink-main');
    sideNavIcon.classList.add('mdi-menu-open');
    sideNavIcon.classList.remove('mdi-forwardburger');
    mobileNav.classList.remove('admin-show-menu');
    setTimeout(() => {
      navLogo.classList.remove('hide');
      menuItem.forEach(item => item.classList.remove('hide'));
    }, 100);
  };

  return (
    <div id="admin-dash-content">
      <SideNav onclick={handleNavToggle}></SideNav>
      <main id="admin-main-page">
        <NavHeader />
        <PageHead title="Dashboard"></PageHead>
        <div className="admin-main-content">
          <AnalyticsSummary></AnalyticsSummary>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
