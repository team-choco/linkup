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
  constructor(
    private categoryService:CategoryService,
    private linkCollectionService:LinkCollectionService) {
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

  visible: boolean = false;

  delete(link_collection:LinkCollection): void {
    this.link_collections = this.link_collections.filter(h => h !== link_collection);
    this.categoryService.deleteLinkCollection(link_collection.linkCollectionId).subscribe();
  }

  change(value: boolean): void {
    console.log(value);
  }
}
