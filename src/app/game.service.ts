import { Injectable } from '@angular/core';
import {Pawn} from './model/pawn';
import {Rook} from './model/rook';
import {Knight} from './model/knight';
import {King} from './model/king';
import {Bishop} from './model/bishop';
import {Queen} from './model/queen';
import {Piece} from './model/base-piece';


@Injectable({
  providedIn: 'root'
})
export class GameService {
  public BoardArray: Array<any>;

  constructor() {
    var Nb  = new Knight("knight", "black");
    var Rb = new Rook("rook", "black"); 
    var Kb = new King("king", "black");
    var Bb = new Bishop("bishop", "black");
    var Qb = new Queen("queen", "black");
    var Pb = new Pawn("pawn", "black");
    var Nw = new Knight("knight", "white");
    var Rw = new Rook("rook", "white"); 
    var Kw = new King("king", "white");
    var Bw = new Bishop("bishop", "white");
    var Qw = new Queen("queen", "white");
    var Pw = new Pawn("pawn", "white");

    this.BoardArray = [
      [{Rb}, {Nb}, {Bb}, {Qb}, {Kb}, {Bb}, {Nb}, {Rb}],
      [{Pb}, {Pb}, {Pb}, {Pb}, {Pb}, {Pb}, {Pb},{Pb}],
      [{},{}, {},{},{},{},{},{}],
      [{},{}, {},{},{},{},{},{}],
      [{},{}, {},{},{},{},{},{}],
      [{},{}, {},{},{},{},{},{}],
      [{Pw}, {Pw}, {Pw}, {Pw}, {Pw}, {Pw}, {Pw},{Pw}],
      [{Rw}, {Nw}, {Bw}, {Qw}, {Kw}, {Bw}, {Nw}, {Rw}]
      ];
   }
  
}