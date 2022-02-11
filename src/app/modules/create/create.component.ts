import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter, fromEvent, map, Observable, Subscription, take } from 'rxjs';
import { Store } from '@ngrx/store';

import { Appeal, Gender, Status, UserDTO } from '../../interfaces/user.interface';
import { imageValidator } from '../../validators/image.validator';
import { dateValidator } from '../../validators/date-birthday.validator';
import { coordinatesValidator } from '../../validators/coordinates.validator';
import { EmailAsyncValidator } from '../../validators/email-async.validator';
import { websiteValidator } from '../../validators/wibsite.validator';
import { lengthValidator } from '../../validators/length.validator';
import { phoneValidator } from '../../validators/phone.validator';
import AppUserState from '../../store/user/user.state';
import * as userActions from 'src/app/store/user/user.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit, OnDestroy {

  public formCreate!: FormGroup;
  private subscription: Subscription[] = [];
  public picture: Array<{ src: string }> = [];
  public appeal: Appeal[] = [Appeal.Miss, Appeal.Mr, Appeal.Mrs, Appeal.Ms];
  public gender: Gender[] = [Gender.female, Gender.male];
  public statuses: Status[] = [Status.divorced, Status.married, Status.single];
  public currentDate = new Date();
  public registeredDate = new Date() as unknown as string;

  constructor(
    private formBuilder: FormBuilder,
    private emailAsyncValidator: EmailAsyncValidator,
    private store: Store<AppUserState>,
  ) { }

  public ngOnInit(): void {
    this.reactiveFormCreate()
  };

  public reactiveFormCreate(): void {
    this.formCreate = this.formBuilder.group({
      picture: [this.picture, [imageValidator]],
      name: this.formBuilder.group({
        title: ['', [Validators.required]],
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
      status: [false, [Validators.required]],
      dob: ['', 
        [
          Validators.required,
          dateValidator,
        ],
      ],
      location: this.formBuilder.group({
        country: ['RU', [Validators.required,]],
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
      email: [''],
      // [
      //   '', 
      //   [
      //     Validators.required, 
      //     Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+.[a-z]{2,3}'),
      //   ],
      //   this.emailAsyncValidator.validate.bind(this.emailAsyncValidator)
      // ],
      website: ['',
        [
          Validators.required,
          websiteValidator,
        ]
      ],
      language: this.formBuilder.array([this.createElementLanguage()]),
      available: [false, [Validators.required]],
      registered: [{ value: this.registeredDate, disabled: true }],
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
    });
    this.handleFormChanges();
  };

  private handleFormChanges(): void {
    this.subscription.push(this.formCreate.valueChanges.subscribe(value => console.log('ValueChanges:', value)));
    this.subscription.push(this.formCreate.statusChanges.subscribe(status => console.log('StatusChanges:', status)))
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

  public addPicture(inputEvent: Event): Observable<{ src: string }[]> | any {
    const image = this.getBase64fromFile(inputEvent as ProgressEvent<HTMLInputElement>).pipe(take(1));
    image.subscribe(imageString => {
      const newImage = imageString;
      this.picture.push({ src: newImage })
      console.log(this.picture)
    });
    return this.picture;
  };

  private getBase64fromFile(_event: any): Observable<string> {
    const reader = new FileReader();
    reader.readAsDataURL(_event.target.files[0]);

    return fromEvent(reader, 'load')
      .pipe(
        filter(() => _event.target.files && _event.target.files.length > 0),
        map(() => reader.result as string)
      );
  };

  public deleteImage(ind: number): void {
    this.picture.splice(ind, 1);
  };

  public updateDate(event: any): void {
    this.currentDate = event.target.valueAsDate;
  };

  get language() {
    return this.formCreate.get('language') as FormArray;
  }
  public createElementLanguage(): FormArray | any {
    return this.formBuilder.control('', 
      [
        Validators.pattern("^[a-zA-Z][a-zA-Z]+$"),
        // lengthValidator,
      ]
    );
  };

  public addLanguage(): void {
    this.language.push(this.createElementLanguage())
  };

  public deleteLanguage(ind: number): void {
    if(this.language.length !== 1){
      this.language.removeAt(ind)
    }
  };

  public createUser(): void {
    if(this.formCreate.valid){
      const newUser = this.formCreate.getRawValue();
      const id = Math.random();
      const userCreate: UserDTO = {
        ...newUser,
        id: id,
        picture: this.picture,
      }
      this.store.dispatch(userActions.createUserRequest({ userCreate: userCreate }));
      console.log(userCreate);
      this.updateTreeValidity(userCreate);
    }
  };

  public ngOnDestroy(): void {
    this.subscription.forEach((sub) => {
      sub.unsubscribe();
    });
  };

}
// https://www.digitalocean.com/community/tutorials/angular-custom-form-control