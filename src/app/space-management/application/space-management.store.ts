import {Injectable, signal} from '@angular/core';
import {SpaceManagementApi} from '../infrastructure/space-management-api';
import {Organization} from '../domain/model/organization.entity';
import {Site} from '../domain/model/site.entity';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Injectable({providedIn: 'root'})
export class SpaceManagementStore {

  private readonly organizationsSignal = signal<Organization[]>([]);
  readonly organizations = this.organizationsSignal.asReadonly();

  private readonly sitesSignal = signal<Site[]>([]);
  readonly sites = this.sitesSignal.asReadonly();

  private readonly loadingSignal = signal<boolean>(false);
  readonly loading = this.loadingSignal.asReadonly();

  private readonly errorSignal = signal<string|null>(null);

  constructor(private spaceManagementApi: SpaceManagementApi) {
    this.loadOrganizations();
    this.loadSites();
  }

  private loadOrganizations(): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.spaceManagementApi.getOrganizations().pipe(takeUntilDestroyed()).subscribe({
      next: organizations => {
        this.organizationsSignal.set(organizations);
        this.loadingSignal.set(false);
        this.errorSignal.set(null);
      },
      error: err => {
        this.errorSignal.set(this.formatError(err, 'Failed to load organizations'));
        this.loadingSignal.set(false);
      }
    });
  }

  private loadSites(): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.spaceManagementApi.getSites().pipe(takeUntilDestroyed()).subscribe({
      next: sites => {
        this.sitesSignal.set(sites);
        this.loadingSignal.set(false);
        this.errorSignal.set(null);
      },
      error: err => {
        this.errorSignal.set(this.formatError(err, 'Failed to load sites'));
        this.loadingSignal.set(false);
      }
    });
  }

  private formatError(error: any, fallback: string): string {
    if (error instanceof Error) {
      return error.message.includes('Resource not found') ? `${fallback}: Not found` : error.message;
    }
    return fallback;
  }
}
