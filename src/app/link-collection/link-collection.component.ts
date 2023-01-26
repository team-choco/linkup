import {Component, OnInit} from '@angular/core';
import {LinkCollectionService} from "./link-collection.service";
import {LinkCollection} from "./link-collection.types";


@Component({
  selector: 'app-link-collection',
  templateUrl: './link-collection.component.html',
  styleUrls: ['./link-collection.component.less']
})
export class LinkCollectionComponent implements OnInit{

  link_collection_name : string = "링크모음 이름";
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
