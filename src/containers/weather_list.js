import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';

class StockList extends Component {


    renderStock(stockData) {
        const stock = stockData.Symbol;
        const prices = stockData.DataSeries.close.values;

        const maxProfitPossible = (priceArray) => {
            if (!priceArray) return 0;
            var priceArrayLength = priceArray.length;
            var maxProfit = 0;
            if (priceArrayLength < 2) return 0;
            var minPriceSeen = priceArray[0];
            var currPrice, potentialProfit;
            for (var i = 1; i < priceArrayLength; i++) {
                currPrice = priceArray[i];
                potentialProfit = currPrice - minPriceSeen;
                if (currPrice < minPriceSeen) {
                    minPriceSeen = currPrice;
                }
                else if (potentialProfit > maxProfit) {
                    maxProfit = potentialProfit;
                }
            }
            return Math.round(maxProfit*100) / 100;
        };

        const maxProfit = maxProfitPossible(prices);
        return (
            <tr key={stock}>
                <td>
                    <h1>{stock}</h1>
                </td>
                <td>
                    <Chart data={prices} color="blue" units="$"/>
                </td>
                <td>
                    <h1 className="profit">{ maxProfit } $</h1>
                </td>
            </tr>
        );
    }


    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>Stock Ticker Symbol</th>
                    <th>Stock Price ($)</th>
                    <th>Max Profit (One Buy, One Sell)</th>
                </tr>
                </thead>
                <tbody>
                { this.props.stock.map(this.renderStock)}
                </tbody>
            </table>
        )

    }
}

function mapStateToProps({stock}) {
    return {stock};
}

export default connect(mapStateToProps)(StockList);