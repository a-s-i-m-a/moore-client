
import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Sidebar.css"

const Sidebar: React.FC = () => {
    return (
        <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar fixed-top">
            <div className="position-sticky">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            Главная
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/reports">
                            Отчеты
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/apartments">
                            Квартиры
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/managers">
                            Менеджеры
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/bookings">
                            Бронирования
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Sidebar;
