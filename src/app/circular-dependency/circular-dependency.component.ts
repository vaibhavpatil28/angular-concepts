import { Component, OnInit } from '@angular/core';
import { AService } from './a.service';
import { BService } from './b.service';
import { CService } from './c.service';

@Component({
  selector: 'app-circular-dependency',
  templateUrl: './circular-dependency.component.html',
  styleUrls: ['./circular-dependency.component.scss'],
  providers:[AService,BService, CService]
})
export class CircularDependencyComponent implements OnInit {

  constructor(
    private AService: AService // To gererate Circular dependency see CService
    ) { }

  ngOnInit() {
  }

}
