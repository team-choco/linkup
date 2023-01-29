import {LinkCollection} from "../link-collection/link-collection.types";
import {Member} from "../member/member.types";

export interface Category{
  categoryId: number;
  category_name:string;
  link_collection_list:LinkCollection[];
  siteUser : Member;
}
