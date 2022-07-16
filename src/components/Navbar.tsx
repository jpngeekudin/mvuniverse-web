import React from 'react'
import LogoMarketplace from 'assets/images/logo-marketplace.svg';
import { Dropdown } from 'react-bootstrap';

import LogoSun from 'assets/images/navbar/navbar-sun.svg';
import LogoExploreAllCategories from 'assets/images/navbar/navbar-explore-all-categories.svg';
import LogoExploreNew from 'assets/images/navbar/navbar-explore-new.svg';
import LogoExploreArt from 'assets/images/navbar/navbar-explore-art.svg';
import LogoExploreCollectibles from 'assets/images/navbar/navbar-explore-collectibles.svg';
import LogoExploreFashion from 'assets/images/navbar/navbar-explore-fashion.svg';
import LogoExploreHotCollections from 'assets/images/navbar/navbar-explore-hot-collections.svg';
import LogoExploreMusic from 'assets/images/navbar/navbar-explore-music.svg';
import LogoExplorePhotography from 'assets/images/navbar/navbar-explore-photography.svg';
import LogoExploreUtility from 'assets/images/navbar/navbar-explore-utility.svg';
import LogoExploreDomainName from 'assets/images/navbar/navbar-explore-domain-name.svg';
import LogoAvatar from 'assets/images/navbar/navbar-avatar.svg';
import LogoProfileFavorites from 'assets/images/navbar/navbar-profile-favorites.svg';
import LogoProfileWatchlist from 'assets/images/navbar/navbar-profile-watchlist.svg';
import LogoProfileMyCollections from 'assets/images/navbar/navbar-profile-my-collections.svg';
import LogoProfileSettings from 'assets/images/navbar/navbar-profile-settings.svg';
import LogoProfileLogout from 'assets/images/navbar/navbar-profile-logout.svg';

export default function Navbar() {
  const menuList = [
    {
      name: 'Explore',
      path: 'explore',
      childCols: 2,
      children: [
        { name: 'All Categories', icon: LogoExploreAllCategories },
        { name: 'Hot Collections', icon: LogoExploreHotCollections },
        { name: 'New', icon: LogoExploreNew },
        { name: 'Music', icon: LogoExploreMusic },
        { name: 'Art', icon: LogoExploreArt },
        { name: 'Photography', icon: LogoExplorePhotography },
        { name: 'Collectibles', icon: LogoExploreCollectibles },
        { name: 'Utility', icon: LogoExploreUtility },
        { name: 'Fashion', icon: LogoExploreFashion },
        { name: 'Domain Names', icon: LogoExploreDomainName },
      ]
    },
    {
      name: 'Stats',
      path: 'stats',
      childCols: 1,
      children: [
        { name: 'Rankings', icon: null },
        { name: 'Live Activity', icon: null }
      ]
    },
    {
      name: 'Create',
      path: 'create',
      childCols: 1,
      children: [],
    }
  ];

  const profileMenuChildren = [
    { name: 'Profile', icon: LogoAvatar },
    { name: 'Favorites', icon: LogoProfileFavorites },
    { name: 'Watchlist', icon: LogoProfileWatchlist },
    { name: 'My Collections', icon: LogoProfileMyCollections },
    { name: 'Settings', icon: LogoProfileSettings },
    { name: 'Logout', icon: LogoProfileLogout },
  ];

  return (
    <div className='navbar'>
      <img src={LogoMarketplace} alt="" className='brand' />
      <div className='brand'>MVUniverse</div>
      <div className='search' style={{ flexGrow: 1 }}>
        <div className="prefix">
          <i className="fa fa-search"></i>
        </div>
        <input type="text" className="form-control" style={{ width: 400 }} placeholder='Search for art or artist' />
      </div>
      <div className='d-flex align-items-center text-primary' style={{ gap: 20 }}>
        <div>
          <img src={LogoSun} alt="" style={{ height: 24 }} />
        </div>

        {/* menu list */}
        {menuList.map(menu => {
          if (menu.children.length) return (
            <Dropdown>
              <Dropdown.Toggle as={dropdownMenuItem}>{menu.name}</Dropdown.Toggle>
              <Dropdown.Menu className='item-dropdown-menu' style={{ width: `${menu.childCols * 190}px` }}>
                <div className='items'>
                  {menu.children.map(child => {
                    return (
                      <div className='item' style={{ width: `${100 / menu.childCols}%` }}>
                        {child.icon && (
                          <img src={child.icon} alt="" className='me-2' style={{ height: 15 }} />
                        )}
                        <span className='text-primary fw-bold'>{child.name}</span>
                      </div>
                    );
                  })}
                </div>
              </Dropdown.Menu>
            </Dropdown>  
          );

          else return <div className='item'>{menu.name}</div>
        })}

        {/* avatar */}
        <Dropdown>
          <Dropdown.Toggle as={dropdownMenuItem}>
            <img src={LogoAvatar} alt="" style={{ height: 48, cursor: 'pointer' }} />
          </Dropdown.Toggle>
          <Dropdown.Menu className='item-dropdown-menu' style={{ width: 190 }}>
            {profileMenuChildren.map(child => (
              <div className="items">
                <div className="item w-100">
                  <img src={child.icon} alt="" className='me-2' style={{ height: 15 }} />
                  <span className="text-primary fw-bold">{child.name}</span>
                </div>
              </div>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  )
}

interface DropdownMenuItemProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  labeledBy?: string;
  onClick: Function
}

const dropdownMenuItem = React.forwardRef(({ children, onClick }: DropdownMenuItemProps, ref: React.Ref<HTMLAnchorElement>) => (
  <a href="#/" 
    ref={ref}
    className='item item-dropdown'
    style={{ textDecoration: 'none' }}
    onClick={e => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </a>
));
