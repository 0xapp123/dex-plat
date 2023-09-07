import Link from "next/link";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import * as Icons from "../SVG/Icons";

const movementGraphData = [
  {
    name: "Page A",
    value: 1400,
  },
  {
    name: "Page B",
    value: 3000,
  },
  {
    name: "Page C",
    value: 1950,
  },
  {
    name: "Page B",
    value: 1900,
  },
  {
    name: "Page C",
    value: 3050,
  },
  {
    name: "Page C",
    value: 1200,
  },
  {
    name: "Page C",
    value: 1850,
  },
  {
    name: "Page D",
    value: 3000,
  },
  {
    name: "Page E",
    value: 1850,
  },
  {
    name: "Page F",
    value: 3000,
  },
  {
    name: "Page E",
    value: 4000,
  },
  {
    name: "Page F",
    value: 1240,
  },
  {
    name: "Page F",
    value: 2800,
  },
  {
    name: "Page F",
    value: 1400,
  },
  {
    name: "Page G",
    value: 2000,
  },
];

export const Data = {
  navibar: [
    {
      name: "trade",
      path: "/tokenomics",
      dot: false,
    },
    {
      name: "swap",
      path: "#",
      dot: true,
    },
    {
      name: "listings",
      path: "#",
      dot: false,
    },
    {
      name: "Leverage",
      path: "#",
      dot: false,
    },
    {
      name: "Buy $SOLAPE",
      path: "#",
      dot: false,
    },
  ],
  heroSectionChartData: [
    {
      name: "price 1",
      value: 722,
    },
    {
      name: "price 2",
      value: 330,
    },
    {
      name: "price 2",
      value: 1330,
    },
    {
      name: "price 2",
      value: 830,
    },
    {
      name: "price 2",
      value: 1430,
    },
    {
      name: "price 2",
      value: 2030,
    },
    {
      name: "price 2",
      value: 1470,
    },
    {
      name: "price 2",
      value: 1090,
    },
    {
      name: "price 2",
      value: 1890,
    },
    {
      name: "price 2",
      value: 1990,
    },
    {
      name: "price 2",
      value: 890,
    },
    {
      name: "price 2",
      value: 1090,
    },
    {
      name: "price 2",
      value: 1460,
    },
  ],
  solapeTokenButtonImage: [
    {
      name: "ftx",
      img: "assets/ftx.svg",
      width: 89,
      height: 28,
    },

    {
      name: "coinMarketCap",
      img: "assets/solana.svg",
      width: 146,
      height: 30,
    },
    {
      name: "fcoinGeckotx",
      img: "assets/coinGecko.svg",
      width: 108,
      height: 30,
    },
    {
      name: "coinMarketCap",
      img: "assets/coinMarketCap.svg",
      width: 146,
      height: 25,
    },
  ],
  solapeTokenChartData: [
    {
      name: "price 1",
      value: 722,
    },
    {
      name: "price 1",
      value: 1722,
    },
    {
      name: "price 2",
      value: 330,
    },
    {
      name: "price 2",
      value: 1330,
    },
    {
      name: "price 2",
      value: 830,
    },
    {
      name: "price 2",
      value: 1430,
    },
    {
      name: "price 2",
      value: 2030,
    },
    {
      name: "price 2",
      value: 1470,
    },
    {
      name: "price 2",
      value: 1090,
    },
    {
      name: "price 2",
      value: 1890,
    },
    {
      name: "price 2",
      value: 1990,
    },
    {
      name: "price 2",
      value: 890,
    },
    {
      name: "price 2",
      value: 1090,
    },
    {
      name: "price 2",
      value: 1460,
    },
  ],
  roadmapData: [
    {
      question: "Q2 2021",
      list: [
        "Dex launch",
        "$SOLAPE Token",
        "Mainnet",
        " Price API Integration",
        "Margin Trading (ApeXLeverage)",
        "Token data on CoinGecko, FTX, CoinMarketCap",
      ],
      current: false,
    },
    {
      question: "Q3 2021",
      list: [
        "DEX v2 Launch",
        "Swap App",
        "DEX Market orders",
        "NFT Storefront launched ",
        "Ecosystem buybacks",
      ],
      current: true,
    },
    {
      question: "Q4 2021",
      list: [
        "Token Minting",
        "PERP contracts",
        "NFT Marketplace",
        "Ecosystem buybacks ",
      ],
      current: false,
    },
    {
      question: "Q1 2021",
      list: ["Other dex tools: DCA", "Games", "Next NFT launch or NFT perks"],
      current: false,
    },
  ],
  servicesData: [
    {
      img: "/assets/apiAccess.svg",
      title: "API Access",
      des: " Looking to get access to our custom Solape API? Need a marke feed to implement into your up-and-coming DAPP?",
      btnText: "request access",
    },
    {
      img: "/assets/charting.svg",
      title: "charting",
      des: "Solape offers extensive charting tools on-site, as well as an external service for integration purposes.",
      btnText: "request access",
    },
    {
      img: "/assets/listing.svg",
      title: "listing",
      des: "Want us to list your project? Adding custom markets is allowed by default, but verified listings put you in a more prominent spot.",
      btnText: "submit request",
    },
  ],
  faqData: {
    rows: [
      {
        title:
          "Question one is amazingly hard, which is why we answer it well?",
        content: (
          <>
            I walked forty-seven miles of barbed wire, I got a cobra snake for a
            necktie, I got a brand new house by the road side, Made out of
            rattlesnake hide. I got me chimney made on top, made from a human
            skull, now come on, take a little walk with me. Now how{" "}
            <Link href="#" className="text-th-gradient-1 underline">
              {" "}
              do you love
            </Link>
            ? Come on Arlene, take me by hand, Let me know you understand. Who
            do you love? Ride nine times on the midnight train through{" "}
            <Link href="#" className="text-th-gradient-1 underline">
              {" "}
              the fire
            </Link>{" "}
            and cold rain who do you love I’ve got a tombstone hand in a
            graveyard mine, just twenty two and I don’t mind dying. Who do you
            love? Who do you love?
          </>
        ),
      },
      {
        title:
          "This is a 2 row example of a question. We should generally avoid these in the actual FAQ but I’m sure some will occur.",
        content: (
          <>
            I walked forty-seven miles of barbed wire, I got a cobra snake for a
            necktie, I got a brand new house by the road side, Made out of
            rattlesnake hide. I got me chimney made on top, made from a human
            skull, now come on, take a little walk with me. Now how{" "}
            <Link href="#" className="text-th-gradient-1 underline">
              {" "}
              do you love
            </Link>
            ? Come on Arlene, take me by hand, Let me know you understand. Who
            do you love? Ride nine times on the midnight train through{" "}
            <Link href="#" className="text-th-gradient-1 underline">
              {" "}
              the fire
            </Link>{" "}
            and cold rain who do you love I’ve got a tombstone hand in a
            graveyard mine, just twenty two and I don’t mind dying. Who do you
            love? Who do you love?
          </>
        ),
      },
      {
        title: "This is how it looks when the question is active?",
        content: (
          <>
            I walked forty-seven miles of barbed wire, I got a cobra snake for a
            necktie, I got a brand new house by the road side, Made out of
            rattlesnake hide. I got me chimney made on top, made from a human
            skull, now come on, take a little walk with me. Now how{" "}
            <Link href="#" className="text-th-gradient-1 underline">
              {" "}
              do you love
            </Link>
            ? Come on Arlene, take me by hand, Let me know you understand. Who
            do you love? Ride nine times on the midnight train through{" "}
            <Link href="#" className="text-th-gradient-1 underline">
              {" "}
              the fire
            </Link>{" "}
            and cold rain who do you love I’ve got a tombstone hand in a
            graveyard mine, just twenty two and I don’t mind dying. Who do you
            love? Who do you love?
          </>
        ),
      },
    ],
  },
  header2Data: [
    {
      name: "dex",
      path: "#",
      isNew: false,
    },
    {
      name: "swap",
      path: "#",
      isNew: false,
    },
    {
      name: "markets",
      path: "#",
      isNew: true,
    },
    {
      name: "token",
      path: "#",
      isNew: false,
    },
    {
      name: "airdrops",
      path: "#",
      isNew: false,
    },
    {
      name: "docs",
      path: "#",
      isNew: false,
    },
    {
      name: "buy $SOLAPE",
      path: "#",
      isNew: false,
    },
  ],
  tokenomicsButtonsData: [
    "/assets/solonaFm.svg",
    "/assets/coinGecko.svg",
    "/assets/coinMarketCap.svg",
    "/assets/solana.svg",
    "/assets/solscan.svg",
  ],
  tokenomicsGraphData: [
    {
      name: "Market (91.3%)",
      uv: 90,
    },
    {
      name: "Team (8.7%)",
      uv: 10,
    },
  ],
  tokenomicsSnippetsData: [
    {
      img: "/assets/supplyIcon.svg",
      value: "70.16%",
      imgeWidth: 30,
      imgeHeight: 40,
      text: "of initial supply (1B) burned",
    },
    {
      img: "/assets/burnIcon.svg",
      value: "$31.2M",
      imgeWidth: 43,
      imgeHeight: 45,
      text: "burned value (current prices)",
    },
    {
      img: "/assets/airDropIcon.svg",
      imgeWidth: 40,
      imgeHeight: 40,

      value: "$5,562.5",
      text: "OG airdrop value (current)",
    },
  ],
  marketsData: {
    tableColumn: [
      {
        colName: "",
        isExpandIcon: false,
        timeLabel: false,
        timeLabelValue: "",
      },
      {
        colName: "name",
        isExpandIcon: false,
        timeLabel: false,
        timeLabelValue: "",
      },
      {
        colName: "pair",
        isExpandIcon: false,
        timeLabel: false,
        timeLabelValue: "",
      },
      {
        colName: "price",
        isExpandIcon: false,
        timeLabel: false,
        timeLabelValue: "",
      },
      {
        colName: "delta",
        isExpandIcon: true,
        timeLabel: true,
        timeLabelValue: "24h",
      },
      {
        colName: "volume",
        isExpandIcon: true,
        timeLabel: true,
        timeLabelValue: "24h",
      },
      {
        colName: "market cap",
        isExpandIcon: true,
        timeLabel: false,
        timeLabelValue: "",
      },
      {
        colName: "movement",
        isExpandIcon: false,
        timeLabel: true,
        timeLabelValue: "7D",
      },
      {
        colName: "",
        isExpandIcon: false,
        timeLabel: false,
        timeLabelValue: "",
      },
    ],

    tableRows: [
      {
        name: {
          image: "/assets/apex.png",
          coinName: "ApeXit Finance",
          coinType: "APEX",
        },
        pair: "SOLAPE/USDC",
        price: "0.04240",
        delta: "12.5",
        volume: "2,240,844",
        marketCap: "26,424,888",
        movement: movementGraphData,
      },
      {
        name: {
          image: "/assets/bmbo.png",
          coinName: "Bamboo Coin",
          coinType: "ATLAS",
        },
        pair: "SOLAPE/USDC",
        price: "0.04240",
        delta: "4.5",
        volume: "2,240,844",
        marketCap: "26,424,888",
        movement: movementGraphData,
      },
      {
        name: {
          image: "/assets/cream.png",
          coinName: "Cream Finance",
          coinType: "CREAM",
        },
        pair: "CREAM/USDC",
        price: "0.04240",
        delta: "20.8",
        volume: "2,240,844",
        marketCap: "26,424,888",
        movement: movementGraphData,
      },
      {
        name: {
          image: "/assets/degn.png",
          coinName: "Degen Dex",
          coinType: "DEGN",
        },
        pair: "DEGN/USDC",
        price: "0.04240",
        delta: "10.0",
        volume: "2,240,844",
        marketCap: "26,424,888",
        movement: movementGraphData,
      },
      {
        name: {
          image: "/assets/eth.png",
          coinName: "Ethereum",
          coinType: "ETH",
        },
        pair: "FAB/USDC",
        price: "0.04240",
        delta: "9.4",
        volume: "2,240,844",
        marketCap: "26,424,888",
        movement: movementGraphData,
      },
      {
        name: {
          image: "/assets/fab.png",
          coinName: "Fabric",
          coinType: "FAB",
        },
        pair: "CREAM/USDC",
        price: "0.04240",
        delta: "20.8",
        volume: "2,240,844",
        marketCap: "26,424,888",
        movement: movementGraphData,
      },
      {
        name: {
          image: "/assets/eth.png",
          coinName: "Ethereum",
          coinType: "ETH",
        },
        pair: "FAB/USDC",
        price: "0.04240",
        delta: "9.4",
        volume: "2,240,844",
        marketCap: "26,424,888",
        movement: movementGraphData,
      },
      {
        name: {
          image: "/assets/fab.png",
          coinName: "Fabric",
          coinType: "FAB",
        },
        pair: "CREAM/USDC",
        price: "0.04240",
        delta: "20.8",
        volume: "2,240,844",
        marketCap: "26,424,888",
        movement: movementGraphData,
      },
      {
        name: {
          image: "/assets/atlas.png",
          coinName: "ApeXit Finance",
          coinType: "APEX",
        },
        pair: "SOLAPE/USDC",
        price: "0.04240",
        delta: "12.5",
        volume: "2,240,844",
        marketCap: "26,424,888",
        movement: movementGraphData,
      },
      {
        name: {
          image: "/assets/bmbo.png",
          coinName: "Bamboo Coin",
          coinType: "ATLAS",
        },
        pair: "SOLAPE/USDC",
        price: "0.04240",
        delta: "4.5",
        volume: "2,240,844",
        marketCap: "26,424,888",
        movement: movementGraphData,
      },
      {
        name: {
          image: "/assets/ftx.png",
          coinName: "FTX Token",
          coinType: "FTT",
        },
        pair: "CREAM/USDC",
        price: "0.04240",
        delta: "20.8",
        volume: "2,240,844",
        marketCap: "26,424,888",
        movement: movementGraphData,
      },
      {
        name: {
          image: "/assets/eth.png",
          coinName: "Ethereum",
          coinType: "ETH",
        },
        pair: "FAB/USDC",
        price: "0.04240",
        delta: "9.4",
        volume: "2,240,844",
        marketCap: "26,424,888",
        movement: movementGraphData,
      },
      {
        name: {
          image: "/assets/front.png",
          coinName: "Frontier",
          coinType: "FRONT",
        },
        pair: "CREAM/USDC",
        price: "0.04240",
        delta: "20.8",
        volume: "2,240,844",
        marketCap: "26,424,888",
        movement: movementGraphData,
      },
      {
        name: {
          image: "/assets/eth.png",
          coinName: "Ethereum",
          coinType: "ETH",
        },
        pair: "FAB/USDC",
        price: "0.04240",
        delta: "9.4",
        volume: "2,240,844",
        marketCap: "26,424,888",
        movement: movementGraphData,
      },
    ],
  },
  dexData: {
    socialIcons: [
      <AiOutlineTwitter className="text-[16px] text-black" />,
      <FaTelegramPlane className="text-[16px] text-black" />,
      <BsDiscord className="text-[16px] text-black" />,
    ],
    recentTradesData: [
      {
        price: "800,000.0000",
        size: "1,425,249.5524",
        tx: <Icons.Link />,
        time: "22:01:44",
      },
      {
        price: "20,000.0000",
        size: "700,249.5524",
        tx: <Icons.Link />,
        time: "22:01:43",
      },
      {
        price: "17,875.0000",
        size: "100,000.0055",
        tx: <Icons.Link />,
        time: "22:01:42",
      },
      {
        price: "5,000.0022",
        size: "100,000.0000",
        tx: <Icons.Link />,
        time: "22:01:41",
      },
      {
        price: "2,000.0000",
        size: "54,645.5500",
        tx: <Icons.Link />,
        time: "22:01:40",
      },
      {
        price: "572.4244",
        size: "32,444.0000",
        tx: <Icons.Link />,
        time: "22:01:33",
      },
      {
        price: "100.0000",
        size: "16,000.0000",
        tx: <Icons.Link />,
        time: "22:01:31",
      },
      {
        price: "20.0000",
        size: "8,000.0000",
        tx: <Icons.Link />,
        time: "22:01:29",
      },
      {
        price: "572.4244",
        size: "32,444.0000",
        tx: <Icons.Link />,
        time: "22:01:25",
      },
      {
        price: "100.0000",
        size: "16,000.0000",
        tx: <Icons.Link />,
        time: "22:01:31",
      },
      {
        price: "100.0000",
        size: "16,000.0000",
        tx: <Icons.Link />,
        time: "22:01:31",
      },
      {
        price: "20.0000",
        size: "8,000.0000",
        tx: <Icons.Link />,
        time: "22:01:29",
      },
      {
        price: "572.4244",
        size: "32,444.0000",
        tx: <Icons.Link />,
        time: "22:01:25",
      },
      {
        price: "100.0000",
        size: "16,000.0000",
        tx: <Icons.Link />,
        time: "22:01:31",
      },
      {
        price: "20,000.0000",
        size: "700,249.5524",
        tx: <Icons.Link />,
        time: "22:01:43",
      },
      {
        price: "17,875.0000",
        size: "100,000.0055",
        tx: <Icons.Link />,
        time: "22:01:42",
      },
      {
        price: "5,000.0022",
        size: "100,000.0000",
        tx: <Icons.Link />,
        time: "22:01:41",
      },
      {
        price: "2,000.0000",
        size: "54,645.5500",
        tx: <Icons.Link />,
        time: "22:01:40",
      },
    ],
  },
};
