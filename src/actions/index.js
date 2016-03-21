import axios from 'axios';
const ROOT_URL='http://dev.markitondemand.com/MODApis/Api/v2/InteractiveChart/json?parameters=%7B%22Normalized%22%3Afalse%2C%22NumberOfDays%22%3A365%2C%22DataPeriod%22%3A%22Day%22%2C%22Elements%22%3A%5B%7B%22Symbol%22%3A%22<SYMBL>%22%2C%22Type%22%3A%22price%22%2C%22Params%22%3A%5B%22c%22%5D%7D%5D%7D';

export const FETCH_STOCK = 'FETCH_STOCK';

export function fetchStock(stockSymbol) {
    const url = ROOT_URL.replace('<SYMBL>', stockSymbol);
    const request = axios.get(url);

    return {
        type: FETCH_STOCK,
        payload: request
    };
}
