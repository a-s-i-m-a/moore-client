// App.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import ApartmentsPage from "./pages/Apartments";
import ManagersPage from "./pages/Managers";
import LoginPage from "./pages/Login";


const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className="container-fluid">
                <div className="row">
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <Routes>
                            <Route path="/" element={<LoginPage />} />
                            <Route path="/apartments" element={<ApartmentsPage />} />
                            <Route path="/managers" element={<ManagersPage/>} />
                        </Routes>
                    </main>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
