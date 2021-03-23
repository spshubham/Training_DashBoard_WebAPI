export class card{
    new_registrations: number;
    ongoing_courses: number;
    active_users: number;
    idle_users: number;

    constructor(new_registrations: number, ongoing_courses: number, active_users: number, idle_users: number){
        this.new_registrations = new_registrations;
        this.ongoing_courses = ongoing_courses;
        this.active_users = active_users;
        this.idle_users = idle_users 
    }
}