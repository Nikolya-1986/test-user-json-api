import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Picture, UserDTO } from '../../../../interfaces/user.interface';
import { PositionDTO } from "../../../../interfaces/position.interface";
import { LocationDTO } from "../../../../interfaces/location.interface";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {

  @Input() public userDetails!: UserDTO<PositionDTO, LocationDTO>;
  @Input() public showTable!: boolean;
  @Input() public showText!: boolean;
  @Input() public currentImage!: number;
  @Output() public previousImage = new EventEmitter<{ previous: number, images: Picture[] }>();
  @Output() public nextImage = new EventEmitter<{ next: number, images: Picture[] }>();

  constructor(
  ) {}

  private getImages() {
    const images = this.userDetails.picture;
    return images;
  };

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
