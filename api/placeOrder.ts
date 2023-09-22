import {
    PublicKey,
    Connection,
    RpcResponseAndContext,
} from "@solana/web3.js";
import {
    AnchorProvider,
    BN
} from "@coral-xyz/anchor";

import NodeWallet from "@coral-xyz/anchor/dist/cjs/nodewallet";
import { RPC, authority, programId } from "../api/utils";
// import { OpenBookV2Client, PlaceOrderArgs, Side } from "@openbook-dex/openbook-v2";
import { ASSOCIATED_TOKEN_PROGRAM_ID, TOKEN_PROGRAM_ID, Token } from "@solana/spl-token";
import { getAssociatedTokenAccount } from "./tokenUtils";
import { OpenBookV2Client, PlaceOrderArgs, Side } from "../sdk";

export const placeOrder = async () => {
    console.log("getBookSide")
    const wallet = new NodeWallet(authority);
    const connection = new Connection(RPC);
    const provider = new AnchorProvider(new Connection(RPC), wallet, {
        commitment: "confirmed",
    });
    const client = new OpenBookV2Client(programId, provider);

    const userAddress = new PublicKey("Am9xhPPVCfDZFDabcGgmQ8GTMdsbqEt1qVXbyhTxybAp")
    const openOrdersPublicKey = new PublicKey("BDJEMbSq7qHeXiP8HJfSijE8KD1PkPSGygoVqFLsn4DY")
    const marketPublicKey = new PublicKey("6vHugL4dXs95B9CcBKex68fV3B9hT5VkUNph9BRdKfb1")
    const market = await client.getMarket(marketPublicKey)
    // ===
    const tokenAddress = new PublicKey("BDJEMbSq7qHeXiP8HJfSijE8KD1PkPSGygoVqFLsn4DY");

    const userTokenAccounts = await getAssociatedTokenAccount(userAddress, tokenAddress);

    console.log(userTokenAccounts.toBase58(), "----------------------------")
    const openOrdersAdmin = null;
    const args: PlaceOrderArgs = {
        side: Side.Bid,
        price: new BN(1000),
        size: new BN(10),
        clientId: new BN(12345),
    };

    // Optionally, specify an open orders delegate if needed
    // const openOrdersDelegate='0';

    if (market !== null) {
        // Place the order
        const txSignature = await client.placeOrder(
            openOrdersPublicKey,
            marketPublicKey,
            market,
            userTokenAccounts,
            openOrdersAdmin,
            args,
            // openOrdersDelegate
        );

        console.log("Order placed. Transaction signature:", txSignature);
    }
}