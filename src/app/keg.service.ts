import { Injectable } from '@angular/core';
import { Keg } from './models/keg.model';
import { KEGS } from './mock-kegs';

@Injectable()
export class KegService {

  constructor() { }

  getKegs() {
    return KEGS;
  }
}
