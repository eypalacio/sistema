import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUser'
})
export class FilterUserPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(value: any, args?: any) {
    if (!value) return null;
    if(!args) return value
    args= args.toLowerCase()
    // debugger;
    return value.filter(function(item:any){
      return JSON.stringify(item).toLowerCase().includes(args)
    })
  }

}
