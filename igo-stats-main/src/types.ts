export type User = {
    name: string;
    rating: number;
    id: string;
    email: string;
    imageUrl: string;
    admin: boolean;
};

export type PlayerData = {
    id: string;
    first_name: string;
    last_name: string;
    rating_rfg: number;
    tournaments: Array<string>;
    city: string;
    country: string;
    club: string;
};
