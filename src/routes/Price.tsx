import styled from "styled-components";

interface IPriceData {
  priceData:
    | {
        ath_date: string;
        ath_price: number;
        market_cap: number;
        market_cap_change_24h: number;
        percent_change_1h: number;
        percent_change_1y: number;
        percent_change_6h: number;
        percent_change_7d: number;
        percent_change_12h: number;
        percent_change_15m: number;
        percent_change_24h: number;
        percent_change_30d: number;
        percent_change_30m: number;
        percent_from_price_ath: number;
        price: number;
        volume_24h: number;
        volume_24h_change_24h: number;
      }
    | undefined;
}

interface IChangeProps {
  value: number;
}

const Div = styled.div`
  display: grid;
  width: 300px;
  grid-template-columns: 1fr auto;
  justify-content: auto;
  align-items: center;
  gap: 5px 30px;
  span {
    font-size: 14px;
    font-weight: 500;
    justify-self: right;
  }
`;

const Description = styled.span`
  color: ${(props) => props.theme.accentColor};
  font-size: 14px;
`;

function Change({ value }: IChangeProps) {
  if (value > 0) {
    return <span style={{ color: "#43aa05" }}>{value?.toFixed(2)}%</span>;
  } else if (value < 0) {
    return <span style={{ color: "#e15241" }}>{value.toFixed(2)}%</span>;
  } else {
    return <span>{value.toFixed(2)}%</span>;
  }
}

function Price({ priceData }: IPriceData) {
  // console.log(priceData);
  return (
    <Div>
      <Description> Price</Description>
      <span> ${priceData?.price.toFixed(2)}</span>
      <Description>Market cap</Description>
      <span>${priceData ? (priceData.market_cap / 1e9).toFixed(2) : ""}B</span>
      <Description>Volume 24h</Description>
      <span>${priceData ? (priceData.volume_24h / 1e9).toFixed(2) : ""}B</span>
      <Description>All time high</Description>
      <span> ${priceData?.ath_price.toFixed(2)}</span>
      <Description>% All time high</Description>
      <Change value={priceData ? priceData.percent_from_price_ath : 0} />
      <Description>% 1h</Description>
      <Change value={priceData ? priceData.percent_change_1h : 0} />
      <Description>% 24h</Description>
      <Change value={priceData ? priceData.percent_change_24h : 0} />
      <Description>% 7d</Description>
      <Change value={priceData ? priceData.percent_change_7d : 0} />
      <Description>% 1m</Description>
      <Change value={priceData ? priceData.percent_change_30d : 0} />
      <Description>% 1y</Description>
      <Change value={priceData ? priceData.percent_change_1y : 0} />
    </Div>
  );
}

export default Price;
