import {Member} from "../member/member.types";

export interface Link{
  id: number;
  link_title: string;
  link_content: string;
  link_address: string;
  site_user: Member;
}