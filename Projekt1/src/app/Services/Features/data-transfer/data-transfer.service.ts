import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { QueryInterface } from '../../../Interfaces/query.interface';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  
  private subject$ = new Subject<QueryInterface>();
  private currentPage$ = new BehaviorSubject<number>(1);

  constructor() { }

  getSubject() {
    return this.subject$;
  }

  getPage(){
    return this.currentPage$;
  }
}
