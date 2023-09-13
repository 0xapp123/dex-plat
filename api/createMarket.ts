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
import { OpenBookV2Client } from "../sdk";
import NodeWallet from "@coral-xyz/anchor/dist/cjs/nodewallet";


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
        "CEcLT3615yru4tLZfrPSQ9cJmYGtqtXMd25AjfnumPtQ"
    );
    const quoteMint = new PublicKey(
        "FLSJqDK2zGsA9r2qU6mUjJ1xq2eQXW8H2u8W2ekZ1T81"
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