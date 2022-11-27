import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showDate'
})
export class ShowDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const dateTab = value.split(' ');
    let datePlForm = '';
    switch (dateTab[1]) {
      case '1': dateTab[1] = 'stycznia'; break;
      case '2': dateTab[1] = 'lutego'; break;
      case '3': dateTab[1] = 'marca'; break;
      case '4': dateTab[1] = 'kwietnia'; break;
      case '5': dateTab[1] = 'maja'; break;
      case '6': dateTab[1] = 'czerwca'; break;
      case '7': dateTab[1] = 'lipca'; break;
      case '8': dateTab[1] = 'sierpnia'; break;
      case '9': dateTab[1] = 'września'; break;
      case '10': dateTab[1] = 'października'; break;
      case '11': dateTab[1] = 'listopada'; break;
      case '12': dateTab[1] = 'grudnia'; break;
    }
    switch (dateTab[5]) {
      case 'Monday': dateTab[5] = 'poniedziałek'; break;
      case 'Tuesday': dateTab[5] = 'wtorek'; break;
      case 'Wednesday': dateTab[5] = 'środa'; break;
      case 'Thursday': dateTab[5] = 'czwartek'; break;
      case 'Friday': dateTab[5] = 'piątek'; break;
      case 'Saturday': dateTab[5] = 'sobota'; break;
      case 'Sunday': dateTab[5] = 'niedziala'; break;
    }
    datePlForm=dateTab[5]+", "+dateTab[0]+' '+dateTab[1]+' '+dateTab[2]+' '+dateTab[3]+":"+dateTab[4];
    return datePlForm;
  }
}
