import { Connection, PublicKey } from "@solana/web3.js";
import { findAllMarkets } from "../sdk";
import { RPC, programId } from "./utils";
export const getMarkets = async () => {
    console.log("getMarkets")
    const connection = new Connection(RPC, "confirmed");

    let markets = await findAllMarkets(connection, programId);

    console.log("markets", markets);
}