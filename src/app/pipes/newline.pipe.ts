import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'newline'
})
export class NewlinePipe implements PipeTransform {
    transform(value: string, num: number): string {
        let temp = '';
        let expression = '-'
        if (value.length > num) {
            for (let i = 0; i < value.length; i++) {
                if (i % num === 0 && i !== 1) {
                    expression = value[i] === ' ' ? '\n' : '-\n'
                    temp = value.substring(0, i) + expression + value.substring(i, value.length);
                }
            }
            return temp;
        }
        return value + '\n\n';
    }
}
