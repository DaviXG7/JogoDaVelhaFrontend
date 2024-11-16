import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {TesteComponent} from './components/teste/teste.component';
import {NgModule} from '@angular/core';

export const routes: Routes = [
  {path: "", component: AppComponent},
  {path: "teste", component: TesteComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouter {

}
