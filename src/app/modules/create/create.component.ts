import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter, fromEvent, map, Observable, take } from 'rxjs';
import { Appeal, Gender, Status } from '../../interfaces/user.interface';
import { imageValidator } from '../../validators/image.validator';
import { dateValidator } from '../../validators/date-birthday.validator';
import { coordinatesValidator } from '../../validators/coordinates.validator';
import { EmailAsyncValidator } from '../../validators/email-async.validator';
import { websiteValidator } from '../../validators/wibsite.validator';
import { lengthValidator } from '../../validators/length.validator';
import { phoneValidator } from 'src/app/validators/phone.validator';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public formCreate!: FormGroup;
  public picture: Array<{ src: string }> = [];
  public appeal: Appeal[] = [Appeal.Miss, Appeal.Mr, Appeal.Mrs, Appeal.Ms];
  public gender: Gender[] = [Gender.female, Gender.male];
  public statuses: Status[] = [Status.divorced, Status.married, Status.single];
  public currentDate = new Date();
  public registeredDate = new Date() as unknown as string;

  constructor(
    private formBuilder: FormBuilder,
    private emailAsyncValidator: EmailAsyncValidator,
  ) { }

  public ngOnInit(): void {
    this.reactiveFormCreate()
  }

  public reactiveFormCreate(): void {
    this.formCreate = this.formBuilder.group({
      picture: ['',               
        [imageValidator]
      ],
      name: this.formBuilder.group({
        title: ['', 
          [Validators.required]
        ],
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
      language: this.formBuilder.array([this.createElementLanguage()]),
      available: [false, [Validators.required]],
      registered: this.formBuilder.group({
        date: [{ value: this.registeredDate, disabled: true }],
        age: [{ value: this.registeredDate, disabled: true }],
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
    });
    this.formCreate.valueChanges.subscribe(console.info);
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

}
