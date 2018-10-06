import {Transaction} from "./Transaction";
import {User} from "./User";
import {Transfer} from "./transactions/Transfer";

export class TransactionFactory {

    public static createTransfer(from: User, to: User, points: number): Transaction {
        return new Transfer(from, to, points)
    }
}