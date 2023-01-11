
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name:"vuela"
})
export class VuelaPipe implements PipeTransform{
  transform(value: boolean): string {
    //console.log(value);
    return (value) ? "vuela": "no vuela"

  //   if(value){
  //     return "Vuela"
  //   } else{
  //     return "No vuela"
  //   }
  }

}
