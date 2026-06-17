export class Administrator {
  private _userId: number;
  private _email: string;
  private _firstName: string;
  private _lastName: string;
  private _roleId: number;
  private _roleName: string;

  constructor(userId: number, email: string, firstName: string, lastName: string, roleId: number, roleName: string) {
    this._userId = userId;
    this._email = email;
    this._firstName = firstName;
    this._lastName = lastName;
    this._roleId = roleId;
    this._roleName = roleName;
  }

  get id(): number {
    return this._userId;
  }

  get email(): string {
    return this._email;
  }

  get firstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }

  get fullName(): string {
    return `${this._firstName} ${this._lastName}`;
  }

  get roleId(): number {
    return this._roleId;
  }

  get roleName(): string {
    return this._roleName;
  }
}