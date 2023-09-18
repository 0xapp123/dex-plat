import * as fs from "fs";

import {
    Connection,
    Keypair,
    PublicKey,
} from "@solana/web3.js";
import { AnchorProvider, BN, Program } from "@coral-xyz/anchor";
import { IDL, OpenbookV2 } from "@openbook-dex/openbook-v2";
import WalletSeed from "./id.json"
import NodeWallet from "@coral-xyz/anchor/dist/cjs/nodewallet";
import * as splToken from "@solana/spl-token";

export const RPC = "https://powerful-lingering-sea.solana-devnet.discover.quiknode.pro/14ae4c2cee1fe9b0b81ac65ec9e2e98c2f9dd3af/";

export const programId = new PublicKey(
    "opnbkNkqux64GppQhwbyEVc3axhssFhVYuwar8rDHCu"
);

export const authority = Keypair.fromSecretKey(Uint8Array.from(WalletSeed), { skipValidation: true })

// export const authority = getKeypairFromFile("./id.json");
export const connection = new Connection(RPC, {
    commitment: "finalized",
    confirmTransactionInitialTimeout: 30000,
});
const wallet = new NodeWallet(authority);
const newProvider = new AnchorProvider(connection, wallet, {});
export const program = new Program<OpenbookV2>(IDL, programId, newProvider);

// export function getKeypairFromFile(filePath: String): Keypair {
//     return Keypair.fromSecretKey(
//         Uint8Array.from(
//             JSON.parse(
//                 process.env.KEYPAIR || fs.readFileSync(filePath.toString(), "utf-8")
//             )
//         )
//     );
// }


export interface TokenData {
    mint: PublicKey;
    startingPrice: number;
    nbDecimals: number;
    priceOracle: Keypair | undefined;
}

export class MintUtils {
    private conn: Connection;
    private authority: Keypair;

    constructor(conn: Connection, authority: Keypair) {
        this.conn = conn;
        this.authority = authority;
    }

    async createMint(nb_decimals = 6): Promise<PublicKey> {
        const kp = Keypair.generate();
        return await splToken.createMint(
            this.conn,
            this.authority,
            this.authority.publicKey,
            this.authority.publicKey,
            nb_decimals,
            kp
        );
    }

    public async createMints(nbMints: number): Promise<PublicKey[]> {
        return await Promise.all(
            Array.from(Array(nbMints).keys()).map((_) => {
                return this.createMint();
            })
        );
    }

    public async createNewToken(nbDecimals = 6, startingPrice = 1_000_000) {
        const mint = await this.createMint(nbDecimals);
        const tokenData: TokenData = {
            mint: mint,
            startingPrice: startingPrice,
            nbDecimals: nbDecimals,
            priceOracle: undefined,
        };
        return tokenData;
    }

    public async createTokenAccount(
        mint: PublicKey,
        payer: Keypair,
        owner: PublicKey
    ) {
        const account = Keypair.generate();
        return splToken.createAccount(this.conn, payer, mint, owner, account);
    }

    public async getOrCreateTokenAccount(
        mint: PublicKey,
        payer: Keypair,
        owner: PublicKey
    ) {
        const account = Keypair.generate();
        return splToken.getOrCreateAssociatedTokenAccount(
            this.conn,
            payer,
            mint,
            owner,
            false
        );
    }

    public async mintTo(
        mint: PublicKey,
        tokenAccount: PublicKey,
    ) {
        await splToken.mintTo(
            this.conn,
            this.authority,
            mint,
            tokenAccount,
            this.authority,
            1000000000000
        );
    }
}
