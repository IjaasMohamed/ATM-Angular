import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceComponent } from './balance/balance.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { DepositNotesComponent } from './deposit-notes/deposit-notes.component';
import { DepositCoinsComponent } from './deposit-coins/deposit-coins.component';

const routes: Routes = [
  {
    path: 'balance',
    component: BalanceComponent
  },
  {
    path:'deposit', component:DepositComponent,

    children: [
      {
        path:'notes',
        component:DepositNotesComponent
      },
      {
        path:'coins',
        component:DepositCoinsComponent
      }
    ]
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
