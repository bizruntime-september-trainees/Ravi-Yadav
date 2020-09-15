import {Observable} from 'rxjs';
import { pipe } from 'rxjs';
import {of} from 'rxjs';
import {first} from 'rxjs/operators';
import { filter, map } from 'rxjs/operators';


of(1, 2, 3, 4,)
.pipe(map((v)=> v *10))
.subscribe(console.log);

of(1, 2, 3).pipe(map((x)=> x * x)).subscribe(console.log);
of(1, 2, 3).pipe(first()).subscribe(console.log);
