export interface ModelUser {
    name: string;
    email: string;
    address: ModelAddress;
}

export interface ModelBasic {
    name: string;
    email: string;
}

export interface ModelAddress {
    country: string;
    city: string;
}