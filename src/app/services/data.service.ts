import { Injectable } from "@angular/core";

import { City, Country } from '../interfaces/user.interface';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    getCountries(): Country[] {
        return [
            { id: 1, name: "United States" },
            { id: 2, name: "Australia" },
            { id: 3, name: "Canada" },
            { id: 4, name: "Brazil" },
            { id: 5, name: "England" },
            { id: 6, name: "Russia" }
        ];
    };

    getCities(): City[] {
        return [
            { id: 1, name: "Los Angeles" },
            { id: 2, name: "Sydney" },
            { id: 3, name: "Melbourne" },
            { id: 4, name: "Sao Paulo" },
            { id: 5, name: "London" },
            { id: 6, name: "Moscow" }
        ];
    };

    



}