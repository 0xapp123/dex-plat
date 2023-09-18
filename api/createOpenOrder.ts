import {
    Keypair,
    PublicKey,
    ComputeBudgetProgram,
    SystemProgram,
    Transaction,
    Connection,
} from "@solana/web3.js";
import {
    AnchorProvider,
    BN,
    Program,
    Wallet,
    getProvider,
} from "@coral-xyz/anchor";
import { authority, programId, RPC } from "./utils";

// import { OpenBookV2Client } from '@openbook-dex/openbook-v2';
import NodeWallet from "@coral-xyz/anchor/dist/cjs/nodewallet";
import { OpenBookV2Client } from "../sdk";
export const createOpenOrder = async () => {
    const wallet = new NodeWallet(authority);
    const provider = new AnchorProvider(new Connection(RPC), wallet, {
        commitment: "confirmed",
    });
    const client = new OpenBookV2Client(programId, provider);



    const market = new PublicKey("4dxapcfjMeWrFWRAPQTgJ17oaBoFonZMxRy1W7aW2kJQ");
    const openOrdersIndexer = client.findOpenOrdersIndexer(market);
    const res = await client.getOpenOrdersIndexer(openOrdersIndexer);
    const number = res?.createdCounter;
    const accountIndex = new BN(number ? number : 0 + 1);

    const tx = await client.createOpenOrders(
        market,
        accountIndex,
        openOrdersIndexer
    );
    console.log("created open orders acc", tx);
}