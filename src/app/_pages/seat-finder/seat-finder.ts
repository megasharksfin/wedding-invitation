import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface SeatColumn {
  kind: 'seats';
  seats: (number | null)[];
}

interface TableColumn {
  kind: 'table';
  tables: string[];
}

type ChartColumn = SeatColumn | TableColumn;

interface Zone {
  label: string;
  columns: ChartColumn[];
}

@Component({
  selector: 'app-seat-finder',
  imports: [],
  templateUrl: './seat-finder.html',
  styleUrl: './seat-finder.scss',
})
export class SeatFinder {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.mySeat = this.parseSeat(this.route.snapshot.params['id']);
  }

  name: string = sessionStorage.getItem('guestName') || 'Guest';

  /** Seat number taken from the guest id in the URL. */
  mySeat: number | null = null;

  terrace: Zone = {
    label: 'Greek Terrace',
    columns: [
      { kind: 'seats', seats: [null, 13, 11, 52, 2, 1, 39, 14, 44, 7] },
      { kind: 'table', tables: ['Baguio', 'Antipolo'] },
      { kind: 'seats', seats: [4, 8, 9, 6, 5, 42, 41, 26, 50, 47] },
      { kind: 'seats', seats: [16, 23, 24, 20, 28, 27, 3, 37, 38, 49] },
      { kind: 'table', tables: ['Bicol', 'Bukidnon'] },
      { kind: 'seats', seats: [21, 25, 17, 19, 18, 43, 45, 40, 36, 35] },
    ],
  };

  annex: Zone = {
    label: 'Greek Annex',
    columns: [
      { kind: 'seats', seats: [22, 15, 10, 53, 30, 33, 31] },
      { kind: 'table', tables: ['Palawan', 'Boracay'] },
      { kind: 'seats', seats: [12, 48, 51, 29, 32, 46, 34] },
    ],
  };

  isMine(seat: number | null): boolean {
    return seat !== null && seat === this.mySeat;
  }

  back(): void {
    const id = this.route.snapshot.params['id'];
    this.router.navigate([`/main/${id}`]);
  }

  private parseSeat(id: string | undefined): number | null {
    if (!id) {
      return null;
    }
    const digits = id.match(/\d+/);
    return digits ? Number(digits[0]) : null;
  }
}
