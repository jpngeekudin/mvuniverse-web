import React from 'react'
import LogoMarketplace from 'assets/images/logo-marketplace.svg';
import { Dropdown } from 'react-bootstrap';

import LogoSun from 'assets/images/navbar/navbar-sun.svg';
import LogoAvatar from 'assets/images/navbar/navbar-avatar.svg';
import { menuConfig, profileMenuConfig } from 'configs/MenuConfig';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const menuList = menuConfig;
  const profileMenuChildren = profileMenuConfig;

  return (
    <div className='navbar'>
      <Link to={'/'} className='d-flex align-items-center' style={{ gap: 10 }}>
        <img src={LogoMarketplace} alt="" className='brand' />
        <div className='brand'>MVUniverse</div>
      </Link>
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
