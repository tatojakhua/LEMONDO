import axios from 'axios';

export async function productsData(
  limit: number,
  priceValue: number[],
  filterData: string
) {
  const result = await axios(
    `https://zoommer-api.lemon.do/v1/Products/v3?CategoryId=21&Page=1&Limit=${limit}&MinPrice=${priceValue[0]}&MaxPrice=${priceValue[1]}&SpecificationIds=${filterData}`
  );

  return result.data;
}
