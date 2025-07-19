import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { FaBars, FaUserCircle } from 'react-icons/fa';
import * as sessionActions from '../../redux/session';
import OpenModalMenuItem from './OpenModalMenuItem';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import { useNavigate } from 'react-router-dom';
import './ProfileButton.css';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();
  const navigate = useNavigate();

  const toggleMenu = (e) => {
    e.stopPropagation(); 
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (ulRef.current && !ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    closeMenu();
    navigate('/');
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

  return (
    <div className='profile-button-wrapper'>
      <button onClick={toggleMenu} className='profile-menu-button'>
        <FaBars className='menu-icon' />
        <FaUserCircle className="user-icon" />
      </button>
      <ul className={ulClassName} ref={ulRef}>
        {user ? (
          <>
            <li className='dropdown-user-info'>
              <div>Hello, {user.firstName}</div>
              <div>{user.email}</div>
            </li>
            <hr />
            {/* Manage Pins */}
            <li className='dropdown-manage'>
              <button onClick={() => {
                navigate('/pins/manage');
                closeMenu();
              }}>
                Manage Pins
              </button>
            </li>
            {/* Manage Boards */}
            <li className='dropdown-manage'>
              <button onClick={() => {
                navigate('/boards/manage');
                closeMenu();
              }}>
                Manage Boards
              </button>
            </li>
            {/* Manage Favorites */}
            <li className='dropdown-manage'>
              <button onClick={() => {
                navigate('/favorites/manage');
                closeMenu();
              }}>
                Manage Favorites
              </button>
            </li>
            <hr />
            <li className='dropdown-logout'>
              <button onClick={logout}>Log Out</button>
            </li>
          </>
        ) : (
          <>
            <li className='dropdown-login-signup'>
              <OpenModalMenuItem
                itemText="Log In"
                onItemClick={closeMenu}
                modalComponent={<LoginFormModal navigate={navigate} />}
              />
            </li>
            <li className='dropdown-login-signup'>
              <OpenModalMenuItem
                itemText="Sign Up"
                onItemClick={closeMenu}
                modalComponent={<SignupFormModal />}
              />
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default ProfileButton;
