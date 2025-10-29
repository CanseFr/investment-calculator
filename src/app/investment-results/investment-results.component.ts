import {Component} from '@angular/core';
import {CurrencyPipe} from "@angular/common";
import {InvestmentService} from "./investment.service";

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
  constructor(private investmentService: InvestmentService) {
  }

  get results() {
    return this.investmentService.resultsData
  }
}
