// REACT IMPORTS
import React, { useEffect, useState, useRef } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
import DataTableElement from '../../uiComponents/DataTableElement';
// import PieChart from '../../uiComponents/PieChart';
// import { MultiSelect } from 'primereact/multiselect';

// REACT COMPONENT
const Dashboard = (props) => {

    const [role, setRole] = useState('');

    useEffect(() => {
        const roleData = sessionStorage.getItem('role');
        if (roleData) {
          setRole(roleData);
        }
    }, []);

  
    // RETURN COMPONENT
    return (
        <div className='main-content-wrapper'>
            <div className='content-start'>
                
            </div>
        </div>
    );
}
export default Dashboard;