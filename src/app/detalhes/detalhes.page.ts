import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {

  public pathImgs = '../../assets/img/'

  public quantidade = 0;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
    this.produto = params['produto'];
    });
  }

  ngOnInit() {
  }

  public produto = {
    titulo: '', 
    descricao: '', 
    valor: '', 
    img: ''}
    

  public adicionar(){
    this.quantidade += 1;
  }

  public remover(){
    if(this.quantidade > 0){
      this.quantidade -= 1;
    }
  }
}
