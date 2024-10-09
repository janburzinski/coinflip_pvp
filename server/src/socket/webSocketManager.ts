import WebSocket from "ws";
import { Server } from "http";

interface Player {
  socket: WebSocket;
  id: string;
}

interface GameRoom {
  players: Player[];
  gameState: any;
}

class WebSocketManager {
  private webSocketServer: WebSocket.Server;
  private rooms: Map<string, GameRoom>;
  private waitingPlayer: Player | null;

  constructor(server: Server) {
    this.webSocketServer = new WebSocket.Server({ server });
    this.rooms = new Map();
    this.waitingPlayer = null;

    this.init();
  }

  private init(): void {
    this.webSocketServer.on("connection", (socket: WebSocket) => {});
  }
}
