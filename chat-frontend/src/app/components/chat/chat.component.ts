import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  message: string = '';  // Message que l'utilisateur écrit
  chatMessages: string[] = [];  // Tableau pour stocker les messages du chat

  constructor(private socketService: SocketService) {}

  ngOnInit(): void {
    // Écoute des messages du serveur
    this.socketService.messages.subscribe((msg: string) => {
      this.chatMessages.push(msg);
    });
  }

  sendMessage() {
    if (this.message.trim()) {
      // Ajouter le message de l'utilisateur à la liste des messages
      this.chatMessages.push(this.message);
      
      // Simuler une réponse du bot
      this.botReply(this.message);

      // Réinitialiser l'input
      this.message = '';
    }
  }

  botReply(userMessage: string) {
    // Logique simple pour générer une réponse du bot
    const botMessage = `Bot: Vous avez dit "${userMessage}".`;
    
    // Ajouter le message du bot à la liste des messages
    this.chatMessages.push(botMessage);
  }
}