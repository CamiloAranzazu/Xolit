export interface JobData {
    code: string;
    title?: string;
    description?: string;
}

export class BearerToken {
    token_type?: string;
    access_token_olisoftoff?:string;
    expires_in?: number;
    id_token?: string;
}
