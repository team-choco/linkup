import {Component, OnInit} from '@angular/core';
import {LinkService} from "./link.service";
import {Link} from "./link.types";
@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.less'],
})

export class LinkComponent implements OnInit {
  links: Link[] = [];

  title?: string;
  address?: string;
  content?:string;

  constructor(
    private linkService: LinkService) {
  }

  ngOnInit(): void {
    this.linkService.getLinks()
      .subscribe(response => {
        this.links = response;
      })
  }

  isVisible = false;
  isOkLoading = false;

  showModal(): void {
    this.isVisible = true;
  }

  create(link_title: string, link_address: string, link_content: string): void {
    link_title = link_title.trim();
    link_address = link_address.trim();
    link_content = link_content.trim();
    if (!link_title || !link_address ) { return; }
    this.linkService.createLink({ link_title, link_address, link_content } as Link)
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
    this.linkService.deleteLink(link.link_id).subscribe();
  }

}
