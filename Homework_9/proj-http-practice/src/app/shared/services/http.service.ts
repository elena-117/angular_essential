import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UsersResponseModel } from "../models/user.response.model";
import { Observable } from "rxjs";
import { UserModel } from "../models/user.model";

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<UsersResponseModel> {
    return this.http.get<UsersResponseModel>("/users");
  }

  getUsersPage(pageNum: string): Observable<UsersResponseModel> {
    return this.http.get<UsersResponseModel>(pageNum);
  }

  getCurrentUser(id: string): Observable<UsersResponseModel> {
    return this.http.get<UsersResponseModel>(`/users/${id}`);
  }

  setUser(formUpd: UserModel) {
    return this.http.post("/users", formUpd);
  }

  editCurrentUser(id: string, formUpd: UserModel) {
    return this.http.patch<UsersResponseModel>(`/users/${id}`, formUpd);
  }

  deleteCurrentUser(id: string): Observable<UsersResponseModel> {
    return this.http.delete<UsersResponseModel>(`/users/${id}`);
  }
}
