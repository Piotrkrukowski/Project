export interface apiDataInterface{
    adref?: string;
    category?: Category[];
    id?: number;
    latitude?: number;
    longitude?: number;
    redirect_url?: string;
    salary_is_predicted?: number;
    salary_max?: number;
    salary_min?: number;
    title?: string;
    contract_time?: string;
    company?: Company[];
    location?: Location[];
}
interface Category{
    label?: string;
    tag?: string;
}
interface Company{
    display_name?: string;
    created?: Date;
    description?: string;
}
interface Location{
    display_name?: string;
}