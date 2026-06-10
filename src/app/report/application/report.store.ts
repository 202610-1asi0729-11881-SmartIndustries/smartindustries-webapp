import {Injectable, signal} from '@angular/core';
import {ReportApi} from '../infrastructure/report-api';
import {AccessEvent} from '../domain/model/access-event.entity';
import {Alert} from '../domain/model/alert.entity';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Injectable({providedIn: 'root'})
export class ReportStore {
  private readonly accessEventsSignal = signal<AccessEvent[]>([]);
  readonly accessEvents = this.accessEventsSignal.asReadonly();

  private readonly alertsSignal = signal<Alert[]>([]);
  readonly alerts = this.alertsSignal.asReadonly();

  private readonly loadingSignal = signal<boolean>(false);
  readonly loading = this.loadingSignal.asReadonly();

  private readonly errorSignal = signal<string|null>(null);
  readonly error = this.errorSignal.asReadonly();

  constructor(private reportApi: ReportApi) {
    this.loadAccessEvents();
    this.loadAlerts();
  }

  private loadAccessEvents(): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.reportApi.getAccessEvents().pipe(takeUntilDestroyed()).subscribe({
      next: accessEvents => {
        this.accessEventsSignal.set(accessEvents);
        this.loadingSignal.set(false);
        this.errorSignal.set(null);
      },
      error: err => {
        this.errorSignal.set(this.formatError(err, 'Failed to load access events'));
        this.loadingSignal.set(false);
      }
    });
  }

  private loadAlerts(): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.reportApi.getAlerts().pipe(takeUntilDestroyed()).subscribe({
      next: alerts => {
        this.alertsSignal.set(alerts);
        this.loadingSignal.set(false);
        this.errorSignal.set(null);
      },
      error: err => {
        this.errorSignal.set(this.formatError(err, 'Failed to load alerts'));
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
