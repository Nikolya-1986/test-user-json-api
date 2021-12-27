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
  @Input() public images!: Picture[];
  @Output() public previousImage = new EventEmitter<number>();
  @Output() public nextImage = new EventEmitter<number>();

  constructor() { }

  public ngOnInit(): void {
  };

  public previousClick(): void {
    const previous = this.currentImage - 1;
    this.previousImage.emit(previous)
  };

  public nextClick(): void {
    const next = this.currentImage + 1;
    this.nextImage.emit(next)
  };
}
