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
import { OpenBookV2Client } from "../sdk";
import NodeWallet from "@coral-xyz/anchor/dist/cjs/nodewallet";
export const createOpenOrder = async () => {
    const wallet = new NodeWallet(authority);
    const provider = new AnchorProvider(new Connection(RPC), wallet, {
        commitment: "confirmed",
    });
    const client = new OpenBookV2Client(programId, provider);

    const market = new PublicKey("CwHc9CZ9UCZFayz4eBekuhhKsHapLDPYfX4tGFJrnTRt");
    const accountIndex = new BN(1);
    const openOrdersIndexer = new PublicKey("4LKowR6kLD266i3MSSegDabsbSzd3ybrL1qGF4cWREk1");

    const tx = await client.createOpenOrders(
        market,
        accountIndex,
        openOrdersIndexer
    );
    console.log("created open orders acc", tx);
}