import { Injectable } from '@angular/core';
import { trainer } from './trainers';
import Swal from 'sweetalert2';

@Injectable({providedIn: 'root'})
export class TrainersDataService {
    
    trainers: trainer[]= []
    tr: trainer;
    primary_skill:string;
    certification: string;
    upgradation:string;
    timeline:string;
    constructor(){}
   /* constructor() {
        this.trainers.push(new trainer(1,"Pallavi Jog", "Blockchain","pallavi_jog@persistent.com","Blockchain","C++, Java, IBM cloud","Python","31-10-21"));
        this.trainers.push(new trainer(2,"Sameera Deo", "Microsoft Azure","sameera_deo@persistent.com","Azure","Java, Microsoft Azure Administrator Associate","Azure AI","31-10-21"));
        this.trainers.push(new trainer(3,"Bharti Thorat", "React","bharti_thorat@persistent.com","React","Java, Google Cloud Architect","Angular","31-10-21"));
        this.trainers.push(new trainer(4,"Mukta Peshave", "Angular","mukta_peshave@persistent.com","Angular","C, Python, IBM Certified Data Scientist","React","31-10-21"));
        this.trainers.push(new trainer(5,"Kedar Tokekar", "Java","kedar_tokekar@persistent.com","Java","Java, Machine Learning","Deep Learning","31-10-21"));
        this.trainers.push(new trainer(6,"Subrahmanyam", "Git","subrahmanyam@persistent.com",".NET","C++, Python, Azure Certified cloud architect ","React","31-10-21"));
        this.trainers.push(new trainer(7,"Abhijeet Gole", "HTML","abhijeet_gole@persistent.com","Hadoop","C, Java, Python",".NET","31-10-21"));
        this.trainers.push(new trainer(8,"Archana Ghatigar", ".NET","Devraj@persistent.com",".NET","Python, Java","Microsoft Azure","31-10-21"));

     }*/
     
    /* addData(id:number,name:string,course:string,email:string){
         this.trainers.push(new trainer(id, name, course,email,this.primary_skill,this.certification,this.upgradation,this.timeline ))
         Swal.fire("Successfully Added",'', 'success');
     }*/
     getTrainerList(){
         return this.trainers;
     }
}