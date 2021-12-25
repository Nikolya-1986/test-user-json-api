import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { UserDTO } from '../../interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit, OnDestroy {

  public userDetail$!: UserDTO;
  private userId!: number;
  private userSubscribe!: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) { }

  public ngOnInit(): void {
    this.getUserDetail()
  };

  public getUserDetail(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.userId  = params['id'];
      const detail = this.userService.getUser(this.userId);
      this.userSubscribe = detail.subscribe((res) => {
          if(res !== undefined) {
              this.userDetail$ = res;
          } else {
            (error: any) => {
              console.log(error)
            }
          }
        }
      )
    });
  };

  public ngOnDestroy(): void {
    const userUnSubscribe = this.userSubscribe.unsubscribe()
  };

}
