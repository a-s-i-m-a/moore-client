import React, {useContext, useEffect, useState} from 'react';
import { observer } from 'mobx-react-lite';
import { appStoreContext } from '../store/context.store';
import {Apartment} from "../store/apartments.store";
import Modal from "../components/Modal";
import Sidebar from "../components/Sidebar";
import FilterBar from "../components/Filterbar";
import '../styles/ApartmentsPage.css'


const ApartmentsPage: React.FC = observer(() => {
    const { apartmentsStore } = useContext(appStoreContext)
    const [showModal, setShowModal] = useState(false);

    const handleAddClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    useEffect(()=>{
      apartmentsStore.fetchApartments()
    },[])
    return (<>
        <Sidebar />
            <div className="apartments-list">
                <h2 className="title">Квартиры</h2>
                <hr/>
               <div className="d-flex justify-content-between my-3 align-items-center">
                   <FilterBar />
                   <button onClick={handleAddClick}  className="add-apartment">
                       Добавить
                   </button>
               </div>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>№ квартиры</th>
                        <th>Объект</th>
                        <th>Этаж</th>
                        <th>КВ</th>
                        <th>Дата</th>
                        <th>Статус</th>
                        <th>Цена</th>
                        <th>Клиент</th>
                        <th>Статус</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {apartmentsStore.apartments.map((apartment: Apartment) => (
                        <tr key={apartment.id} style={{ marginBottom: '10px'}}>
                            <td>{apartment.number}</td>
                            <td>{apartment.object}</td>
                            <td>{apartment.floor}</td>
                            <td>{new Date(apartment.createdDate).toLocaleDateString()}</td>
                            <td>{apartment.status}</td>
                            <td>{apartment.price}</td>
                            <td>{apartment.name}</td>
                            <td>{apartment.statusDescription}</td>
                            <td>
                                <button  className="btn btn-danger">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <Modal show={showModal} onClose={handleCloseModal} title="Добавление квартиры">
                    {/* Add your input fields for adding a new apartment here */}
                    <p>Input fields go here...</p>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">
                            Сохранить
                        </button>
                        <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                            Отмена
                        </button>
                    </div>
                </Modal>
            </div>
    </>

    );
});

export default ApartmentsPage;
