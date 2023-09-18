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
    console.log(await client.getBookSide(new PublicKey("6vHugL4dXs95B9CcBKex68fV3B9hT5VkUNph9BRdKfb1")));
}