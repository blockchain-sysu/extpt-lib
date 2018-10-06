import {Transaction} from "./Transaction";
import {Resource} from "composer-common";
import {BusinessNetworkConnection} from "composer-client";

export class BusinessNetwork {

    private connection: BusinessNetworkConnection = new BusinessNetworkConnection();
    private connected: boolean = false;

    public constructor(cardName: string) {
        this.connection.connect(cardName);
    }

    public submitTransaction(transaction: Transaction): Promise<void> {
        const transRes: Resource = transaction.toComposerResource(this.connection.getBusinessNetwork());
        return this.connection.submitTransaction(transRes);
    }

    public disconnect(): Promise<void> {
        this.connected = false;
        return this.connection.disconnect();
    }

    public isConnected(): boolean {
        return this.connected;
    }
}
