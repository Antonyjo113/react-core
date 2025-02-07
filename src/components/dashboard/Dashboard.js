// REACT IMPORTS
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import DataTableElement from '../../uiComponents/DataTableElement';
// import PieChart from '../../uiComponents/PieChart';
// import { MultiSelect } from 'primereact/multiselect';

// REACT COMPONENT
const Dashboard = (props) => {

    const [role, setRole] = useState('');

    // REACT INITIATIONS
    let navigate = useNavigate();

    useEffect(() => {
        const roleData = sessionStorage.getItem('role');
        if (roleData) {
          setRole(roleData);
        }
    }, []);

    const learningNavigation = (route) => {
        navigate(route);
    }

  
    // RETURN COMPONENT
    return (
        <div className='main-content-wrapper mt-3'>
            <div className='contents'>
                <h2 className='tx-violet m-zero'>React JS</h2>
                <p className='tx-lightblack'> This is the ideal application to learn React and experience its functionalities, reusable components, and problem-solving logic. </p>
            </div>
            <div className='contents dashboard-cards mt-4'>
                <div class="row">
                    <div class="col-4">
                        <div class="card me-3">
                            <div class="card-header tx-white fw-semibold">
                                React Basic
                            </div>
                            <div class="card-body">
                                <blockquote class="blockquote mb-0" onClick={() => learningNavigation("react-basic")}>
                                <p>React is a popular JavaScript library for building user interfaces, especially single-page applications (SPAs)</p>
                                <footer class="blockquote-footer"> Click here to <cite title="Source Title">Continue Learning</cite></footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card me-3">
                            <div class="card-header tx-white fw-semibold">
                                Hooks
                            </div>
                            <div class="card-body">
                                <blockquote class="blockquote mb-0" onClick={() => learningNavigation("react-hooks")}>
                                <p>Hooks enable you to use these features in functional components, making it possible to write more concise and readable code.</p>
                                <footer class="blockquote-footer"> Click here to <cite title="Source Title">Continue Learning</cite></footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card">
                            <div class="card-header tx-white fw-semibold">
                                Logic Problems
                            </div>
                            <div class="card-body">
                                <blockquote class="blockquote mb-0" onClick={() => learningNavigation("react-logic")}>
                                <p>A logical problem refers to constructing a problem and ideology where the application involves the implementation of logic.</p>
                                <footer class="blockquote-footer"> Click here to <cite title="Source Title">Continue Learning</cite></footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Dashboard;