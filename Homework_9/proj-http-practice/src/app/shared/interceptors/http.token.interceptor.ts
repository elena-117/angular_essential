import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    let token = "RY6PLSkqFxlzfF5wSmLbtMiIs6EBzzZon4jt";

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: "Bearer " + token
        }
      });
    }
    const exp = /^(http:|https:)/;
    if (!exp.exec(request.url)) {
      const url = "https://gorest.co.in/public-api";

      request = request.clone({
        url: url + request.url
      });
    }
    return next.handle(request);
  }
}
