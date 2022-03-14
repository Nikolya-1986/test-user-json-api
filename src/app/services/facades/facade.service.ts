import { Injectable, Injector, ViewContainerRef } from "@angular/core";
import { Observable } from "rxjs";

import { Auth } from "../../interfaces/auth.interface";
import { UserDTO } from "../../interfaces/user.interface";
import { AuthService } from "../../modules/auth/services/auth.service";
import { UserService } from "../user.service";
import { ModalWindowService } from "../modal-window.servise";

@Injectable({
    providedIn: 'root',
})
export class FacadeService {

    private _authService!: AuthService;
    public get authService(): AuthService {
        if(!this._authService) {
            this._authService = this.injector.get(AuthService);
        }
        return this._authService;
    };

    private _userService!: UserService;
    public get userService(): UserService {
        if(!this._userService) {
            this._userService = this.injector.get(UserService);
        }
        return this._userService;
    };

    private _modalWindowService!: ModalWindowService;
    public get modalWindowService(): ModalWindowService {
        if(!this._modalWindowService) {
            this._modalWindowService = this.injector.get(ModalWindowService)
        }
        return this._modalWindowService;
    };

    constructor(
        private injector: Injector,
    ){}

    public getToken(): string | null {
        return this.authService.getToken();
    };

    public sendToken(token: string): void {
        return this.authService.sendToken(token);
    };

    public get isAuthenticated(): boolean {
        return this.authService.isAuthenticated;
    };

    public signUp(id: number, lastName: string, firstName: string, email: string, password: string): Observable<Auth> {
        return this.authService.signUp(id, lastName, firstName, email, password);
    };

    public logIn(email: string, password: string, token: string): Observable<Auth> {
        return this.authService.logIn(email, password, token);
    };

    public logout(): void {
        return this.authService.logout();
    };

    public getAdminEmail(): Observable<string[]> {
        return this.authService.getAdminEmail();
    };

    public getAdminPassword(): Observable<string[]> {
        return this.authService.getAdminPassword();
    };

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
    };

    public modalWindowUserDelete(viewContainerRef: ViewContainerRef, modalTitle: string, modalBody: string, user: UserDTO): Observable<string> {
        return this.modalWindowService.modalWindowUserDelete(viewContainerRef, modalTitle, modalBody, user);
    };
}