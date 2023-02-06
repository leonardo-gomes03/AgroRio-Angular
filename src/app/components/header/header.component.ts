import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  headerItems: string[] = ['Produtos', 'Tratamentos', 'Injetaveis', 'Agricultura'];



}
