import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public categorias = [
    {id: 1, nome: "Pizzas"},
    {id: 2, nome: "Burgers"},
    {id: 3, nome: "Salgados"},
    {id: 4, nome: "Cachorrão"},
    {id: 5, nome: "Sucos"}
  ]

  constructor() {}

}
