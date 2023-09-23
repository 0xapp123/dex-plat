import {
    PublicKey,
    Connection,
} from "@solana/web3.js";
import {
    AnchorProvider,

} from "@coral-xyz/anchor";

import NodeWallet from "@coral-xyz/anchor/dist/cjs/nodewallet";
import { RPC, authority, programId } from "../api/utils";
import { BookSideAccount, OpenBookV2Client } from "../sdk";
// import { BookSideAccount, OpenBookV2Client } from "@openbook-dex/openbook-v2";

export const getLeafNodes = async () => {
    console.log("getBookSide")
    const wallet = new NodeWallet(authority);
    const connection = new Connection(RPC);
    const provider = new AnchorProvider(new Connection(RPC), wallet, {
        commitment: "confirmed",
    });
    const client = new OpenBookV2Client(programId, provider);
    const marketData = await client.getMarket(new PublicKey("4dxapcfjMeWrFWRAPQTgJ17oaBoFonZMxRy1W7aW2kJQ"));

    if (!marketData?.bids || !marketData.asks) return;

    const bidsAcc: BookSideAccount | null  = await client.getBookSide(marketData?.bids);
    const asksAcc: BookSideAccount | null  = await client.getBookSide(marketData?.asks);
    console.log("BidBookSideAccount", bidsAcc)
    console.log("AskBbookSideAccount", asksAcc)

    if (!bidsAcc || !asksAcc) return;
    const bidLeafNodes = client.getLeafNodes(bidsAcc);
    const askLeafNodes = client.getLeafNodes(asksAcc);
    console.log("BidLeafNodes", bidLeafNodes);
    console.log("AskLeafNodes", askLeafNodes);
}
