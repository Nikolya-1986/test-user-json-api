import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter, fromEvent, map, Observable, Subscription, take } from 'rxjs';

import { PositionDTO } from '../../interfaces/position.interface';
import { LocationDTO } from '../../interfaces/location.interface';
import { UserDTO } from '../../interfaces/user.interface';
import { UserStoreFacade } from '../../store/user/user-store.facade';
import { imageValidator } from '../../validators/image.validator';
import { dateValidator } from '../../validators/date-birthday.validator';
import { coordinatesValidator } from '../../validators/coordinates.validator';
import { websiteValidator } from '../../validators/wibsite.validator';
import { lengthValidator } from '../../validators/length.validator';
import { phoneValidator } from '../../validators/phone.validator';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit, OnDestroy {

  public formCreate!: FormGroup;
  private subscription: Subscription[] = [];
  public picture: Array<{ src: string }> = [];
  public currentDate = new Date();
  public registeredDate = new Date() as unknown as string;

  constructor(
    private _formBuilder: FormBuilder,
    private _userStoreFacade: UserStoreFacade,
  ) { }

  public ngOnInit(): void {
    this._reactiveFormCreate()
  };

  private _reactiveFormCreate(): void {
    this.formCreate = this._formBuilder.group({
      picture: [this.picture, [imageValidator]],
      name: this._formBuilder.group({
        title: [''],
        first: [''],
        last: [''],
      }),
      gender: [false],
      status: [false],
      dob: ['', 
        [
          Validators.required,
          dateValidator,
        ],
      ],
      location: this._formBuilder.group({
        country: ['RU', [Validators.required,]],
        city: [''],
        postcode: [''],
        coordinates: this._formBuilder.group({
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
      website: ['',
        [
          Validators.required,
          websiteValidator,
        ]
      ],
      language: this._formBuilder.array([this.createElementLanguage()]),
      available: [false],
      registered: [{ value: this.registeredDate, disabled: true }],
      phone: ['', 
        [
          Validators.required,
          phoneValidator,
        ]
      ],
      nat: [''],
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
    return this._formBuilder.control('', 
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

  public onSubmit(): void {
    if(this.formCreate.valid){
      const newUser = this.formCreate.getRawValue();
      const id = Math.random();
      const userCreate: UserDTO<PositionDTO, LocationDTO> = {
        ...newUser,
        id: id,
        picture: this.picture,
      }
      this._userStoreFacade.createUser(userCreate);
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