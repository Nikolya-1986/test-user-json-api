import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { combineLatest, forkJoin, fromEvent, map, Observable, of, Subject, switchMap, take, takeUntil, tap, filter } from 'rxjs';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent, MatChipList } from '@angular/material/chips';
import { ActivatedRoute, Params } from '@angular/router';

import { Appeal, Gender, Picture, Status, UserDTO } from '../../interfaces/user.interface';
import { Position, PositionDTO, PositionName, Type, Dimension } from '../../interfaces/position.interface';
import { LocationDTO, Location } from '../../interfaces/location.interface';
import { UserStoreFacade } from '../../store/user/user-store.facade';
import { FacadeService } from '../../services/facades/facade.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, OnDestroy {

  @ViewChild('languageList') languageList!: MatChipList;
  @ViewChild('uploadControl') public uploadControl!: ElementRef;

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  public formEdit!: FormGroup;
  public userEdit$!: Observable<UserDTO<Position, Location>>;
  public appeal: Appeal[] = [Appeal.Miss, Appeal.Mr, Appeal.Mrs, Appeal.Ms];
  public positionName: PositionName[] = [PositionName.Trainee, PositionName.Junior, PositionName.Midle, PositionName.Senior];
  public type: Type[] = [Type.Cluster, Type.Planet, Type.Microverse, Type.Advanced];
  public dimension: Dimension[] = [Dimension.Unknown, Dimension.Replacement, Dimension.Cable, Dimension.Interdimensional];
  public gender: Gender[] = [Gender.female, Gender.male];
  public statuses: Status[] = [Status.divorced, Status.married, Status.single];
  public selectable: boolean = true;
  public removable: boolean = true;
  public addOnBlur: boolean = true;
  private _destroy$: Subject<boolean> = new Subject();
  
  constructor(
    private _formBuilder: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _facadeService: FacadeService,
    private _userStoreFacade: UserStoreFacade,
  ) { }

  public ngOnInit(): void {
    this._reactiveForm();
    this._fetchUserEdit();
    this._handleFormChanges();
  };

  private _fetchUserEdit(): Observable<UserDTO<Position, Location>> {
    this.userEdit$ = this._activatedRoute.params.pipe(
      map((params: Params) => {
        const userId =  Number(params['id']);
        this._userStoreFacade.loadUser(userId);
        return userId;
      }),
      switchMap(() => (this._userStoreFacade.getUser$)),
      switchMap((user:  UserDTO<PositionDTO, LocationDTO> | any) => {
        const getPosition$ = this._facadeService.getUserPosition(user?.position.url);
        const getLocation$ = this._facadeService.getUserLocation(user?.location.id);
        const getUser$ = of(user);
        return forkJoin([getPosition$, getLocation$, getUser$]);
      }),
      map(([position, location, user]) => {
        const userAdditionalinfo: UserDTO<Position, Location> = {
          ...user,
          location,
          position,
        }
        return userAdditionalinfo;
      }),
      tap((user) => this.setFormValues(user as unknown as UserDTO<Position, Location>)),
      takeUntil(this._destroy$),
    )
    return this.userEdit$;
  };

  private _handleFormChanges(): void {
    combineLatest([this.formEdit.valueChanges, this.formEdit.statusChanges]).pipe(
      takeUntil(this._destroy$),
    )
    .subscribe((user) => {
      if(this.formEdit.valid){
        console.log('Form validation status: SUCESS', user);
      }else{
        console.log('Form validation status: ERROR', user);
      }
    })
    this._updateTreeValidity(this.formEdit);
  };

  private _updateTreeValidity(group: FormGroup | FormArray | any): void {
    Object.keys(group.controls).forEach((key: string) => {
      const control = group.controls[key];

      if(control instanceof FormGroup || control instanceof FormArray){
        this._updateTreeValidity(control)
      }else {
        control.updateValueAndValidity();
      }
    })
  };

  private _reactiveForm(): void {
    this.formEdit = this._formBuilder.group({
      picture: [''],
      name: this._formBuilder.group({
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
      dob: ['', [Validators.required],
      ],
      position: this._formBuilder.group({
        name: ['',
          [
            Validators.required,
          ]
        ],
        type: ['',
          [
            Validators.required,
          ]
        ],
        dimension: ['',
          [
            Validators.required,
          ]
        ],
      }),
      location: this._formBuilder.group({
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
        street: this._formBuilder.group({
          name: ['',
            [
              Validators.required,
              Validators.pattern("^[a-zA-Z][a-zA-Z]+$"),
            ]
          ],
          number: ['',
            [
              Validators.required,
              Validators.pattern("^[0-9]+$"),
            ]
          ]
        }),
        postcode: ['',
          [
            Validators.required,
            Validators.pattern("^[0-9]+$"),
            Validators.minLength(4),
            Validators.maxLength(6),
          ]
        ],
        coordinates: this._formBuilder.group({
          latitude: ['',
            [
              Validators.required,
            ]
          ],
          longitude: ['',
            [
              Validators.required,
            ]
          ]
        })
      }),
      email: [ {value: '', disabled: true} ],
      website: ['', [Validators.required]
      ],
      language: this._formBuilder.array([
        this._formBuilder.control(''),
        [Validators.pattern("^[a-zA-Z][a-zA-Z]+$")],
      ]),
      available: ['', [Validators.required]],
      registered: [ {value: '', disabled: true} ],
      phone: ['', [Validators.required]],
      nat: ['', 
        [
          Validators.required,
          Validators.pattern("^[A-Z][A-Z]+$"),
          Validators.maxLength(3),
        ]
      ],
    })
  };

  private setFormValues(user: UserDTO<Position, Location>): void {
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
      dob: user.dob,
      position: {
        name: user.position.name,
        type: user.position.type,
        dimension: user.position.dimension,
      },
      location: {
        city: user.location.city,
        country: user.location.country,
        street: {
          name: user.location.street.name,
          number: user.location.street.number,
        },
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
      registered: user.registered,
      phone: user.phone,
      nat: user.nat,
    })
  };

  public imageChange(inputEvent: Event, picture: Picture[]): Observable<{ src: string }[]> | any {
    const base64string$ = this._getBase64fromFile(inputEvent as ProgressEvent<HTMLInputElement>).pipe(take(1));
    base64string$.subscribe(image => { 
      const editImage = image;
      Object.preventExtensions(picture);
      picture.push({ src: editImage });
    })
    return picture;
  };

  private _getBase64fromFile(_event: any): Observable<string> {
    const reader = new FileReader();
    reader.readAsDataURL(_event.target.files[0]);

    return fromEvent(reader, 'load')
    .pipe(
      filter(() => _event.target.files && _event.target.files.length > 0),
      map(() => reader.result as string)
    );
  };

  public deleteImage(ind: number, user: UserDTO<Position, Location>): void {
    user.picture.splice(ind,1);
  };

  get language(): FormArray {
    return this.formEdit.get('language') as FormArray;
  };

  private initLanguage(language: string): FormControl {
    return this._formBuilder.control(language);
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
  
  public onSubmit(userEdit: UserDTO<PositionDTO, LocationDTO>):void {
    if(this.formEdit.valid){
      const editedUser = this.formEdit.getRawValue();
      const userUpdated = {
        id: userEdit.id,
        ...editedUser,
      }
      this._userStoreFacade.editUser(userUpdated);
    }
  };

  public ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  };
}