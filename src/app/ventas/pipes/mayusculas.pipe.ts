import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform{

    transform( nombre: string, enMayusculas: boolean = true ): string{
        return ( enMayusculas ) ? nombre.toUpperCase() : nombre.toLowerCase();
    }

}