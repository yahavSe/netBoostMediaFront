export interface UrlList {
    data?: Urls[];
    page?: number;
    perPage?: number;
    total?: number;
    existingUrl?:boolean;
}

export interface Urls {
    parent?:string | null;
    time?:{date?:string,timezone_type?:number,timezone?:string};
    url?:string;
    expanded?: boolean | null;
}

