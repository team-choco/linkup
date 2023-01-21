import { Component } from '@angular/core';
import {Member} from "../member.types";
import {MemberService} from "../member.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.less']
})
export class MemberDetailComponent {
  member: Member | undefined;

  constructor(
    private memberService : MemberService,
    private route: ActivatedRoute,
  ) {
    this.route.params.subscribe(params=>{
      this.memberService.getMember(+params['id'])
        .subscribe(response=>{
          this.member = response;
        })
      });
  }
}
