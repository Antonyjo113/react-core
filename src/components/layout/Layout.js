// REACT IMPORTS
import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

// FILES IMPORTS
import Header from './Header';
import Sidebar from './Sidebar';

// REACT COMPONENT
const Layout = () => {

    // HOOKS
    const[showSidebar, setShowSidebar] = useState(true);
    const[menuLabel, setMenuLabel] = useState('');
    const[menuTitle, setMenuTitle] = useState('');

    // REACT INITIATIONS
    let navigate = useNavigate();
    let location = useLocation();
    
    useEffect(() => {
        if(location.pathname === '/dashboard'){
            setMenuLabel('Dashboard');
            setMenuTitle('Dashboard');
        } 
        else if (location.pathname === '/booking'){
            setMenuLabel('Booking');
            setMenuTitle('Booking');
        } 
        else if (location.pathname === '/booking-list'){
            setMenuLabel('Booking List');
            setMenuTitle('Booking List');
        }
        else if (location.pathname === '/make-booking'){
            setMenuLabel('Make Booking');
            setMenuTitle('Make Booking');
        }
        else if (location.pathname === '/create-booking'){
            setMenuLabel('Create Booking');
            setMenuTitle('Create Booking');
        }
        else if (location.pathname === '/businessunit'){
            setMenuLabel('Business Unit');
            setMenuTitle('Business Unit');
        }
        else if (location.pathname === '/user'){
            setMenuLabel('User');
            setMenuTitle('User');
        }
        else if (location.pathname === '/businessUnitConfig'){
            setMenuLabel('Business Unit');
            setMenuTitle('Business Unit');
        }
        else if (location.pathname === '/userRoleConfig'){
            setMenuLabel('User Role');
            setMenuTitle('User Role');
        }

    }, [location.pathname])

    // ==========  BREADCRUMB FUNCTION ==========
    // const hamburgerClick = (menuOpen) =>{
    //     if(menuOpen) {
    //         setMenuClick(true);
    //     } else {
    //         setMenuClick(false);
    //     }
    // }

    // FUNCTIONS
    const menuSelect = (title, menuTitle) => {
        setMenuLabel(title);
        setMenuTitle(menuTitle);

        if(title === 'dashboard'){
            navigate('/dashboard');
        } 
        else if (title === 'booking'){
            navigate('/booking')
        } 
        else if (title === 'makeBooking'){
            navigate('/make-booking')
        }
        else if (title === 'businessUnit'){
            navigate('/businessunit')
        }
        else if (title === 'user'){
            navigate('/user')
        }
        else if (title === 'businessUnitConfig'){
            navigate('/businessUnitConfig')
        }
        else if (title === 'userRoleConfig'){
            navigate('/userRoleConfig')
        }
    }

    const menuCloseClick = () => {
        console.log('1111');
        setShowSidebar(!showSidebar);
        // onSelectHambuger(showSidebar);
    }
    
    // RETURN COMPONENT
    return (
        <div className="layout-wrapper">
            <div className={`sidebar-wrapper ${showSidebar ? 'show' : 'hide'}`}> 
                <div className="close-sidebar-icon" onClick={menuCloseClick}>
                    <i className='pi pi-items close-icon'>X</i>
                </div>
                <Sidebar
                    // onSelectHambuger = {() => hamburgerClick()}
                    onMenuSelect = {(title, menuTitle) => menuSelect(title, menuTitle)}
                />
            </div>

            <div className='main-wrapper'>
                <div className='main-wrapper-content'>

                    <Header
                        // onSelectHambuger = {hamburgerClick}
                        menuLabel = {menuLabel}
                        menuTitle = {menuTitle}
                    />
                    <div className='main-content'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;