import { Component, OnDestroy, OnInit, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

interface CountdownUnit {
  label: string;
  current: string;
  previous: string;
}

@Component({
  selector: 'app-main-nav',
  imports: [],
  templateUrl: './main-nav.html',
  styleUrl: './main-nav.scss',
})
export class MainNav implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  name: string = sessionStorage.getItem('guestName') || 'Guest';

  private readonly platformId = inject(PLATFORM_ID);
  private readonly weddingDate = new Date(2026, 8, 21, 14, 0, 0);
  private timerId?: ReturnType<typeof setInterval>;

  readonly units = signal<CountdownUnit[]>(this.buildUnits(this.getCountdown()));

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.timerId = setInterval(() => this.tick(), 1000);
  }

  ngOnDestroy(): void {
    if (this.timerId) clearInterval(this.timerId);
  }

  private tick(): void {
    const next = this.buildUnits(this.getCountdown());

    this.units.update((previous) =>
      next.map((unit, i) => ({ ...unit, previous: previous[i].current })),
    );
  }

  private buildUnits(c: ReturnType<MainNav['getCountdown']>): CountdownUnit[] {
    return [
      { label: 'Days', current: this.pad(c.days), previous: this.pad(c.days) },
      { label: 'Hours', current: this.pad(c.hours), previous: this.pad(c.hours) },
      { label: 'Minutes', current: this.pad(c.minutes), previous: this.pad(c.minutes) },
      { label: 'Seconds', current: this.pad(c.seconds), previous: this.pad(c.seconds) },
    ];
  }

  private pad(value: number): string {
    return value.toString().padStart(2, '0');
  }

  private getCountdown() {
    const now = new Date();

    if (now >= this.weddingDate) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    let remainder = this.weddingDate.getTime() - now.getTime();

    const days = Math.floor(remainder / 86400000);
    remainder -= days * 86400000;
    const hours = Math.floor(remainder / 3600000);
    remainder -= hours * 3600000;
    const minutes = Math.floor(remainder / 60000);
    remainder -= minutes * 60000;
    const seconds = Math.floor(remainder / 1000);

    return { days, hours, minutes, seconds };
  }

  navigate(dest: string): void {
    const id = this.route.snapshot.params['id'];

    switch (dest) {
      case 'seat-finder':
        this.router.navigate([`/main/${id}/seat-finder`]);
        break;
      case 'details':
        this.router.navigate([`/main/${id}/menu/details`]);
        break;
      case 'faqs':
        this.router.navigate([`/main/${id}/menu/faqs`]);
        break;
      default:
        break;
    }
  }
}
