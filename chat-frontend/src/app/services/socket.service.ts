import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket = io('http://localhost:3000'); // Remplace par l'URL de ton serveur si nécessaire
  public messages: Subject<string>;

  constructor() {
    this.messages = new Subject<string>();

    // Écouter les messages du serveur
    this.socket.on('message', (msg: string) => {
      this.messages.next(msg); // Émettre le message reçu
    });
  }

  public sendMessage(message: string): void {
    this.socket.emit('message', message); // Émettre un message au serveur
  }
}
