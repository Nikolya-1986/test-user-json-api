import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable, Subject, switchMap, tap } from 'rxjs';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent, MatChipList } from '@angular/material/chips';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';

import { DataService } from '../../services/data.service';
import { Appeal, City, Country, Gender, Status, UserDTO } from '../../interfaces/user.interface';
import AppUserState from '../../store/user/user.state';
import * as userActions from '../../store/user/user.actions';
import * as userSelectors from '../../store/user/user.selectors';
import { imageValidator } from '../../validators/image.validator';
import { dateValidator } from '../../validators/date-birthday.validator';
import { phoneValidator } from '../../validators/phone.validator';
import { EmailAsyncValidator } from '../../validators/email-async.validator';
import { postCodeValidator } from '../../validators/post-code.validator';
import { websiteValidator } from '../../validators/wibsite.validator';
import { lengthValidator } from 'src/app/validators/length.validator';

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
  public countries: Country[];
  public cities: City[];
  public selectedValueCountry = null;
  public selectedValueCity = null;
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
    this.formEdit.get('language')?.statusChanges.subscribe(
      status => this.languageList.errorState = status === 'INVALID'
    );
  };

  public fetchUserEdit() {
    this.userEdit$ = this.activatedRoute.params.pipe(
      map((userId: Params) => Number(userId['id'])),
      switchMap((id: number) => this.store.select(userSelectors.getUserSelector(id))),
      tap((user) => this.setFormValues(user as UserDTO))
    )
    return this.userEdit$ as unknown as Observable<UserDTO>;
  };

  public reactiveForm(): void {
    this.formEdit = this.formBuilder.group({
      picture: ['',                
        [
          imageValidator
        ]
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
          ]
        ]
      }),
      location: this.formBuilder.group({
        countries: ['', 
          [
            Validators.required,
          ]
        ],
        cities: ['',
          [
            Validators.required,
          ]
        ],
        postcode: ['',
          [
            Validators.required,
            Validators.pattern('^[0-9]+$'),
            postCodeValidator,
          ]
        ],
      }),
      email: ['', 
        [
          Validators.required, 
          Validators.email,
          Validators.pattern('^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$'),
        ]
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
          this.validateArrayNotEmpty,
          lengthValidator,
        ]
      ]),
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
      },
      location: {
        countries: user.location.country,
        cities: user.location.city,
        postcode: user.location.postcode,
      },
      email: user.email,
      website: user.website,
      language: [user.language],
      registered: 
      {
        date: user.registered.date
      },
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
      this.formEdit.patchValue({picture: this.editedImage});
      console.log(this.editedImage);
		}
    return this.editedImage;
  };

  public deleteImage(image: any, user: UserDTO): void {
    const del = user.picture.filter(item => item !== image);
    console.log(del)
  };

  get languages(): FormArray {
    return this.formEdit.get('language') as FormArray;
  };

  initName(language: string): FormControl {
    return this.formBuilder.control(language);
  }

  validateArrayNotEmpty(c: FormControl) {
    if (c.value && c.value.length === 0) {
      return {
        validateArrayNotEmpty: { valid: false }
      };
    }
    return null;
  }

  add(event: MatChipInputEvent, form: FormGroup): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
      const control = form.get('language') as FormArray;
      control.push(this.initName(value.trim()));
      console.log(control);
    }
    if (input) {
      input.value = '';
    }
  }

  remove(form: any, index: any) {
    console.log(form);
    form.get('language').removeAt(index);
  }

  public editUser(userEdit: UserDTO):void {
    if(this.formEdit.valid){
      const editedUser = this.formEdit.getRawValue();
      const userUpdated: UserDTO = {
        id: userEdit.id,
        ...editedUser,
        picture: this.editedImage
      }
      // this.store.dispatch(userActions.EditUserRequest({ userEdit: userUpdated }));
      console.log(userUpdated);
    }
  };
  
}