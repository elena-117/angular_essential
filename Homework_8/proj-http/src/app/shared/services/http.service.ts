import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UsersResponseModel } from "../models/users.response.model";
import { UserModel } from "../models/user.model";

@Injectable()
export class HttpService {
  // private url = "http://localhost:4200/users";

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<UsersResponseModel> {
    return this.http.get<UsersResponseModel>("/users");
  }

  // public getUsers2(): Observable<UsersResponseModel> {
  //   let users = this.http.get(this.url).map(this.extractUsers);
  //   return users;
  // }

  // private extractUsers(response: Response) {
  //   let res = response.json();
  //   let users: UserModel[] = [];
  //   for (let i = 0; i < res.length; i++) {
  //     users.push(new UserModel(res[i].id, res[i].name))
  //   }
  // }

  public setUsers(item: UsersResponseModel) {
    return this.http.post("/users", item);
  }

  public getCurrentUser(id: string) {
    return this.http.get(`/users/${id}`);
  }

  public deleteCurrentUser(id: string) {
    return this.http.delete(`/users/${id}`);
  }
}
