import {
    PublicKey,
    Connection,
} from "@solana/web3.js";
import {
    AnchorProvider,
} from "@coral-xyz/anchor";
import { authority, programId, RPC } from "./utils";


import NodeWallet from "@coral-xyz/anchor/dist/cjs/nodewallet";
import { OpenBookV2Client } from "../sdk";

export const getOpenOrders = async () => {
    const wallet = new NodeWallet(authority);
    const provider = new AnchorProvider(new Connection(RPC), wallet, {
        commitment: "confirmed",
    });
    const client = new OpenBookV2Client(programId, provider);

    const res = await client.getOpenOrders(
        new PublicKey("HQmoos88JU9GZdzYcUcv7b6cjvsYnw1U1zXCP2PZ2Fb3")
    );
    console.log(res);
}