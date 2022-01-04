import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Picture, UserDTO } from '../../../../interfaces/user.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input() public userDetail!: UserDTO;
  @Input() public showTable!: boolean;
  @Input() public showText!: boolean;
  @Input() public currentImage!: number;
  @Output() public previousImage = new EventEmitter<{ previous: number, images: Picture[] }>();
  @Output() public nextImage = new EventEmitter<{ next: number, images: Picture[] }>();

  constructor() {}

  public ngOnInit(): void {
  };

  private getImages() {
    const images = this.userDetail.picture;
    return images;
  }

  public previousClick(): void {
    const previous = this.currentImage - 1;
    const images = this.getImages();
    this.previousImage.emit({previous, images})
  };

  public nextClick(): void {
    const next = this.currentImage + 1;
    const images = this.getImages();
    this.nextImage.emit({next, images})
  };
}
