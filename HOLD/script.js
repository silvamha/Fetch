async function getStockPrice(ticker){
    try{
        const response = await fetch(`https://api.polygon.io/v1/last/stocks/${ticker}?apiKey=POLYGON_API_KEY`)
        const data = await response.json()
        document.getElementById('stockPrice').innerHTML='Price: ${data.last.price}'
    }catch(error){
        console.log('Error fetching stock data', error)
    }
}