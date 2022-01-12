import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, Observable, switchMap, tap } from 'rxjs';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { Store } from '@ngrx/store';

import { DataService } from '../../services/data.service';
import { Appeal, City, Country, Gender, Status, SubjectLanguage, UserDTO } from '../../interfaces/user.interface';
import { ActivatedRoute, Params } from '@angular/router';
import AppUserState from '../../store/user/user.state';
import * as userSelectors from '../../store/user/user.selectors';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  @ViewChild('uploadControl') public uploadControl!: ElementRef;
  public uploadFileName = 'Choose File';
  
  @ViewChild('languageList', { static: true }) private languageList: any;

  public userEdit$!: Observable<UserDTO | any>;
  public appeal: Appeal[] = [Appeal.Miss, Appeal.Mr, Appeal.Mrs, Appeal.Ms];
  public formEdit!: FormGroup;
  public gender: Gender[] = [Gender.female, Gender.male];
  public statuses: Status[] = [Status.divorced, Status.married, Status.single];
  public countries: Country[];
  public cities: City[];
  public selectedValueCountry = null;
  public selectedValueCity = null;
  public languages: SubjectLanguage[] = [];
  public selectable: boolean = true;
  public removable: boolean = true;
  public addOnBlur: boolean = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(
    public formBuilder: FormBuilder,
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private store: Store<AppUserState>,
  ) {
    this.countries = this.dataService.getCountries();
    this.cities = this.dataService.getCities();
  }

  public ngOnInit(): void {
    this.reactiveForm();
    this.fetchUserEdit();
  };

  public fetchUserEdit(): Observable<UserDTO> {
    this.userEdit$ = this.activatedRoute.params.pipe(
      map((userId: Params) => Number(userId['id'])),
      switchMap((id: number) => this.store.select(userSelectors.getUserSelector(id))),
      tap((user) => this.setFormValues(user as UserDTO),
      )
    )
    return this.userEdit$;
  };

  public reactiveForm(): void {
    this.formEdit = this.formBuilder.group({
      picture: ['',[Validators.required]],
      appeal: [''],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      gender: [false, [Validators.required]],
      status: [''],
      dob: ['', [Validators.required]],
      countries: [0],
      cities: [0],
      email: ['', [Validators.required]],
      subjects: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      nationality: ['', [Validators.required]],
    })
  };

  private setFormValues(user: UserDTO): void {
    this.formEdit.patchValue({
      picture: [user.picture[0]],
      appeal: user.name.title,
      firstName: [user.name.first],
      lastName: [user.name.last],
      gender: user.gender,
      status: user.status,
      dob: user.dob.date,
      countries: user.location.country,
      cities: user.location.city,
      email: [user.email],
      subjects: [user.language],
      phone: [user.phone],
      nationality: [user.nat],
    })
  };

  public imageChange(inputEvent: any): void {
    // if (inputEvent.target.files && inputEvent.target.files[0]) {

    //   this.uploadFileName = '';
    //   Array.from(inputEvent.target.files).forEach((file: any) => {
    //     this.uploadFileName += file.name + ',';
    //   });

    //   const fileReader = new FileReader();
    //   fileReader.onload = (e: any) => {
    //     const img = new Image();
    //     img.src = e.target.result;
    //     img.onload = res => {

    //       const imgBase64Path = inputEvent.target.result;

    //     };
    //   };
    //   fileReader.readAsDataURL(inputEvent.target.files[0]);

    //   this.uploadControl.nativeElement.value = "";
    // } else {
    //   this.uploadFileName = 'Choose File';
    // }
  };

  public dateOfBirth(inputEvent: { target: { value: string | number | Date; }; }): void {
    const convertDate = new Date(inputEvent.target.value).toISOString().substring(0, 10);
    this.formEdit.get('dob')!.setValue(convertDate, {
      onlyself: true,
    })
  };

  public addLanguage(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim() && this.languages.length < 5) {
      this.languages.push({ name: value.trim() })
    }
    if (input) {
      input.value = '';
    }
  };

  public removeLanguage(subject: SubjectLanguage): void {
    const index = this.languages.indexOf(subject);
    if (index >= 0) {
      this.languages.splice(index, 1);
    }
  };

  public errorHandling(control: string, error: string): boolean {
    return this.formEdit.controls[control].hasError(error);
  };

  public submitForm():void {
    console.log(this.formEdit.value);
  };

}
