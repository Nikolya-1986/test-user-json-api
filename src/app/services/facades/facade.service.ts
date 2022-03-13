import { Injectable, Injector } from "@angular/core";
import { Observable } from "rxjs";
import { UserDTO } from "src/app/interfaces/user.interface";
import { UserService } from "../user.service";

@Injectable({
    providedIn: 'root',
})
export class FacadeService {

    private _userService!: UserService;
    public get userService(): UserService {
        if(!this._userService) {
            this._userService = this.injector.get(UserService);
        }
        return this._userService;
    }

    constructor(
        private injector: Injector,
    ){}

    public getUsers(): Observable<UserDTO[]> {
        return this.userService.getUsers();
    };

    public getUser(id: number): Observable<UserDTO> {
        return this.userService.getUser(id);
    };

    public deleteUser(id: number): Observable<UserDTO> {
        return this.userService.deleteUser(id);
    };

    public editUser(user: UserDTO): Observable<UserDTO> {
        return this.userService.editUser(user);
    };

    public createUser(user: UserDTO): Observable<UserDTO> {
        return this.userService.createUser(user);
    };

    public getLanguages(): Observable<string[]> {
        return this.userService.getLanguages();
    };

    public getEmails(): Observable<string[]> {//уточнить
        return this.userService.getEmails();
    } 
}