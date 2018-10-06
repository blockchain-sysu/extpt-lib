import {suite, test} from "mocha-typescript";
import {expect} from "chai";
import {User, BusinessNetwork, TransactionFactory, Transaction} from "../src"

@suite
class IndexTest {
    @test sampleTest() {
        expect(1).to.equal(1);

        const network: BusinessNetwork = new BusinessNetwork("card0@sample");
        const from = new User("1", "Manager");
        const to = new User("2", "Middleman");
        const trans: Transaction = TransactionFactory.createTransfer(from, to, 5);
        network.submitTransaction(trans).then(() => {
                expect(true).to.equal(true);
                return network.disconnect();
            }
        ).catch(() => {
            expect(false).to.equal(true);
        });
    }
}