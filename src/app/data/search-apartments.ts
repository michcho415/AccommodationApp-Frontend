import { PaginationInfo } from "./pagination-info";

export interface SearchApartmentsRequestData {
    name: string,
    bedNumber: number,
    city: string,
    paginationDTO: PaginationInfo
}