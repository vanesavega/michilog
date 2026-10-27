import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { BotonTema } from '../../tema/boton-tema/boton-tema'

@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive, BotonTema],
  selector: 'app-shell',
  styleUrl: './shell.css',
  templateUrl: './shell.html',
})
export class Shell {

  menuAbierto = signal(false);


  toggleMenu(){
    this.menuAbierto.update(prev => !prev)
  }

  cerrarMenu(){
    this.menuAbierto.set(false)
  }
}
