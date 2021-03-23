import { TrainerAddComponent } from '../trainer-add/trainer-add.component';
export class trainer{
    trainer_id: number;
    trainer_name: string;
    course_name: string;
    trainer_email: string;
    trainer_primary_skill: string;
    trainer_certifications: string;
    trainer_upgradation_plan: string;
    trainer_timeline: string;
    constructor(){}

    /*constructor(trainer_id: number, trainer_name: string, course_name: string, trainer_email: string,trainer_primary_skill: string,trainer_certifications: string, trainer_upgradation_plan: string,trainer_timeline: string){
        this.trainer_id= trainer_id;
        this.trainer_name = trainer_name;
        this.course_name = course_name;
        this.trainer_email = trainer_email;
        this.trainer_primary_skill = trainer_primary_skill;
        this.trainer_certifications =trainer_certifications;
        this.trainer_upgradation_plan= trainer_upgradation_plan;
        this.trainer_timeline = trainer_timeline;
    }*/
}