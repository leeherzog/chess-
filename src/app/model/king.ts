import { Piece } from './base-piece';
import { GameService } from '../game.service';

export class King extends Piece {
    constructor(type, color) {
        super();
        this.type = type;
        this.color = color;
        this.b = 'https://cdn4.iconfinder.com/data/icons/chess-icons/200/chess_black_king-512.png';
        this.w = 'http://icons.iconarchive.com/icons/icons-land/vista-chess/128/King-Yellow-icon.png';
        this.imgUrl = this.color === 'white' ? this.imgUrl = this.w : this.imgUrl = this.b;
    }
}
