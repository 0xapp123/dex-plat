import {
    PublicKey,
    Connection,
} from "@solana/web3.js";
import {
    AnchorProvider,

} from "@coral-xyz/anchor";

import NodeWallet from "@coral-xyz/anchor/dist/cjs/nodewallet";
import { RPC, authority, programId } from "../api/utils";
import { OpenBookV2Client } from "../sdk";

// import { OpenBookV2Client } from '@openbook-dex/openbook-v2';

export const getBookSide = async () => {
    console.log("getBookSide")
    const wallet = new NodeWallet(authority);
    const connection = new Connection(RPC);
    const provider = new AnchorProvider(new Connection(RPC), wallet, {
        commitment: "confirmed",
    });
    const client = new OpenBookV2Client(programId, provider);
    // const marketData = await client.getMarket(new PublicKey("4dxapcfjMeWrFWRAPQTgJ17oaBoFonZMxRy1W7aW2kJQ"));
    // console.log(marketData?.bids.toBase58())
    // console.log(marketData?.asks.toBase58())
    // if (marketData?.bids) console.log("Bids:  ", await client.getBookSide(marketData?.bids));
    // if (marketData?.asks) console.log("Asks:  ", await client.getBookSide(marketData?.asks));
}