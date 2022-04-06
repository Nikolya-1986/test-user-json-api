import { Injectable, Injector, ViewContainerRef } from "@angular/core";
import { catchError, Observable, retry, tap } from "rxjs";

import { Auth } from "../../interfaces/auth.interface";
import { UserDTO } from "../../interfaces/user.interface";
import { Position, PositionDTO } from "../../interfaces/position.interface";
import { LocationDTO } from "../../interfaces/location.interface";
import { AuthService } from "../../modules/auth/services/auth.service";
import { UserService } from "../user.service";
import { ModalWindowService } from "../modal-window.servise";
import { ErrorService } from "../error.service";
import { AdditionalInfoUserService } from "../additional-info-user.service";

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

    private _additionalInfoUserService!: AdditionalInfoUserService;
    public get additionalInfoUserService(): AdditionalInfoUserService {
        if(!this._additionalInfoUserService) {
            this._additionalInfoUserService = this.injector.get(AdditionalInfoUserService);
        }
        return this._additionalInfoUserService;
    };

    private _modalWindowService!: ModalWindowService;
    public get modalWindowService(): ModalWindowService {
        if(!this._modalWindowService) {
            this._modalWindowService = this.injector.get(ModalWindowService);
        }
        return this._modalWindowService;
    };

    private _errorService!: ErrorService;
    public get errorService(): ErrorService {
        if(!this._errorService) {
            this._errorService = this.injector.get(ErrorService);
        }
        return this._errorService;
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

    public signUp(id: number, lastName: string, firstName: string, email: string, password: string): Observable<Auth> {
        return this.authService.signUp(id, lastName, firstName, email, password).pipe(
            catchError(this.errorService.errorsBackend.bind(this)),
        );
    };

    public logIn(email: string, password: string, token: string): Observable<Auth> {
        return this.authService.logIn(email, password, token).pipe(
            catchError(this.errorService.errorsBackend.bind(this)),
        );
    };

    public getAdmins(): Observable<Auth[]> {
        return this.authService.getAdmins().pipe(
            catchError(this.errorService.errorsBackend.bind(this)),
        );
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

    public getUsers(): Observable<UserDTO<PositionDTO, LocationDTO>[]> {
        return this.userService.getUsers().pipe(
            retry(3),
            catchError(this.errorService.errorsBackend.bind(this)),
        );
    };

    public getUser(id: number): Observable<UserDTO<PositionDTO, LocationDTO>> {
        return this.userService.getUser(id).pipe(
            catchError(this.errorService.errorsBackend.bind(this)),
        );
    };

    public deleteUser(id: number): Observable<UserDTO<PositionDTO, LocationDTO>> {
        return this.userService.deleteUser(id).pipe(
            catchError(this.errorService.errorsBackend.bind(this)),
        );
    };

    public editUser(user: UserDTO<PositionDTO, LocationDTO>): Observable<UserDTO<PositionDTO, LocationDTO>> {
        return this.userService.editUser(user).pipe(
            tap(() => console.log('User edit:', user)),
            catchError(this.errorService.errorsBackend.bind(this)),
        );
    };

    public createUser(user: UserDTO<PositionDTO, LocationDTO>): Observable<UserDTO<PositionDTO, LocationDTO>> {
        return this.userService.createUser(user).pipe(
            tap(() => console.log('User create:', user)),
            catchError(this.errorService.errorsBackend.bind(this)),
        );
    };

    public getUserPosition(url: string): Observable<Position> {
        return this.additionalInfoUserService.getUserPosition(url).pipe(
            catchError(this.errorService.errorsBackend.bind(this)),
        )
    };

    public getUserLocation(id: string): Observable<Location> {
        return this.additionalInfoUserService.getUserLocation(id).pipe(
            catchError(this.errorService.errorsBackend.bind(this)),
        )
    };

    public getLanguages(): Observable<string[]> {
        return this.userService.getLanguages();
    };

    public getEmails(): Observable<string[]> {//уточнить
        return this.userService.getEmails();
    };

    public modalWindowUserDelete(
        viewContainerRef: ViewContainerRef, 
        modalTitle: string,
        modalBody: string, 
        user: UserDTO<PositionDTO, LocationDTO>
        ): Observable<string> {
        return this.modalWindowService.modalWindowUserDelete(viewContainerRef, modalTitle, modalBody, user);
    };
}