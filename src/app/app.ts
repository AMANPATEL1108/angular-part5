import {
  Component,
  computed,
  effect,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'angular-part5';

  // count = signal(10);
  // x = 20;

  // constructor() {
  //   effect(() => {
  //     console.log('Count changed:', this.count());
  //     console.log('X changed:', this.count());
  //   })
  // }

  // updateValue() {
  //   this.x = this.x + 1;
  // }
  // updateValue(val: string) {
  //   if (val == 'inc') {
  //     this.count.set(this.count() + 1);
  //   } else if (val == 'dec') {
  //     if (this.count() > 0) {
  //       this.count.set(this.count() - 1);
  //     }
  //   }
  // }

  data: WritableSignal<number | string> = signal<number | string>(10);
  // count: Signal<number> = computed(() => 200);

  updateSignal() {
    // this.data.set('aman');
    // this.data.update((val) => val + 1); //multiple data type not use this
  }

  // computed SIgnlas

  x = signal(10);
  y = signal(20);

  z = computed(() => this.x() + this.y());

  showValue() {
    this.x.set(1000);
    console.log(this.z());
    console.log(this.z());
  }

  updateval() {
    this.x.set(1000);
  }

  updatedata() {
    this.x.set(500);
  }
}
