export class Device {
  private _id: number;
  private _siteId: number;
  private _siteName: string;
  private _siteDescription: string;
  private _name: string;
  private _status: string;
  private _mode: string;

  constructor(
    id: number,
    siteId: number,
    siteName: string,
    siteDescription: string,
    name: string,
    status: string,
    mode: string
  ) {
    this._id = id;
    this._siteId = siteId;
    this._siteName = siteName;
    this._siteDescription = siteDescription;
    this._name = name;
    this._status = status;
    this._mode = mode;
  }

  get id(): number {
    return this._id;
  }

  get siteId(): number {
    return this._siteId;
  }

  get siteName(): string {
    return this._siteName;
  }

  get siteDescription(): string {
    return this._siteDescription;
  }

  get name(): string {
    return this._name;
  }

  get status(): string {
    return this._status;
  }

  get mode(): string {
    return this._mode;
  }
}