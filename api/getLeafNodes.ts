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
    const bookSideAccount: BookSideAccount = await client.getBookSide(new PublicKey("4dxapcfjMeWrFWRAPQTgJ17oaBoFonZMxRy1W7aW2kJQ"));
    console.log("bookSideAccount", bookSideAccount)

    const leafNodes = client.getLeafNodes(bookSideAccount);
    console.log("leafNodes", leafNodes);
}
