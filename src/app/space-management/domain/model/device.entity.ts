export class Device {
  private _id: number;
  private _name: string;
  private _site: string;
  private _mode: string;
  private _status: string;

  constructor(id: number, name: string, site: string, mode: string, status: string) {
    this._id = id;
    this._name = name;
    this._site = site;
    this._mode = mode;
    this._status = status;
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get site(): string {
    return this._site;
  }

  get mode(): string {
    return this._mode;
  }

  get status(): string {
    return this._status;
  }
}
