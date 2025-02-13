// React Router
import { React, useState, useEffect, useRef, createContext } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import CSS files
import './App.css';

// Import files
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Layout from './components/layout/Layout';

// React Learnings
import Core from './components/learning/core/Core';
import Hooks from './components/learning/hooks/Hooks';
import LogicalPrograms from './components/learning/logicalPrograms/LogicalPrograms';
import Counter from './components/learning/redux/Counter';
import CounterApp from './components/applications/CounterApp';
import TodoApp from './components/applications/TodoApp';
import WeatherApp from './components/applications/WeatherApp';
import MemoryGameApp from './components/applications/MemoryGameApp';

export const UserContext = createContext();

function App() {
  

  const [createPageTitle, setCreatePageTitle] = useState({
    setPageTitle: false,
    pageTitle: ''
  })

  const navigate = useNavigate();

  useEffect(() => {
    loginRedirection();
  }, [])

  const loginRedirection =  () => {
    let userAuth = sessionStorage.getItem('authentication')
    // setAppLogin(userAuth)
    // if (userAuth) {
    //   console.log('2222');
    //   // navigate('/dashboard');
    // }
  }

  const setTitle = (data, title) => {
    setCreatePageTitle({
      setPageTitle: data,
      pageTitle: title
    })
  }


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />

      </Routes>
        { sessionStorage.getItem('authentication') && 
          <Routes>
            <Route path='/' element={
                <UserContext.Provider value={createPageTitle}>
                  <Layout setTitle={setTitle} isSetTitle={true} />
                </UserContext.Provider>
              }
            >
              <Route path="/dashboard" element={<Dashboard />} />
              {/* React Learning */}
              <Route path="/core" element={<Core />} />
              <Route path="/hooks" element={<Hooks />} />
              <Route path="/logicalPrograms" element={<LogicalPrograms />} />
              <Route path="/reduxCounter" element={<Counter />} />
              <Route path="/applications/counterApp" element={<CounterApp />} />
              <Route path="/applications/todoApp" element={<TodoApp />} />
              <Route path="/applications/weatherApp" element={<WeatherApp />} />
              <Route path="/applications/memoryGameApp" element={<MemoryGameApp />} />

              

            </Route>
          </Routes>
        }
    </div>
  );
}

export default App;