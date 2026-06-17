export class Person {
  private _id: number;
  private _organizationId: number;
  private _firstName: string;
  private _lastName: string;
  private _identityDocument: string;

  constructor(id: number, organizationId: number, firstName: string, lastName: string, identityDocument: string) {
    this._id = id;
    this._organizationId = organizationId;
    this._firstName = firstName;
    this._lastName = lastName;
    this._identityDocument = identityDocument;
  }

  get id(): number {
    return this._id;
  }

  get organizationId(): number {
    return this._organizationId;
  }

  get firstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }

  get identityDocument(): string {
    return this._identityDocument;
  }

  get fullName(): string {
    return `${this._firstName} ${this._lastName}`;
  }
}