import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, Observable, Subject, switchMap, tap } from 'rxjs';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';

import { DataService } from '../../services/data.service';
import { Appeal, City, Country, Gender, Status, SubjectLanguage, UserDTO } from '../../interfaces/user.interface';
import AppUserState from '../../store/user/user.state';
import * as userActions from '../../store/user/user.actions';
import * as userSelectors from '../../store/user/user.selectors';
import { imageValidator } from '../../validators/image.validator';
import { dateValidator } from '../../validators/date-birthday.validator';
import { phoneValidator } from '../../validators/phone.validator';
import { websiteValidator } from 'src/app/validators/wibsite.validator';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  @ViewChild('languageList', { static: true }) private languageList: any;
  public userEdit$!: Observable<UserDTO | any>;
  public destroy$: Subject<boolean> = new Subject;
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
  public editedImage: any;
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

  public fetchUserEdit() {
    this.userEdit$ = this.activatedRoute.params.pipe(
      map((userId: Params) => Number(userId['id'])),
      switchMap((id: number) => this.store.select(userSelectors.getUserSelector(id))),
      tap((user) => this.setFormValues(user as UserDTO),
      )
    )
    return this.userEdit$ as unknown as Observable<UserDTO>;
  };

  public reactiveForm(): void {
    this.formEdit = this.formBuilder.group({
      picture: ['',                
        [
          Validators.required,
          imageValidator
        ]
      ],
      appeal: [''],
      firstName: ['', 
        [
          Validators.required,
          Validators.pattern("^[a-zA-Z][a-zA-Z0-9]+$")
        ]
      ],
      lastName: ['', 
        [
          Validators.required,
          Validators.pattern("^[a-zA-Z][a-zA-Z]+$")
        ] 
      ],
      gender: [false, [Validators.required]],
      status: [''],
      dob: ['', 
        [
          Validators.required,
          dateValidator
        ]
      ],
      countries: [0, 
        [
          Validators.pattern("^[a-zA-Z][a-zA-Z]+$")
        ]
      ],
      cities: [0,
        [
          Validators.pattern("^[a-zA-Z][a-zA-Z]+$")
        ]
      ],
      email: ['', 
        [
          Validators.required, 
          Validators.email,
          Validators.pattern('^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$')
        ]
      ],
      website: ['',
        [
          Validators.required,
          websiteValidator,
        ]
      ],
      languages: [this.languages,
        [
          Validators.required,
          Validators.pattern("^[a-zA-Z][a-zA-Z]+$")
        ]
      ],
      registered: [''],
      phone: ['', 
        [
          Validators.required,
          phoneValidator
        ]
      ],
      nationality: ['', 
        [
          Validators.required,
          Validators.pattern("^[A-Z][A-Z]+$"),
          Validators.maxLength(3),
        ]
      ],
    })
  };

  private setFormValues(user: UserDTO): void {
    this.formEdit.patchValue({
      picture: [user.picture[0]],
      appeal: user.name.title,
      firstName: user.name.first,
      lastName: user.name.last,
      gender: user.gender,
      status: user.status,
      dob: user.dob.date,
      countries: user.location.country,
      cities: user.location.city,
      email: user.email,
      website: user.website,
      languages: [user.language],
      registered: user.registered.date,
      phone: user.phone,
      nationality: user.nat,
    })
  };

  public imageChange(inputEvent: Event | any): any | File {

    if(!inputEvent.target.files[0] || inputEvent.target.files[0].length == 0) {
			return;
		}

    const reader = new FileReader();
		reader.readAsDataURL(inputEvent.target.files[0]);

		reader.onload = (_event) => {
			this.editedImage = reader.result; 
      console.log(this.editedImage);
		}
    return this.editedImage;
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

  public editUser(userEdit: UserDTO):void {
    if(this.formEdit.valid){
      const editedUser = this.formEdit.getRawValue();
      const userUpdated: UserDTO = {
        id: userEdit.id,
        ...editedUser,
        picture: this.editedImage
      }
      this.store.dispatch(userActions.EditUserRequest({ userEdit: userUpdated }));
      console.log(userUpdated);
    }
  };
  
}
