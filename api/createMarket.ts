import {
    PublicKey,
    Connection,
} from "@solana/web3.js";
import {
    AnchorProvider,
    BN,
    Program,
    Wallet,
    getProvider,
} from "@coral-xyz/anchor";
import { authority, programId, RPC } from "./utils";

import NodeWallet from "@coral-xyz/anchor/dist/cjs/nodewallet";
import { OpenBookV2Client } from "../sdk";


export const createMarket = async () => {
    const wallet = new NodeWallet(authority);
    const connection = new Connection(RPC);
    const provider = new AnchorProvider(new Connection(RPC), wallet, {
        commitment: "confirmed",
    });
    const client = new OpenBookV2Client(programId, provider);

    console.log(
        "starting with balance: ",
        await provider.connection.getBalance(authority.publicKey)
    );

    const baseMint = new PublicKey(
        "A8XQEAB4BrrSWthUSQRFYVD6ujwHH57fSiMb9PvZYdT5"
    );
    const quoteMint = new PublicKey(
        "5ARDtw9P4cyrrf8PypPe9XFyq2o2inxobNaco88YeraB"
    );

    const oracleAId = null;
    const oracleBId = null;

    const name = "SOL-USDC";

    const tx = await client.createMarket(
        authority,
        name,
        quoteMint,
        baseMint,
        new BN(10),
        new BN(100),
        new BN(10),
        new BN(20),
        new BN(0),
        oracleAId,
        oracleBId,
        null,
        null,
        null
    );

    console.log("created market", tx);
    console.log(
        "finished with balance: ",
        await connection.getBalance(authority.publicKey)
    );
}