import {User} from "../User";
import {AbstractTransaction} from "./AbstractTransaction";
import {Factory, Resource, Typed} from "composer-common";

export class Transfer extends AbstractTransaction {

    private from: User;
    private to: User;
    private readonly points: number;

    constructor(from: User, to: User, points: number) {
        super();
        this.from = from;
        this.to = to;
        this.points = points;
    }

    protected getTransactionName(): string {
        return "Transfer";
    }

    protected initializeTransaction(trans: Resource & Typed): void {
        let factory: Factory = this.getBusinessNetworkDefinition().getFactory();
        trans.setPropertyValue("from", this.from.toRelationShip(factory));
        trans.setPropertyValue("to", this.to.toRelationShip(factory));
        trans.setPropertyValue("points", this.points);
    }

}