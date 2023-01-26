import {Member} from "../member/member.types";
import {Link} from "../link/link.types";

export interface LinkCollection{
  link_collection_id: number;
  link_collection_name: string;
  link_list: Link[];
  category: Member;
}
