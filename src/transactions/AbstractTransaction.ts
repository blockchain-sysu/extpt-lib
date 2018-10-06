import {Transaction} from "../Transaction";
import {Typed, BusinessNetworkDefinition, Factory, Resource} from "composer-common";

export abstract class AbstractTransaction implements Transaction {

    public static readonly NAMESPACE: string = "com.github.blockchain_sysu.extpt";

    private bnd: BusinessNetworkDefinition | null = null;

    public toComposerResource(bnd: BusinessNetworkDefinition): Resource {
        this.bnd = bnd;
        const factory: Factory = bnd.getFactory();
        let trans: any = factory.newTransaction(AbstractTransaction.NAMESPACE,
            this.getTransactionName());
        this.initializeTransaction(trans);
        return trans;
    }

    protected getBusinessNetworkDefinition(): BusinessNetworkDefinition {
        if (this.bnd == null) {
            throw new Error("Impossible code path")
        } else {
            return this.bnd;
        }
    }


    protected abstract getTransactionName(): string;

    protected abstract initializeTransaction(trans: Resource & Typed): void;

}
