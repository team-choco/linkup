import {LinkCollection} from "../../../../link-collection/link-collection.types";
import {Member} from "../../../../member/member.types";

export interface Category{
  categoryId: number;
  categoryName:string;
  linkCollectionList: LinkCollection[];
  siteUser : Member;
}
