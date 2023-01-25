import {Component, OnInit} from '@angular/core';
import {LinkService} from "./link.service";
import {Link} from "./link.types";

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.less']
})

export class LinkComponent implements OnInit {

  links: Link[] = [];
  constructor(private linkService: LinkService) {
  }

  ngOnInit(): void {
    this.linkService.getLinks()
      .subscribe(response => {
        this.links = response;
      })
  }
}
