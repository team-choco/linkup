import {Component, OnInit} from '@angular/core';
import {LinkCollection} from "../link-collection/link-collection.types";
import {LinkCollectionService} from "../link-collection/link-collection.service";
import {Category} from "./category.types";
import {CategoryService} from "./category.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.less']
})
export class CategoryComponent implements OnInit{
  categories : Category[]=[];
  link_collections : LinkCollection[]=[];

  constructor(private categoryService:CategoryService, private  linkCollectionService:LinkCollectionService) {
  }

  ngOnInit() :void{
    this.categoryService.getCategories()
      .subscribe(response=>{
        this.categories=response;
      })
    this.linkCollectionService.getLinkCollections()
      .subscribe(response=>{
        this.link_collections=response;
      })
  }
}
