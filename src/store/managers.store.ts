import { makeAutoObservable } from 'mobx';
import axios from 'axios';

export interface Manager {
    id: number;
    username: string;
    phoneNumber: string;
    email: string;
    createdDate: Date;
    transactions: number;
}

export class ManagersStore {
    managers: Manager[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    async fetchManagers() {
        try {
            const response = await axios.get<Manager[]>('http://localhost:3000/managers');
            this.managers = response.data;
        } catch (error) {
            console.error('Error fetching managers:', error);
        }
    }

    async createManager(manager: Manager) {
        try {
            const response = await axios.post<Manager>('http://localhost:3000/managers', manager);
            this.managers.push(response.data);
        } catch (error) {
            console.error('Error creating manager:', error);
        }
    }

    async updateManager(manager: Manager) {
        try {
            await axios.put(`http://localhost:3000/managers/${manager.id}`, manager);
            const index = this.managers.findIndex((m) => m.id === manager.id);
            if (index !== -1) {
                this.managers[index] = manager;
            }
        } catch (error) {
            console.error('Error updating manager:', error);
        }
    }

    async deleteManager(id: number) {
        try {
            await axios.delete(`http://localhost:3000/managers/${id}`);
            this.managers = this.managers.filter((m) => m.id !== id);
        } catch (error) {
            console.error('Error deleting manager:', error);
        }
    }
}

