import {Member} from "../member/member.types";
import {Category} from "../layout/pages/menu/category/category.types";
import {Link} from "../link/link.types";

export interface LinkCollection{
  linkCollectionId: number;
  linkCollectionName: string;
  linkList: Link[];
  category: Category;
}
