import {Component, OnInit} from '@angular/core';
import {Member} from "./member.types";
import {MemberService} from "./member.service";

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.less']
})
export class MemberComponent implements OnInit{
  members: Member[]=[];
  constructor(private memberService:MemberService) {
  }

  ngOnInit() : void{
    this.memberService.getMembers()
      .subscribe(response=>{
        this.members = response;
        })
  }
}
