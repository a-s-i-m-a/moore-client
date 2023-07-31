
import React, {useContext, useEffect} from 'react';
import { observer } from 'mobx-react-lite';
import {Manager} from "../store/managers.store";
import {appStoreContext} from "../store/context.store";
import Sidebar from "../components/Sidebar";



const ManagersPage: React.FC = observer(() => {
    const {managersStore} = useContext(appStoreContext)
    useEffect(()=> {
        managersStore.fetchManagers()
    },[])
    return (
        <>
            <Sidebar/>
            <div className="managers-list">
                <h2 className="mx-5 title">Менеджеры</h2>
                <hr/>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>ФИО</th>
                        <th>Телефон</th>
                        <th>Почта</th>
                        <th>Дата создания</th>
                        <th>Кол-во сделок</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {managersStore.managers.map((manager: Manager) => (
                        <tr key={manager.id}>
                            <td>{manager.username}</td>
                            <td>{manager.phoneNumber}</td>
                            <td>{manager.email}</td>
                            <td>{new Date(manager.createdDate).toLocaleDateString()}</td>
                            <td>{manager.transactions}</td>
                            <td>
                                <button className="btn btn-danger">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );
});

export default ManagersPage;
