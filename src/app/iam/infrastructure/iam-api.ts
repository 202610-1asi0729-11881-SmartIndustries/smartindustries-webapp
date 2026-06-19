import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { UserAssembler } from './user-assembler';
import { User } from '../domain/model/user.entity';
import { AuthenticatedUser } from '../domain/model/authenticated-user.entity';
import { SignUpResource } from './sign-up-resource';
import { SignInResource } from './sign-in-resource';
import { UserResource } from './user-resource';
import { AuthenticatedUserResource } from './authenticated-user-resource';

@Injectable({ providedIn: 'root' })
export class IamApi {
  private readonly baseUrl: string;
  private readonly assembler: UserAssembler;

  constructor(private http: HttpClient) {
    this.baseUrl = `${environment.platformProviderApiBaseUrl}${environment.authenticationEndPointPath}`;
    this.assembler = new UserAssembler();
  }

  signUp(firstName: string, lastName: string, email: string, password: string): Observable<User> {
    const resource: SignUpResource = { firstName, lastName, email, password };
    return this.http
      .post<UserResource>(`${this.baseUrl}/sign-up`, resource)
      .pipe(map((res) => this.assembler.toUserFromResource(res)));
  }

  signIn(email: string, password: string): Observable<AuthenticatedUser> {
    const resource: SignInResource = { email, password };
    return this.http
      .post<AuthenticatedUserResource>(`${this.baseUrl}/sign-in`, resource)
      .pipe(map((res) => this.assembler.toAuthenticatedUserFromResource(res)));
  }
}
