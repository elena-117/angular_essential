import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UsersResponseModel } from "../../models/user.response.model";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<UsersResponseModel> {
    return this.http.get<UsersResponseModel>("/users");
  }

  getCurrentUser(id): Observable<UsersResponseModel> {
    return this.http.get<UsersResponseModel>(`/users/${id}`);
  }
}
