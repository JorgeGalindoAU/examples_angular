import { Component, effect, signal } from '@angular/core';
import { GoBackButtonComponent } from "../../../components/go-back-button/go-back-button.component";
import { finalize, interval, Observable, Subscription, take, timeInterval } from 'rxjs';

@Component({
  selector: 'app-observable',
  imports: [GoBackButtonComponent],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css'
})
export class ObservableComponent {
  isLoading = signal(true);
  isFinished = signal(false);

  count = 0;

  constructor() {
    const myInterval: Observable<number> = interval(1000);
    const emitter: Subscription = myInterval
      .pipe(
        take(999),
        timeInterval(),
        finalize(() => {
          emitter.unsubscribe();
          this.isLoading.set(true);
          this.isFinished.set(true);
        }),
      )
      .subscribe(x => {
        this.count = x.value;
        this.isLoading.set(false);
      });
  }
}
