import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const dot = /^\./;
    if (!dot.exec(request.url)) {
      // add authorization header with jwt token if available

      if (environment.apiToken) {
        request = request.clone({
          setHeaders: {
            Authorization: "Bearer " + environment.apiToken
          }
        });
      }
      const exp = /^(http:|https:)/;
      if (!exp.exec(request.url)) {
        request = request.clone({
          url: environment.apiUrl + request.url
        });
      }
      return next.handle(request);
    } else {
      return next.handle(request);
    }
  }
}
