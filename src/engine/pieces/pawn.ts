import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public isItFirstMove(board: Board): boolean {
        if (this.player === Player.WHITE && board.findPiece(this).row == 1) {
            return true;
        }
        if (this.player === Player.BLACK && board.findPiece(this).row == 6) {
            return true;
        }
        return false;
    }
    public getAvailableMoves(board: Board) {
        if (this.player === Player.WHITE) {
            if (this.isItFirstMove(board)) {
                return [Square.at(board.findPiece(this).row + 1,board.findPiece(this).col),
                    Square.at(board.findPiece(this).row + 2,board.findPiece(this).col)]
            }
            return [Square.at(board.findPiece(this).row + 1,board.findPiece(this).col)];
        } else {
            if (this.isItFirstMove(board)) {
                return [Square.at(board.findPiece(this).row - 1,board.findPiece(this).col),
                    Square.at(board.findPiece(this).row - 2,board.findPiece(this).col)]
            }
            return [Square.at(board.findPiece(this).row - 1,board.findPiece(this).col)];
        }
    }
}
