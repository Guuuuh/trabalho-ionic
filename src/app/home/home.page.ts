import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public aba = 1;

  public pathImgs = '../../assets/img/'

  public categorias = [
    {id: 1, nome: "Pizzas"},
    {id: 2, nome: "Burgers"},
    {id: 3, nome: "Salgados"},
    {id: 4, nome: "Cachorrão"},
    {id: 5, nome: "Sucos"}
  ]
  
  public pizzas = [

    {titulo: "4 queijos", descricao: "Uma pizza deliciosa com quatro tipos de queijos diferentes", valor: "50,00 reais", img: "4queijos.jpg"},
    {titulo: "Marguerita", descricao: "Uma pizza feita com o maior requinte culinário da Itália", valor: 40.00, img: "marguerita.webp"},
    {titulo: "Frango com Catupiry", descricao: "Uma tradicional mas que cai bem em todas as ocasiões e todo mundo ama", valor: 55.00, img: "frango.png"},

  ]

  public burguers = [

    {titulo: "X-burguer", descricao: "Um hamburguer com 150g de carne e queijo para dar sabor", valor: 40.00, img: "x-burguer.jpg"},
    {titulo: "X-bacon", descricao: "Um hamburguer com 150g de carne e queijo e bacon para quem curte", valor: 50.00, img: "X-Bacon.jpg"},
    {titulo: "X-salada", descricao: "Um hamburguer vegano para quem não é adepto à carne bovina", valor: 45.00, img: "xsalada.png"}

  ]

  public salgados = [

    {titulo: "Coxinha", descricao: "Feita para os amantes de coxinha", valor: 10.00, img: "Coxinha-de-Frango.jpg"},
    {titulo: "Esfiha", descricao: "Um salgado feito para todas as ocasiões", valor: 8.00, img: "esfiha.jpg"},
    {titulo: "Kibe", descricao: "Salgado frito no estilo árabe", valor: 11.00, img: "quibe.jpg"}
    
  ]

  public cachorrao = [

    {titulo: "Simples", descricao: "Um lanche simples para matar a fome no sábado a noite", valor: 11.00, img: "cachorrao-simples.jpg"},
    {titulo: "Duplo", descricao: "Um lanche simples para matar a fome por duas pessoas", valor: 15.00, img: "cachorrao-duplo.jpg"},
    {titulo: "Alcatra Acebolada", descricao: "Lanache top para quem quer degustar mais sabores", valor: 28.00, img: "cachorrao-alcatra.jpeg"}
    
  ]

  public sucos = [

    {titulo: "Uva", valor: 4.00, img: "suco-uva.jpeg"},
    {titulo: "Laranja", valor: 5.00, img: "suco-laranja.jpg"},
    {titulo: "Abacaxi", valor: 4.00, img: "suco-abacaxi.jpg"}
    
  ]

  public slideOpts = {
    slidesPerView: 2
  }

  constructor() {}

  public trocaAba(categoria: any){
    this.aba = categoria.id
  }
}
