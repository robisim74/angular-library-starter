import { Component, OnInit } from '@angular/core';
import { SumService } from '../services/sum.service';

@Component({
    selector: 'cmp-sum',
    templateUrl: './sum.component.html',
    styleUrls: ['./sum.component.scss']
})
export class SumComponent implements OnInit {

    sum: number;

    constructor(private sumService: SumService) { }

    ngOnInit(): void {
        this.sumService.calculate(45, 78, 90, 674);
        this.sum = this.sumService.sum;
    }

}
