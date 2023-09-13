interface OrderTableType {
    market: string,
    size: string,
    side: string,
    order_status: string,
    progress: string,
    price: string,
    order_type: string,
}

interface CommonTabType {
    text: string | undefined;
    active: boolean;
    onClick: () => void;
}

interface CommonTabDataType {
    text?: string | undefined;
    tag?: string;
}

interface HeaderType {
    text?: string;
}

type OrderbookData = {
    bids: cumOrderbookSide[]
    asks: cumOrderbookSide[]
    spread: number
    spreadPercentage: number
}


interface OrderbookL2 {
    bids: number[][]
    asks: number[][]
}