import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import "../styles/Sidebar.css"

const Sidebar: React.FC = () => {
    const location = useLocation();
    return (
        <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar fixed-top">
            <div className="position-sticky">
               <div className="d-flex align-items-center justify-content-end mb-4 p-4">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-search" viewBox="0 0 16 16">
                       <path
                           d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                   </svg>
               </div>
                <ul className="nav flex-column">
                    <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                        <Link to="#" className="nav-link">
                            Главная
                        </Link>
                    </li>
                    <li className={`nav-item ${location.pathname === '/reports' ? 'active' : ''}`}>
                        <Link to="#" className="nav-link">
                            Отчеты
                        </Link>
                    </li>
                    <li className={`nav-item ${location.pathname === '/apartments' ? 'active' : ''}`}>
                        <Link to="/apartments" className="nav-link">
                            Квартиры
                        </Link>
                    </li>
                    <li className={`nav-item ${location.pathname === '/managers' ? 'active' : ''}`}>
                        <Link to="/managers" className="nav-link">
                            Менеджеры
                        </Link>
                    </li>
                    <li className={`nav-item ${location.pathname === '/bookings' ? 'active' : ''}`}>
                        <Link to="#" className="nav-link">
                            Бронирования
                        </Link>
                    </li>
                    <hr className=" m-4"/>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">
                            Редак. сайта
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link fixed-bottom notifications" to="#">
                            Уведомления
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Sidebar;
