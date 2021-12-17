import { AfterContentInit, Component, ContentChild, ElementRef, Input, Renderer2 } from '@angular/core';

import { UserDTO } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements AfterContentInit {

  @ContentChild('contentText') contentTextElementRef!: ElementRef;
  @Input() user!: UserDTO;
  
  constructor(
    private renderor: Renderer2,
  ) { }

  public ngAfterContentInit(): void {
    this.renderor.setStyle(this.contentTextElementRef.nativeElement,  "margin", "0 0 .5rem 0");
    this.renderor.setStyle(this.contentTextElementRef.nativeElement,  "color","var(--primary-color-1)");
    this.renderor.setStyle(this.contentTextElementRef.nativeElement, "text-align","end");
  };

}
