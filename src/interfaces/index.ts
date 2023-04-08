export interface iUser {
    id: string;
    fullName: string;
    whatsApp: string;
}

export interface iLocation {
    id: string;
    name: string;
    expiredAt?: string;
    userId?: string;
}

export interface iResponse {
    message: string;
}
