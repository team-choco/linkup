import {Component, OnInit} from '@angular/core';
import {LinkCollectionService} from "./link-collection.service";
import {LinkCollection} from "./link-collection.types";
import {LinkComponent} from "../link/link.component";
import {LinkService} from "../link/link.service";
import {Link} from "../link/link.types";


@Component({
  selector: 'app-link-collection',
  templateUrl: './link-collection.component.html',
  styleUrls: ['./link-collection.component.less']
})
export class LinkCollectionComponent implements OnInit{

  link_collections : LinkCollection[] =[];
  constructor(private linkCollectionService: LinkCollectionService) {
  }

  ngOnInit() : void{
    this.linkCollectionService.getLinkCollections()
      .subscribe(response=>{
        this.link_collections=response;
      })
  }

}
