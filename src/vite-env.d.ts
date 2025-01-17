/// <reference types="vite/client" />

export interface MapMeta {
    delivery_date?: string;
    delivery_time_frame_from?: string;
    delivery_time_frame_to?: string;
    pickup_address?: string;
    pickup_address_link?: string;
    pickup_address_map_url?: string;
}
interface Checkpoint {
    status_details: string;
    event_timestamp: string;
    status: string;
    country_iso3: string;
    city: string;
    meta?: MapMeta;
}

interface Article {
    articleNo: string;
    articleName: string;
    articleImageUrl: string | null;
    quantity: number;
    price: number;
}

interface DeliveryInfo {
    articles: Article[];
    orderNo: string;
    order_date: string;
    recipient: string;
    recipient_notification: string;
    email: string;
    street: string;
    city: string;
    region: string;
    timezone: string;
    announced_delivery_date: string;
}

export interface Order {
    _id: string;
    courier: string;
    tracking_number: string;
    created: string;
    updated: string;
    checkpoints: Checkpoint[];
    delivery_info: DeliveryInfo;
    destination_country_iso3: string;
    zip_code: string;
}
