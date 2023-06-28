import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        if (this.player === Player.WHITE) {
            return Square.at(board.findPiece(this).row + 1,board.findPiece(this).col);
        } else {
            return Square.at(board.findPiece(this).row - 1,board.findPiece(this).col);
        }
    }
}
