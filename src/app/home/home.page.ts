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
  
  public pizzas = [

    {titulo: "4 queijos", descricao: "Uma pizza deliciosa com quatro tipos de queijos diferentes", valor: 50.00, img: ""},
    {titulo: "Marguerita", descricao: "Uma pizza feita com o maior requinte culinário da Itália", valor: 40.00, img: ""},
    {titulo: "Frango com Catupiry", descricao: "Uma tradicional mas que cai bem em todas as ocasiões e todo mundo ama", valor: 55.00, img: ""},

  ]

  public burguers = [

    {titulo: "X-burguer", descricao: "Um hamburguer com 150g de carne e queijo para dar sabor", valor: 40.00, img: ""},
    {titulo: "X-bacon", descricao: "Um hamburguer com 150g de carne e queijo e bacon para quem curte", valor: 50.00, img: ""},
    {titulo: "X-salada", descricao: "Um hamburguer vegano para quem não é adepto à carne bovina", valor: 45.00, img: ""}

  ]

  public salgados = [

    {titulo: "Coxinha", descricao: "Feita para os amantes de coxinha", valor: 10.00, img: ""},
    {titulo: "Esfiha", descricao: "Um salgado feito para todas as ocasiões", valor: 8.00, img: ""},
    {titulo: "Kibe", descricao: "Salgado frito no estilo árabe", valor: 11.00, img: ""}
    
  ]

  public cachorrao = [

    {titulo: "Simples", descricao: "Um lanche simples para matar a fome no sábado a noite", valor: 11.00, img: ""},
    {titulo: "Duplo", descricao: "Um lanche simples para matar a fome por duas pessoas", valor: 15.00, img: ""},
    {titulo: "Alcatra Acebolada", descricao: "Lanache top para quem quer degustar mais sabores", valor: 28.00, img: ""}
    
  ]

  public sucos = [

    {titulo: "Uva", valor: 4.00, img: ""},
    {titulo: "Laranja", valor: 5.00, img: ""},
    {titulo: "Abacaxi", valor: 4.00, img: ""}
    
  ]

  constructor() {}

}
