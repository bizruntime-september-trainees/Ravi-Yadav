import { from, Subject,ConnectableObservable } from 'rxjs';
import { multicast,  } from 'rxjs/operators';

const source = from([1, 2, 3]);
const subject = new Subject();
const multicasted = source.pipe(multicast(subject));


multicasted.subscribe({
    next: (v) => console.log(`observerA: ${v}`)
});
multicasted.subscribe({
    next: (v) => console.log(`observerB: ${v}`)
});


(multicasted as ConnectableObservable<number>).connect();
