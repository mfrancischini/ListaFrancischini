import { Component } from '@angular/core';
// Definición de la clase Alumno
export class Alumno {
   nombre: string;
   edad: number;
   matricula: string;
   status: string;

  constructor(nombre: string, edad: number, matricula: string, status: 'aprobado' | 'desaprobado') {
    this.nombre = nombre;
    this.edad = edad;
    this.matricula = matricula;
    this.status = status;
  }

  

}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Lista de Alumnos Curso Angular';

  mostrarListado = false;
  verAprobado = false;
  estaAprobado = true

  students: Alumno[] = [
    new Alumno("Juan", 20, "A12345", "aprobado"),
    new Alumno("Mariano", 20, "A12346", "aprobado"),
    new Alumno("Esteban", 20, "A12347", "desaprobado"),
    new Alumno("Melisa", 20, "A12348", "aprobado"),
    new Alumno("Virginia", 20, "A12455", "desaprobado"),
    new Alumno("Juana", 20, "A123235", "aprobado"),
    new Alumno("Lorenzo", 20, "A12345", "aprobado"),
    new Alumno("Lucia", 20, "A12785", "desaprobado"),
    new Alumno("Santino", 20, "A123895", "aprobado"),
    new Alumno("Ignacio", 20, "A12367", "desaprobado")
  ];
  // Método para filtrar estudiantes con estado "aprobado"
  getEstudiantesAprobados(): Alumno[] {
    return this.students.filter(alumno => alumno.status === 'aprobado');
  }
}
