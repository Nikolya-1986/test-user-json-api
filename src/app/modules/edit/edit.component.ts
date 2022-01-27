import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { combineLatest, fromEvent, map, Observable, Subject, switchMap, tap } from 'rxjs';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent, MatChipList } from '@angular/material/chips';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';

import { Appeal, Gender, Picture, Status, UserDTO } from '../../interfaces/user.interface';
import AppUserState from '../../store/user/user.state';
import * as userActions from '../../store/user/user.actions';
import * as userSelectors from '../../store/user/user.selectors';
import { imageValidator } from '../../validators/image.validator';
import { dateValidator } from '../../validators/date-birthday.validator';
import { phoneValidator } from '../../validators/phone.validator';
import { websiteValidator } from '../../validators/wibsite.validator';
import { coordinatesValidator } from '../../validators/coordinates.validator';
import { lengthValidator } from '../../validators/length.validator';
import { EmailAsyncValidator } from '../../validators/email-async.validator';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  @ViewChild('languageList') languageList!: MatChipList;
  @ViewChild('uploadControl') public uploadControl!: ElementRef;
  public userEdit$!: Observable<UserDTO | any>;
  public destroy$: Subject<boolean> = new Subject;
  public appeal: Appeal[] = [Appeal.Miss, Appeal.Mr, Appeal.Mrs, Appeal.Ms];
  public formEdit!: FormGroup;
  public gender: Gender[] = [Gender.female, Gender.male];
  public statuses: Status[] = [Status.divorced, Status.married, Status.single];
  public selectedValueCountry = null;
  public selectedValueCity = null;
  public selectable: boolean = true;
  public removable: boolean = true;
  public addOnBlur: boolean = true;
  public editedImage!: any;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  
  constructor(
    public formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private store: Store<AppUserState>,
    private emailAsyncValidator: EmailAsyncValidator,
  ) { }

  public ngOnInit(): void {
    this.reactiveForm();
    this.fetchUserEdit();
    this.handleFormChanges();
  };

  public fetchUserEdit() {
    this.userEdit$ = this.activatedRoute.params.pipe(
      map((userId: Params) => Number(userId['id'])),
      switchMap((id: number) => this.store.select(userSelectors.getUserSelector(id))),
      tap((user) => this.setFormValues(user as UserDTO))
    )
    return this.userEdit$ as unknown as Observable<UserDTO>;
  };

  public handleFormChanges(){
    combineLatest([this.formEdit.valueChanges, this.formEdit.statusChanges])
    .subscribe((user) => {
      if(this.formEdit.valid){
        console.log('Form validation status: SUCESS', user);
      }else{
        console.log('Form validation status: ERROR', user);
      }
    })
    this.updateTreeValidity(this.formEdit);
  };

  private updateTreeValidity(group: FormGroup | FormArray | any): void {
    Object.keys(group.controls).forEach((key: string) => {
      const control = group.controls[key];

      if(control instanceof FormGroup || control instanceof FormArray){
        this.updateTreeValidity(control)
      }else {
        control.updateValueAndValidity();
      }
    })
  };

  public reactiveForm(): void {
    this.formEdit = this.formBuilder.group({
      picture: ['',               
        // [imageValidator]
      ],
      name: this.formBuilder.group({
        title: [''],
        first: ['', 
          [
            Validators.required,
            Validators.pattern("^[a-zA-Z][a-zA-Z0-9]+$"),
          ]
        ],
        last: ['', 
          [
            Validators.required,
            Validators.pattern("^[a-zA-Z][a-zA-Z]+$"),
          ] 
        ],
      }),
      gender: [false, [Validators.required]],
      status: [''],
      dob: this.formBuilder.group({
        date: ['', 
          [
            Validators.required,
            dateValidator,
          ],
        ],
        age: [ {value: '', disabled: true} ],
      }),
      location: this.formBuilder.group({
        country: ['', 
          [
            Validators.required,
            Validators.pattern("^[a-zA-Z][a-zA-Z]+$"),
          ]
        ],
        city: ['',
          [
            Validators.required,
            Validators.pattern("^[a-zA-Z][a-zA-Z]+$"),
          ]
        ],
        postcode: ['',
          [
            Validators.required,
            Validators.pattern("^[0-9]+$"),
            Validators.minLength(4),
            Validators.maxLength(6),
          ]
        ],
        coordinates: this.formBuilder.group({
          latitude: ['',
            [
              Validators.required,
              coordinatesValidator,
            ]
          ],
          longitude: ['',
            [
              Validators.required,
              coordinatesValidator,
            ]
          ]
        })
      }),
      email: ['', 
        [
          Validators.required, 
          Validators.email,
          Validators.pattern('^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$'),
        ],
        this.emailAsyncValidator.validate.bind(this.emailAsyncValidator)
      ],
      website: ['',
        [
          Validators.required,
          websiteValidator,
        ]
      ],
      language: this.formBuilder.array([
        this.formBuilder.control(''),
        [
          Validators.required,
          Validators.pattern("^[a-zA-Z][a-zA-Z]+$"),
          // lengthValidator
        ],
      ]),
      available: ['', [Validators.required]],
      registered: this.formBuilder.group({
        date: [ {value: '', disabled: true} ],
        age: [ {value: '', disabled: true} ],
      }),
      phone: ['', 
        [
          Validators.required,
          phoneValidator,
        ]
      ],
      nat: ['', 
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
      picture: 
      [
        {
          src: user.picture
        }
      ],
      name: 
      {
        title: user.name.title,
        first: user.name.first,
        last: user.name.last,
      },
      gender: user.gender,
      status: user.status,
      dob: 
      {
        date: user.dob.date,
        age: user.dob.age,
      },
      location: {
        country: user.location.country,
        city: user.location.city,
        postcode: user.location.postcode,
        coordinates: {
          latitude: user.location.coordinates.latitude,
          longitude: user.location.coordinates.longitude,
        }
      },
      email: user.email,
      website: user.website,
      language: [...user.language],
      available: user.available,
      registered: 
      {
        date: user.registered.date,
        age: user.registered.age,
      },
      phone: user.phone,
      nat: user.nat,
    })
  };

  public imageChange(event: Event | any, user: UserDTO): Observable<any>{

    if (event.target.files && event.target.files[0]) {
      let filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {

        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[i]);
        return fromEvent(reader, 'load').pipe(
          map((event:any) => {
            this.editedImage = event.target.result;
            user.picture.push({ src: this.editedImage });
          })
        )
      }
    }
    return this.editedImage;
  };

  public deleteImage(ind: number, user: UserDTO): void {
    const del = user.picture.splice(ind,1);
    console.log(del)
  };

  get language(): FormArray {
    return this.formEdit.get('language') as FormArray;
  };

  private initLanguage(language: string): FormControl {
    return this.formBuilder.control(language);
  };

  public addLanguage(event: MatChipInputEvent, form: FormGroup): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      const control = form.get('language') as FormArray;
      control.push(this.initLanguage(value.trim()));
    };
    if (input) {
      input.value = '';
    };
  };

  public deleteLanguage(index: number): void {
    this.language.removeAt(index);
  };
  
  public editUser(userEdit: UserDTO):void {
    if(this.formEdit.valid){
      const editedUser = this.formEdit.getRawValue();
      const userUpdated: UserDTO = {
        id: userEdit.id,
        ...editedUser,
      }
      this.store.dispatch(userActions.EditUserRequest({ userEdit: userUpdated }));
      console.log(userUpdated);
    }
  };
}