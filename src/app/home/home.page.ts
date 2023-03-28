import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

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

    {titulo: "4 Queijos", descricao: "Uma pizza deliciosa com quatro tipos de queijos diferentes.", valor: "50,00 Reais", img: "4queijos.jpg"},
    {titulo: "Marguerita", descricao: "Uma pizza feita com o maior requinte culinário da Itália.", valor: "40,00 Reais", img: "marguerita.webp"},
    {titulo: "Frango com Catupiry", descricao: "Uma tradicional mas que cai bem em todas as ocasiões e todo mundo ama.", valor: "55.00 Reais", img: "frango.png"},

  ]

  public burguers = [

    {titulo: "X-Burguer", descricao: "Um hamburguer com 150g de carne e queijo para dar sabor.", valor: "40.00 Reais", img: "x-burguer.jpg"},
    {titulo: "X-Bacon", descricao: "Um hamburguer com 150g de carne e queijo e bacon para quem curte.", valor: "50.00 Reais", img: "X-Bacon.jpg"},
    {titulo: "X-Salada", descricao: "Um hamburguer vegano para quem não é adepto à carne bovina.", valor: "45.00 Reais", img: "xsalada.png"}

  ]

  public salgados = [

    {titulo: "Coxinha", descricao: "Feita para os amantes de coxinha.", valor: "10.00 Reais", img: "Coxinha-de-Frango.jpg"},
    {titulo: "Esfiha", descricao: "Um salgado feito para todas as ocasiões.", valor: "8.00 Reais", img: "esfiha.jpg"},
    {titulo: "Kibe", descricao: "Salgado frito no estilo árabe.", valor: "11.00 Reais", img: "quibe.jpg"}
    
  ]

  public lanches = [

    {titulo: "Simples", descricao: "Um lanche simples para matar a fome no sábado a noite.", valor: "11.00 Reais", img: "cachorrao-simples.jpg"},
    {titulo: "Duplo", descricao: "Um lanche simples para matar a fome por duas pessoas.", valor: "15.00 Reais", img: "cachorrao-duplo.jpg"},
    {titulo: "Alcatra Acebolada", descricao: "Lanache top para quem quer degustar mais sabores.", valor: "28.00 Reais", img: "cachorrao-alcatra.jpeg"}
    
  ]

  public sucos = [

    {titulo: "Uva", valor: "4.00 Reais", img: "suco-uva.jpg"},
    {titulo: "Laranja", valor: "5.00 Reais", img: "suco-laranja.jpg"},
    {titulo: "Abacaxi", valor: "4.00 Reais", img: "suco-abacaxi.jpg"}
    
  ]

  public slideOpts = {
    slidesPerView: 2
  }

  constructor(private navCtrl: NavController) {
  }

  public trocaAba(categoria: any){
    this.aba = categoria.id
  }

  public trocaPaginaPizza(pizza: any) {
    this.navCtrl.navigateForward('detalhes', {
      queryParams: { produto: pizza }
    });
  }

  public trocaPaginaBurguer(burguer: any) {
    this.navCtrl.navigateForward('detalhes', {
      queryParams: { produto: burguer }
    });
  }

  public trocaPaginaSalgado(salgado: any) {
    this.navCtrl.navigateForward('detalhes', {
      queryParams: { produto: salgado }
    });
  }

  public trocaPaginaLanche(lanche: any) {
    this.navCtrl.navigateForward('detalhes', {
      queryParams: { produto: lanche }
    });
  }

  public trocaPaginaSuco(suco: any) {
    this.navCtrl.navigateForward('detalhes', {
      queryParams: { produto: suco }
    });
  }
}
