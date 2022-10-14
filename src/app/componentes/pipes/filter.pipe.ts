import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // transform(rows: any[], query: any): any {
  //   return query ? rows.filter(item => item.indexOf(query) >-1): rows;
  // }

  // transform(rows: any[], query: any): any {
  //   if (query == -1) return rows;
  //   return rows.filter(item => item.sistema.toLowerCase().indexOf(query.toLowerCase())>-1 || item.tipo.toLowerCase().indexOf(query.toLowerCase())>-1);
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
