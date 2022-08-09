import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'squareroot',
})
export class Squareroot implements PipeTransform {
    transform(val: number) {
        return Math.sqrt(val);
    }
}
