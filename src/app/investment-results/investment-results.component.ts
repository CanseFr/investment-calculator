import {Component, computed, inject} from '@angular/core';
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
  standalone: false,
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  // constructor(private investmentService: InvestmentService) {}
  private investmentService = inject(InvestmentService)

  // results = () => this.investmentService.resultsData.asReadonly()
  results = computed(() => this.investmentService.resultsData())

}
