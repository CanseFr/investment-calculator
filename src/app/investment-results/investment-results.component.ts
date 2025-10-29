import {Component, Input} from '@angular/core';
import {CurrencyPipe, formatCurrency} from "@angular/common";

export interface WaitingType {
  year: number,
  interest: number,
  valueEndOfYear: number,
  annualInvestment: number,
  totalInterest: number,
  totalAmountInvested: number
}

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  @Input() results?: WaitingType[]
  protected readonly formatCurrency = formatCurrency;
}
