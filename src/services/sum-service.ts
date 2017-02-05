import { Injectable } from '@angular/core';

@Injectable()
export class SumService {

    public sum: number;

    public calculate(...addends: number[]): void {
        this.sum = 0;
        for (let addend of addends) {
            this.sum += addend;
        }
    }

}
