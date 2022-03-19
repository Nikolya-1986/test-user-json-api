import { AfterContentInit, Component, ContentChild, ElementRef, EventEmitter, Input, Output, Renderer2 } from '@angular/core';

import { EpisodeDTO } from '../../../../interfaces/episode.interface';
import { Gender, Status, UserDTO } from '../../../../interfaces/user.interface';

@Component({
  selector: 'app-users-cards',
  templateUrl: './users-cards.component.html',
  styleUrls: ['./users-cards.component.scss']
})
export class UsersCardsComponent implements AfterContentInit {

  @ContentChild('contentImage') private contentImageElementRef!: ElementRef;
  @Input() public users: UserDTO<EpisodeDTO>[] | any;
  @Input() public error: string | any;
  @Input() public searchUserName!: string;
  @Input() public filterUserNameAge!: string;
  @Input() public filterUserGender!: Gender;
  @Input() public fiterUserStatus!: Status;
  @Input() public filterUserLanguage!: string;
  @Input() public filterUserAvailable!: boolean;
  @Output() public detailUser = new EventEmitter<number>();

  constructor(
    private renderor: Renderer2,
  ) { }
   
  public trackByFn(ind: number, item: any): number {
    // console.log("User id:", ind);
    return ind;
  };

  public ngAfterContentInit(): void {
    this.renderor.setStyle(this.contentImageElementRef.nativeElement, "position", "fixed");
    this.renderor.setStyle(this.contentImageElementRef.nativeElement, "top", "25%");
    this.renderor.setStyle(this.contentImageElementRef.nativeElement, "left", "40%");
  };

  public onDetailCurrentUser(id: number): void {
    this.detailUser.emit(id)
  }
}
