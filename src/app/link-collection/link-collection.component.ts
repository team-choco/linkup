import {Component, OnInit} from '@angular/core';
import {LinkCollectionService} from "./link-collection.service";
import {LinkCollection} from "./link-collection.types";
import {LinkService} from "../link/link.service";
import {Link} from "../link/link.types";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-link-collection',
  templateUrl: './link-collection.component.html',
  styleUrls: ['./link-collection.component.less']
})
export class LinkCollectionComponent{
  links: Link[] = [];
  linkCollection: LinkCollection | undefined;

  title?: string;
  address?: string;
  content?:string;

  constructor(
    private linkCollectionService : LinkCollectionService,
    private linkService : LinkService,
    private route: ActivatedRoute,
  ) {
    this.route.params.subscribe(params => {
      this.linkCollectionService.getLinkCollection(+params['linkCollectionId'])
        .subscribe(response => {
          this.linkCollection = response;
        })
    });
  }

  isVisible = false;
  isOkLoading = false;

  showModal(): void {
    this.isVisible = true;
  }

  create(linkTitle: string, linkAddress: string, linkContent: string): void {
    linkTitle = linkTitle.trim();
    linkAddress = linkAddress.trim();
    linkContent = linkContent.trim();
    if (!linkTitle || !linkAddress ) { return; }
    this.linkService.createLink({ linkTitle, linkAddress, linkContent } as Link)
      .subscribe(link => {
        this.links.push(link);
      });
  }

  handleOk(): void {
    this.isVisible = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 1000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  delete(link: Link): void {
    this.links = this.links.filter(h => h !== link);
    this.linkService.deleteLink(link.linkId).subscribe();
  }

}
