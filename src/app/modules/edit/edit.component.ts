import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

import { DataService } from '../../services/data.service';
import { Appeal, City, Country, Gender, Status, SubjectLanguage, UserDTO } from '../../interfaces/user.interface';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  @ViewChild('uploadControl') public uploadControl!: ElementRef;
  public uploadFileName = 'Choose File';
  
  @ViewChild('languageList', { static: true }) private languageList: any;

  public userEdit$!: Observable<UserDTO | any>
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
    private dataService: DataService
  ) {
    this.countries = this.dataService.getCountries();
    this.cities = this.dataService.getCities()
  }

  public ngOnInit(): void {
    this.reactiveForm()
  };

  public reactiveForm(): void {
    this.formEdit = this.formBuilder.group({
      picture: ["",[Validators.required]],
      appeal: ['Miss'],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      gender: ['male'],
      status: ['married'],
      dob: ['', [Validators.required]],
      countries: [''],
      cities: [''],
      email: ['', [Validators.required]],
      subjects: [this.languages],
      phone: ['', [Validators.required]],
      nationality: ['', [Validators.required]]
    })
  };

  public imageChange(inputEvent: any): void {

  };

  public dateOfBirth(inputEvent: { target: { value: string | number | Date; }; }): void {
    const convertDate = new Date(inputEvent.target.value).toISOString().substring(0, 10);
    this.formEdit.get('dob')!.setValue(convertDate, {
      onlyself: true
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
    console.log(this.formEdit.value)
  }
}
