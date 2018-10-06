import {BusinessNetworkDefinition, Resource} from "composer-common";

export interface Transaction {

    toComposerResource(bnd: BusinessNetworkDefinition): Resource;
}