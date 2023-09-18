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
// import { OpenBookV2Client, PlaceOrderArgs, Side } from "@openbook-dex/openbook-v2";
import NodeWallet from "@coral-xyz/anchor/dist/cjs/nodewallet";
import { OpenBookV2Client, PlaceOrderArgs, Side } from "../sdk";
export const postOrder = async () => {
    const wallet = new NodeWallet(authority);
    const provider = new AnchorProvider(new Connection(RPC), wallet, {
        commitment: "confirmed",
    });
    const client = new OpenBookV2Client(programId, provider);


    // const openOrdersIndexer = new PublicKey('9dYGLrjYirVfTLDtn5CbMy2HbmkySUXgTmkZKQ91CKse');



    const marketPublicKey = new PublicKey(
        "4dxapcfjMeWrFWRAPQTgJ17oaBoFonZMxRy1W7aW2kJQ"
    );

    const openOrdersIndexer = client.findOpenOrdersIndexer(marketPublicKey);

    const res = await client.getOpenOrdersIndexer(openOrdersIndexer);
    const number = res?.createdCounter;
    const accountIndex = new BN(number ? number : 0 + 1);

    const openOrdersPublicKey = client.findOpenOrders(marketPublicKey, accountIndex)


    const market = await client.getMarket(marketPublicKey);
    if (!market) {
        throw "No market";
    }

    console.log("market", market)

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

    // await mintUtils.mintTo(market?.quoteMint, userQuoteAcc.address);
    // await mintUtils.mintTo(market?.baseMint, userBaseAcc.address);

    console.log("userQuoteAcc:  ", userQuoteAcc.address.toBase58());
    console.log("userBaseAcc:  ", userBaseAcc.address.toBase58());

    const nbOrders: number = 1;
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

    // for (let i = 0; i < nbOrders; ++i) {
    //     let side = Side.Ask;
    //     let placeOrder = { limit: {} };
    //     let selfTradeBehavior = { decrementTake: {} };

    //     let args: PlaceOrderArgs = {
    //         side,
    //         priceLots: new BN(1000 + 1 + i),
    //         maxBaseLots: new BN(10000),
    //         maxQuoteLotsIncludingFees: new BN(1000000),
    //         clientOrderId: new BN(i + nbOrders + 1),
    //         orderType: placeOrder,
    //         expiryTimestamp: new BN(0),
    //         selfTradeBehavior: selfTradeBehavior,
    //         limit: 255,
    //     };
    //     const tx = await client.placeOrder(
    //         openOrdersPublicKey,
    //         marketPublicKey,
    //         market,
    //         userBaseAcc.address,
    //         null,
    //         args
    //     );
    //     console.log("Placed order ", tx);
    // }
}