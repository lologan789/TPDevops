import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component'; // Assurez-vous que le chemin est correct

const routes: Routes = [
  { path: '', redirectTo: '/chat', pathMatch: 'full' }, // Redirige par défaut vers le chat
  { path: 'chat', component: ChatComponent }, // Route pour le chat
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
