import {Factory, Relationship} from "composer-common";

export type UserId = String;

type Role = "User" | "Middleman" | "Manager"

export class User {

    private readonly id: UserId;

    private readonly role: Role;

    public constructor(id: UserId, role: Role) {
        this.id = id;
        this.role = role;
    }

    public getId(): UserId {
        return this.id;
    }

    public getRole(): Role {
        return this.role;
    }

    public toRelationShip(factory: Factory): Relationship {
        return factory.newRelationship("com.github.blockchain_sysu.extpt",
            this.getRole(),
            this.getId());
    }
}