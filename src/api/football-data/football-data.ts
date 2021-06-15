import axios from 'axios';
import exampleApiData from './example-matches';

// eslint-disable-next-line operator-linebreak
const { REACT_APP_FOOTBALL_DATA_API_TOKEN: FOOTBALL_DATA_API_TOKEN } =
  process.env;

const footballApi = async (url: string): Promise<any> => exampleApiData;
//   const params = '/competitions/2018/matches';
//   const response = await axios.get(
//     `http://api.football-data.org/v2/${params}`,
//     {
//       headers: {
//         'X-Auth-Token': FOOTBALL_DATA_API_TOKEN,
//       },
//     },
//   );

export default footballApi;
