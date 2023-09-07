import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceComponent } from './balance/balance.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';

const routes: Routes = [
  {
    path: 'balance',
    component: BalanceComponent
  },
  {
    path:'deposit', component:DepositComponent
  },
  {
    path:'withdraw',
    component:WithdrawComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
