import {Injectable, signal} from '@angular/core';
import {AccessApi} from '../infrastructure/access-api';
import {AccessGroup} from '../domain/model/access-group.entity';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Injectable({providedIn: 'root'})
export class AccessStore {
  private readonly accessGroupsSignal = signal<AccessGroup[]>([]);
  readonly accessGroups = this.accessGroupsSignal.asReadonly();

  private readonly loadingSignal = signal<boolean>(false);
  readonly loading = this.loadingSignal.asReadonly();

  private readonly errorSignal = signal<string|null>(null);
  readonly error = this.errorSignal.asReadonly();

  constructor(private accessApi: AccessApi) {
    this.loadAccessGroups();
  }

  private loadAccessGroups(): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.accessApi.getAccessGroups().pipe(takeUntilDestroyed()).subscribe({
      next: accessGroups => {
        this.accessGroupsSignal.set(accessGroups);
        this.loadingSignal.set(false);
        this.errorSignal.set(null);
      },
      error: err => {
        this.errorSignal.set(this.formatError(err, 'Failed to load access groups'));
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
