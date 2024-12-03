import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { StorageService } from '../../core/services/storage/storage.service';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [FormsModule, MatSelectModule, MatIconModule, MatButtonModule],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.scss'
})
export class ConverterComponent {

  // Tasas de cambio
  exchangeRates: any = {
    USD: 1,
    EUR: 0.9,
    GBP: 0.8
  };

  currencies: string[] = ['USD', 'EUR', 'GBP'];

  history: string[] = [];

  amount: number = 1;
  fromCurrency: string = 'USD';
  toCurrency: string = 'EUR';
  result: number = 0;

  constructor(private storageService: StorageService) {
    this.loadArray();
  }

// Método para convertir
  convert() {
    if (this.amount && this.fromCurrency && this.toCurrency) {
      let rateFrom = this.exchangeRates[this.fromCurrency];
      let rateTo = this.exchangeRates[this.toCurrency];
      console.log('rateFrom',rateFrom);
      console.log('rateTo',rateTo);
      // formula
      this.result = (this.amount / rateFrom) * rateTo;

      this.history.push(this.amount +' '+ this.fromCurrency+ ' = '+  this.result.toFixed(2)+' '+this.toCurrency);
      this.storageService.setArray('historyCurrency',this.history);
    }
  }


  // HOSTORY
  // Cargar un arreglo
  loadArray(): void {
    const myArray = this.storageService.getArray('historyCurrency');
    if(myArray.length === 0) {
      this.history = [];
      this.storageService.setArray('historyCurrency', []);
    } else {
      this.history = myArray;
    }
  }

  clearHistory() {
    localStorage.clear();
    this.loadArray();
  }


}
