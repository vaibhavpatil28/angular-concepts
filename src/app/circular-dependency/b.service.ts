import { Injectable } from '@angular/core';
import { CService } from './c.service';

@Injectable()
export class BService {
  constructor(private CService: CService) { }
}
