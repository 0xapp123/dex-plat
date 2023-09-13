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
import { authority, MintUtils, programId, RPC } from "./utils";
import { OpenBookV2Client, PlaceOrderArgs, Side } from "../sdk";
import NodeWallet from "@coral-xyz/anchor/dist/cjs/nodewallet";
export const postOrder = async () => {
    const wallet = new NodeWallet(authority);
    const provider = new AnchorProvider(new Connection(RPC), wallet, {
        commitment: "confirmed",
    });
    const client = new OpenBookV2Client(programId, provider);

    const openOrdersPublicKey = new PublicKey(
        "4LKowR6kLD266i3MSSegDabsbSzd3ybrL1qGF4cWREk1"
    );
    const marketPublicKey = new PublicKey(
        "CwHc9CZ9UCZFayz4eBekuhhKsHapLDPYfX4tGFJrnTRt"
    );
    const market = await client.getMarket(marketPublicKey);
    if (!market) {
        throw "No market";
    }

    let mintUtils = new MintUtils(provider.connection, authority);
    const userQuoteAcc = await mintUtils.getOrCreateTokenAccount(
        market?.quoteMint,
        authority,
        client.walletPk
    );
    const userBaseAcc = await mintUtils.getOrCreateTokenAccount(
        market?.baseMint,
        authority,
        client.walletPk
    );
    mintUtils.mintTo(market?.quoteMint, userQuoteAcc.address);
    mintUtils.mintTo(market?.baseMint, userBaseAcc.address);

    const nbOrders: number = 10;
    for (let i = 0; i < nbOrders; ++i) {
        let side = Side.Bid;
        let placeOrder = { limit: {} };
        let selfTradeBehavior = { decrementTake: {} };

        let args: PlaceOrderArgs = {
            side,
            priceLots: new BN(1000 - 1 - i),
            maxBaseLots: new BN(10),
            maxQuoteLotsIncludingFees: new BN(1000000),
            clientOrderId: new BN(i),
            orderType: placeOrder,
            expiryTimestamp: new BN(0),
            selfTradeBehavior: selfTradeBehavior,
            limit: 255,
        };

        const tx = await client.placeOrder(
            openOrdersPublicKey,
            marketPublicKey,
            market,
            userQuoteAcc.address,
            null,
            args
        );
        console.log("Placed order ", tx);
    }

    for (let i = 0; i < nbOrders; ++i) {
        let side = Side.Ask;
        let placeOrder = { limit: {} };
        let selfTradeBehavior = { decrementTake: {} };

        let args: PlaceOrderArgs = {
            side,
            priceLots: new BN(1000 + 1 + i),
            maxBaseLots: new BN(10000),
            maxQuoteLotsIncludingFees: new BN(1000000),
            clientOrderId: new BN(i + nbOrders + 1),
            orderType: placeOrder,
            expiryTimestamp: new BN(0),
            selfTradeBehavior: selfTradeBehavior,
            limit: 255,
        };
        const tx = await client.placeOrder(
            openOrdersPublicKey,
            marketPublicKey,
            market,
            userBaseAcc.address,
            null,
            args
        );
        console.log("Placed order ", tx);
    }
}