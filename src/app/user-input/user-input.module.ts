import {NgModule} from "@angular/core";
import {InvestmentResultsComponent} from "../investment-results/investment-results.component";
import {UserInputComponent} from "./user-input.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [UserInputComponent],
  imports: [FormsModule],
  exports: [UserInputComponent]
})
export class UserInputModule{

}
