// App.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Sidebar from "./components/Sidebar";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <Routes>
                            {/*<Route path="/reports" element={ReportsPage} />*/}
                            <Route path="/apartments" element={'kjjkku'} />
                            {/*<Route path="/managers" element={ManagersPage} />*/}
                            {/*<Route path="/bookings" element={BookingsPage} />*/}
                            {/*<Route path="/" element={HomePage} />*/}
                        </Routes>
                    </main>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
