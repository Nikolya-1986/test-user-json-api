import { AfterContentInit, Component, ContentChild, ElementRef, EventEmitter, Input, Output, Renderer2 } from '@angular/core';

import { EpisodeDTO } from '../../../../interfaces/episode.interface';
import { UserDTO } from '../../../../interfaces/user.interface';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements AfterContentInit {

  @ContentChild('contentText') private contentTextElementRef!: ElementRef;
  @Input() public user!: UserDTO<EpisodeDTO>;
  @Output() public detailCurrentUser = new EventEmitter<number>();

  constructor(
    private renderor: Renderer2,
  ) { }

  public ngAfterContentInit(): void {
    this.renderor.setStyle(this.contentTextElementRef.nativeElement,  "margin", "0 0 .5rem 0");
    this.renderor.setStyle(this.contentTextElementRef.nativeElement,  "color","var(--primary-color-1)");
    this.renderor.setStyle(this.contentTextElementRef.nativeElement, "text-align","end");
  };

  public getailUser():void {
    this.detailCurrentUser.emit(this.user.id)
  };

  // public getClassName(): boolean {
  //   if(this.user.available === true){
  //     let bgColorRed = {
  //       'offline': true
  //     }
  //     return bgColorRed;
  //   }else {
  //     let bgColorGreen = {
  //       'online': true
  //     }
  //     return bgColorGreen;
  //   }
  // }
}
