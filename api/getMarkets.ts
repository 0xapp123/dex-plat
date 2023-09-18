import { Connection, PublicKey } from "@solana/web3.js";

// import { findAllMarkets, OpenBookV2Client } from '@openbook-dex/openbook-v2';
import { RPC, authority, programId } from "./utils";
import NodeWallet from "@coral-xyz/anchor/dist/cjs/nodewallet";
import { AnchorProvider } from "@coral-xyz/anchor";
import { OpenBookV2Client, findAllMarkets } from "../sdk";
export const getMarkets = async () => {
    console.log("getMarkets")
    const wallet = new NodeWallet(authority);
    const connection = new Connection(RPC, "confirmed");
    const provider = new AnchorProvider(new Connection(RPC), wallet, {
        commitment: "confirmed",
    });
    const client = new OpenBookV2Client(programId, provider);


    let markets = await findAllMarkets(connection, programId, provider);

    console.log("markets", markets);
}