import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { SocketService } from './services/socket.service';
import { FormsModule } from '@angular/forms'; // Import pour utiliser ngModel
import { RouterModule } from '@angular/router'; // Importer RouterModule ici
import { AppRoutingModule } from './app-routing.module'; // Assurez-vous que le chemin est correct

@NgModule({
  declarations: [AppComponent, ChatComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [SocketService],
  bootstrap: [AppComponent],
})
export class AppModule {}
