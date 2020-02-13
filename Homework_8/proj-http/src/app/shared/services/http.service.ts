import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UsersResponseModel } from "../models/users.response.model";
import { UserModel } from "../models/user.model";
import { UserUpdateModel } from "../models/user-update.model";

@Injectable()
export class HttpService {
  // private url = "http://localhost:4200/users";

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<UsersResponseModel> {
    return this.http.get<UsersResponseModel>("/users");
  }

  public setUsers(item: UsersResponseModel) {
    return this.http.post("/users", item);
  }

  public getCurrentUser(id: string): Observable<UsersResponseModel> {
    return this.http.get<UsersResponseModel>(`/users/${id}`);
  }

  public updateCurrentUser(id, formUpd: UserUpdateModel) {
    return this.http.patch<UsersResponseModel>(`/users/${id}`, formUpd);
  }

  public deleteCurrentUser(id: string): Observable<UsersResponseModel> {
    return this.http.delete<UsersResponseModel>(`/users/${id}`);
  }

  public getPhotos() {
    return this.http.get(`/photos`);
  }
}
