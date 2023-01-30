import { Component } from '@angular/core';
import {LinkCollectionService} from "../link-collection.service";
import {ActivatedRoute} from "@angular/router";
import {LinkCollection} from "../link-collection.types";
@Component({
  selector: 'app-link-collection-detail',
  templateUrl: './link-collection-detail.component.html',
  styleUrls: ['./link-collection-detail.component.less']
})
export class LinkCollectionDetailComponent {
  linkCollection:LinkCollection | undefined;

  constructor(
    private linkCollectionService : LinkCollectionService,
    private route:ActivatedRoute,
  ) {
    this.route.params.subscribe(params => {
      this.linkCollectionService.getLinkCollection(+params['id'])
        .subscribe(response => {
          this.linkCollection = response;
        })
    });
  }
}
