import {
  FC,
  ReactNode,
  // useEffect,
  // useState,
} from "react";
// import { useSerumMarkets } from "../../hooks/useSerumMarkets";
// import { serumMarketFilter } from "../../utils/filters";
import { HeaderLayout } from "./HeaderLayout";

type SearchLayoutProps = {
  title?: string;
  children: ReactNode;
};

export const SearchLayout: FC<SearchLayoutProps> = ({
  title,
  children,
}: SearchLayoutProps) => {

  // const { serumMarkets } = useSerumMarkets();


  // const [marketQuery, setMarketQuery] = useState("");

  // const [filteredMarkets, setFilteredMarkets] = useState(
  //   serumMarkets ? serumMarkets : []
  // );




  // useEffect(() => {
  //   if (serumMarkets) {
  //     if (marketQuery !== "") {
  //       const q = new RegExp(marketQuery, "i");
  //       setFilteredMarkets(
  //         serumMarkets.filter((row) => serumMarketFilter(q, row)).slice(0, 5)
  //       );
  //     } else setFilteredMarkets(serumMarkets.slice(0, 5));
  //   } else setFilteredMarkets([]);
  // }, [marketQuery, serumMarkets]);

  return (
    <HeaderLayout title={title}>

      {children}
    </HeaderLayout>
  );
};

export const getSearchLayout = (page: React.ReactNode, title?: string) => (
  <SearchLayout title={title}>{page}</SearchLayout>
);
