import { Landlord } from "./landlord"

export interface Apartment {
    id: number,
    name: string,
    description: string,
    maxBedNumbers: string,
    city: string,
    street: string,
    landlord: Landlord
}