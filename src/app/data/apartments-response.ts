import { Apartment } from "./apartment";

export interface ApartmentsResponse {
    apartments: Apartment[],
    numberOfApartments: number
}