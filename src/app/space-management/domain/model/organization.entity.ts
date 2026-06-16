export class Organization {
  private _id: number;
  private _name: string;
  private _ownerName: string;
  private _description: string;

  constructor(id: number, name: string, ownerName: string, description: string) {
    this._name = name;
    this._ownerName = ownerName;
    this._description = description;
    this._id = id;
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get ownerName(): string {
    return this._ownerName;
  }

  get description(): string {
    return this._description;
  }
}
