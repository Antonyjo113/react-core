// PanelMenu.js
import React, { useEffect, useState } from 'react';
import { PanelMenu } from 'primereact/panelmenu';
import { useNavigate, useLocation } from 'react-router-dom';
import logoimage from '../../assets/images/logo.png';

// REACT COMPONENT
const Sidebar = ({ onMenuSelect }) => {

    // VARIABLE INITIATIONS
    const items = [     
        {
            label: 'Dashboard',
            title: 'dashboard',
            menuTitle: 'Dashboard',
            command: (event) => {
                onMenuItemClick(event)
            }
        },
        // {
        //     label: 'Learning',
        //     title: 'learning',
        //     menuTitle: 'Learning',
        //     command: (event) => {
        //         onMenuItemClick(event)
        //     }
        // },
        // {
        //     label: 'Make Booking',
        //     title: 'makeBooking',
        //     menuTitle: 'Make Booking',
        //     command: (event) => {
        //         onMenuItemClick(event)
        //     }
        // },
        {
            label: 'Learnings',
            title: 'Learnings',
            menuTitle: 'Learnings',
            items: [
                {
                    label: 'Core',
                    title: 'core',
                    menuTitle: 'Core',
                    command: (event) => {
                        onMenuItemClick(event)
                    }
                },
                {
                    label: 'Hooks',
                    title: 'hooks',
                    menuTitle: 'Hooks',
                    command: (event) => {
                        onMenuItemClick(event)
                    }
                },
                {
                    label: 'Logical Programs',
                    title: 'logicalPrograms',
                    menuTitle: 'Logical Programs',
                    command: (event) => {
                        onMenuItemClick(event)
                    }
                }
            ]
        },
        {
            label: 'Settings',
            title: 'Settings',
            menuTitle: 'Settings',
            items: [
                {
                    label: 'User',
                    title: 'user',
                    menuTitle: 'User',
                    command: (event) => {
                        onMenuItemClick(event)
                    }
                },
            ]
        }
    ]

    let navigate = useNavigate();

    // FUNCTIONS
    const onMenuItemClick = (event) => {
        onMenuSelect(event.item.title, event.item.menuTitle);        
    };

    const logout = (event) => {
        setTimeout(() => {
            navigate('/');
        }, 2000);
        sessionStorage.clear();

    };

    // RETURN COMPONENT
    return (
        <div className='sidebar'>
            <div className='sidebar-header'>
                    <img src={logoimage} className='siderbar-logo' alt='Logo' />
            </div>
            <div className='sidebar-content'>
                <div className="sidebar-nav">
                    <PanelMenu model={items} style={{ width: '20rem' }} />
                </div>
                <div className='logout content-center'>
                    <i class="bi bi-box-arrow-right tx-violet" onClick={logout}>L</i>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;