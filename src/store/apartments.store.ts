import { makeAutoObservable } from 'mobx';
import {api} from "./api";

export interface Apartment {
    id: number;
    number: number;
    object: string;
    floor: number;
    createdDate: Date;
    status: string;
    statusDescription?: string;
    price: number;
    name?: string;
}

export class ApartmentsStore {
    apartments: Apartment[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    async fetchApartments() {
        try {
            const response = await api.get<Apartment[]>('/apartments');
            this.apartments = response.data;
        } catch (error) {
            console.error('Error fetching apartments:', error);
        }
    }

    async createApartment(apartment: Apartment) {
        try {
            const response = await api.post<Apartment>('/apartments', apartment);
            this.apartments.push(response.data);
        } catch (error) {
            console.error('Error creating apartment:', error);
        }
    }

    async updateApartment(apartment: Apartment) {
        try {
            await api.put(`/apartments/${apartment.id}`, apartment);
            const index = this.apartments.findIndex((a) => a.id === apartment.id);
            if (index !== -1) {
                this.apartments[index] = apartment;
            }
        } catch (error) {
            console.error('Error updating apartment:', error);
        }
    }

    async deleteApartment(id: number) {
        try {
            await api.delete(`/apartments/${id}`);
            this.apartments = this.apartments.filter((a) => a.id !== id);
        } catch (error) {
            console.error('Error deleting apartment:', error);
        }
    }
}


