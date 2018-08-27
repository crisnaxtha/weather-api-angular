import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonObjectToJsonArray'
})
export class JsonObjectToJsonArrayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let array = [];
    for(let key in value){
      array.push({code:key , countryName:value[key]})
    }
  }

}
