import {Component, OnInit} from '@angular/core';
import {LinkCollection} from "../../../../link-collection/link-collection.types";
import {LinkCollectionService} from "../../../../link-collection/link-collection.service";
import {Category} from "./category.types";
import {CategoryService} from "./category.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.less']
})
export class CategoryComponent implements OnInit{
  categories : Category[]=[];
  linkCollections : LinkCollection[]=[];
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
        this.linkCollections=response;
      })
  }

  visible: boolean = false;
  delete(linkCollection:LinkCollection): void {
    this.linkCollections = this.linkCollections.filter(h => h !== linkCollection);
    this.categoryService.deleteLinkCollection(linkCollection.linkCollectionId).subscribe();
  }

  change(value: boolean): void {
    console.log(value);
  }
}
