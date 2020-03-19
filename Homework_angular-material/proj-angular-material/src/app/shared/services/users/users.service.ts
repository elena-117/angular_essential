import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UsersResponseModel } from "../../models/user.response.model";
import { UserModel } from "../../models/user.model";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<UsersResponseModel> {
    return this.http.get<UsersResponseModel>("/users");
  }

  getCurrentUser(id: string): Observable<UsersResponseModel> {
    return this.http.get<UsersResponseModel>(`/users/${id}`);
  }

  editUser(id: string, formUpd: UserModel) {
    return this.http.patch<UsersResponseModel>(`/users/${id}`, formUpd);
  }

  deleteUser(id: string): Observable<UsersResponseModel> {
    return this.http.delete<UsersResponseModel>(`/users/${id}`);
  }
}
