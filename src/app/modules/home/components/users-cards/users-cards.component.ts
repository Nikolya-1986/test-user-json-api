import { AfterContentInit, Component, ContentChild, ElementRef, Input, Renderer2 } from '@angular/core';

import { UserDTO } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-users-cards',
  templateUrl: './users-cards.component.html',
  styleUrls: ['./users-cards.component.scss']
})
export class UsersCardsComponent implements AfterContentInit {

  @ContentChild('contentImage') contentImageElementRef!: ElementRef;
  @Input() users: UserDTO[] | any;
  @Input() error: string | any;

  constructor(
    private renderor: Renderer2,
  ) { }
  
  public trackByFn(ind: number, item: any): number {
    console.log("User id:", ind);
    return ind;
  };

  public ngAfterContentInit(): void {
    this.renderor.setStyle(this.contentImageElementRef.nativeElement, "position", "fixed");
    this.renderor.setStyle(this.contentImageElementRef.nativeElement, "top", "25%");
    this.renderor.setStyle(this.contentImageElementRef.nativeElement, "left", "40%");
  }

}
