import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreacirculoComponent } from './components/areacirculo/areacirculo.component';
import { AreatrianguloComponent } from './components/areatriangulo/areatriangulo.component';
import { ConversorgradosComponent } from './components/conversorgrados/conversorgrados.component';

const routes: Routes = [
  { path: 'areatriangulo', component: AreatrianguloComponent },
  { path: 'conversorgrados', component: ConversorgradosComponent },
  { path: 'areacirculo', component: AreacirculoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
