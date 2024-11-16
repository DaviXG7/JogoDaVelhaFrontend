import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DatePipe, DecimalPipe, LowerCasePipe, NgForOf, NgIf, TitleCasePipe, UpperCasePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-teste',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DatePipe,
    DecimalPipe,
    FormsModule
  ],
  templateUrl: './teste.component.html',
  styleUrl: './teste.component.css'
})
export class TesteComponent implements OnInit{
  @Input() atributo: string = "LEGAU"
  atributoPadrao: string = "É padrao"
  mostrando: boolean = true;
  @Output() changeNumber: EventEmitter<Number> = new EventEmitter();
  numero: number = 0;
  listaParaRenderizar = ["a", "b", "c", "d", "e", "f"];

  variavelQueMuda = 0;
  inputDoInput: string = ""


  onEvent() {
    this.numero++
    this.changeNumber.emit(this.numero);
  }

  mudarVariavel(): void {
    this.variavelQueMuda++;
  }

  ngOnInit(): void {
    setInterval(() => this.mudarVariavel(), 500);
  }

}
