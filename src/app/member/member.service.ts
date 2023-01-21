import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Member} from "./member.types";

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(
    private httpClient:HttpClient
  ) {
  }

  getMembers(): Observable<Member[]>{
    return this.httpClient.get<Member[]>("http://localhost:8080/users")
  }

  getMember(id:number):Observable<Member>{
    return this.httpClient.get<Member>(`http://localhost:8080/users/${id}`)
  }
}
