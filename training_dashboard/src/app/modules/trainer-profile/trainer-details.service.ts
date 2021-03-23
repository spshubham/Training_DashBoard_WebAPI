import { Injectable } from '@angular/core';
import { trainer_details } from './trainer-other-data';

@Injectable({providedIn: 'root'})
export class TrainerDetailsService {
    trainer_details: trainer_details[]=[]
    constructor() { 
        this.trainer_details.push(new trainer_details(1,'Angular','C++, Java, .NET','React','31-01-21'))
        this.trainer_details.push(new trainer_details(2,'Angular','C++, Java, .NET','React','31-01-21'))
        this.trainer_details.push(new trainer_details(3,'Angular','C++, Java, .NET','React','31-01-21'))
        this.trainer_details.push(new trainer_details(4,'Angular','C++, Java, .NET','React','31-01-21'))
        this.trainer_details.push(new trainer_details(5,'Angular','C++, Java, .NET','React','31-01-21'))
        this.trainer_details.push(new trainer_details(6,'Angular','C++, Java, .NET','React','31-01-21'))
        this.trainer_details.push(new trainer_details(7,'Angular','C++, Java, .NET','React','31-01-21'))
        this.trainer_details.push(new trainer_details(8,'Angular','C++, Java, .NET','React','31-01-21'))
        
    }

    getData(){
        return this.trainer_details;
    }
    
}