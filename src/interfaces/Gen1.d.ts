// Generated by https://quicktype.io

export interface Gen1 {
    count:    number;
    next:     string;
    previous: null;
    results?:  Result[] | undefined ;
}

export interface Result {
    name: string;
    url:  string;
}
