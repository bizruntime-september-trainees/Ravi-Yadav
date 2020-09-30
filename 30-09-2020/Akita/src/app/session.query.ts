import { Query } from '@datorama/akita';
import { SessionState } from './session.store';
import { SessionStore } from './session.store';
  

export class SessionQuery extends Query<SessionState> {
  name:string;
  age:number;
  allState$ = this.select();
  isLoggedIn$ = this.select(state => !!state.token);
  selectName$ = this.select('name');

  // Returns { name, age }
  multiProps$ = this.select('name');

  // Returns [name, age]
  multiPropsCallback$ = this.select(
    [state => state.name, state => state.name]
  )
  
  constructor(protected store: SessionStore) {
    super(store);
  }
}