// Database types for Swiss Shield

export type Confession = 'catholic' | 'reformed';

export type Canton = 'ZH' | 'GE' | 'VD' | 'BS';

export interface AddressEntry {
    id: string;
    canton: Canton;
    zip: string;
    confession: Confession;
    recipient_name: string;
    addr1: string;
    addr2?: string;
    postal: string;
    city: string;
    country: string;
    source_note?: string;
    updated_at: string;
}

export interface Order {
    id: string;
    stripe_session_id: string;
    created_at: string;
    email: string;
    canton: Canton;
    zip: string;
    confession: Confession;
    full_name: string;
    address_line1: string;
    address_line2?: string;
    user_postal: string;
    user_city: string;
    status: 'pending' | 'completed' | 'failed';
}

export interface FormData {
    canton: Canton;
    zip: string;
    confession: Confession;
    fullName: string;
    dateOfBirth: string; // DD.MM.YYYY format
    addressLine1: string;
    addressLine2?: string;
    postalCity: string;
    email: string;
}

export interface MatchedAddress {
    found: boolean;
    exact: boolean;
    address?: AddressEntry;
    fallbackMessage?: string;
}
