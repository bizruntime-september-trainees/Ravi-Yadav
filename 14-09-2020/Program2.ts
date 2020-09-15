import { Observable } from 'rxjs';
 
const observable = new Observable(function subscribe(subscriber) {
  try {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.next("Hi!");
    subscriber.complete();
  } catch (err) {
    subscriber.error(err); // delivers an error if it caught one
  }
});
observable.subscribe({
    next(x) {console.log("Observer got Values : "+x);},
});
