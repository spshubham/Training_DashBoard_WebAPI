export class trainer_details{
    trainer_id: number;
    trainer_primary_skill: string;
    trainer_certifications: string;
    trainer_upgradation_plan: string;
    trainer_timeline: string;

    constructor(trainer_id: number,trainer_primary_skill: string,trainer_certifications: string, trainer_upgradation_plan: string,trainer_timeline: string){
        this.trainer_id = this.trainer_id;
        this.trainer_primary_skill = trainer_primary_skill;
        this.trainer_certifications =trainer_certifications;
        this.trainer_upgradation_plan= trainer_upgradation_plan;
        this.trainer_timeline = trainer_timeline;
    }
}