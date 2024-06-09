import axios from 'axios';

export async function filterData() {
  const result = await axios.get(
    'https://zoommer-api.lemon.do/v1/Content/filter?catId=21'
  );
  return result.data;
}
