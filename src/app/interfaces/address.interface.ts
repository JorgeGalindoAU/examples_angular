import { IGeopoint } from "./geopoint.interface";

export interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IGeopoint;
}