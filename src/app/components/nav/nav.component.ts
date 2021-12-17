import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public logo: string = 'assets/images/logo.png';
  
  constructor() { }

  public ngOnInit(): void {
  }

}
