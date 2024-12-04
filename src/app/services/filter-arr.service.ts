import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilterArrService {
  constructor() {}
  filtredArr<T extends Record<string, any>, k>(
    arr: T[],
    filter: string,
    value: k
  ) {
    return arr.filter((el) => el[filter] === value);
  }
}
