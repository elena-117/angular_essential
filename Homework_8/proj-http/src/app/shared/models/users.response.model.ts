import { UserModel } from "./user.model";

export interface UsersResponseModel {
  result: Array<UserModel>;
  _meta: {
    code: number;
    currentPage: number;
    message: string;
    pageCount: number;
    perPage: number;
    rateLimit: { limit: number; remaining: number; reset: number };
    success: boolean;
    totalCount: number;
  };
}
