import { Component, OnInit } from '@angular/core';
interface AlumnosUtl{
  nombre:string;
  edad:number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{

 /* <li>Lucia - 22</li>
  <li>Leonardo - 21</li>
  <li>Diana - 21</li>*/

  alumnosUtl:AlumnosUtl[]=[
    {
      nombre:'Mario',
      edad:15,
  
    },
    {
      nombre:'Lucia',
      edad:15,
  
    },
    {
      nombre:'Leo Gei',
      edad:15,
  
    },
    {
      nombre:'Littzy',
      edad:15,
  
    },
    ]
regAlumno:AlumnosUtl={
  nombre:'',
  edad:0
}
agregar(){
  //console.log(this.alumnosUtl)
  this.alumnosUtl.push(this.regAlumno);
  this.regAlumno={
    nombre:'',
    edad:0
  }
}
 

}
