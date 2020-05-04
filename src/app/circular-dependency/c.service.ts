import { Injectable } from '@angular/core';
import { AService } from './a.service';

@Injectable()
export class CService {

  constructor(
    // private AService: AService // commentout for gererate Circular dependency
    ) { }
}
