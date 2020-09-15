import { Observable } from 'rxjs';
/*
  Create an observable that emits 'Hello' and 'World' on  
  subscription.
*/
const hello = Observable.create(function(observer:any) {
  observer.next('Hello');
  observer.next('World');
  observer.complete();
});


const subscribe = hello.subscribe(console.log);
