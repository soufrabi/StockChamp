import { useEffect, useState } from "react";
import {finnhub} from "../apis/finnhub.js"

const StockList = () => {
  const [watchList,setWatchList]  = useState(['GOOGL','MSFT','AMZN'])
  const [stockData,setStockData] = useState()

  useEffect(()=> {

    let isMounted = true
    const fetchData = async () =>  {

      try {
        
       const responses = await Promise.all(watchList.map((stockSymbol)=>{
          return finnhub.get("/quote",{
            params: {
              symbol : stockSymbol
            }
          })
        }))

        const data = responses.map((response)=>{
          return {
            'data':response.data,
            'symbol':response.config.params.symbol
          }

        })


        if(isMounted){

          console.log(data)
          setStockData(data)
        }

      } catch (error) {
        console.log(error)
      }
    }


    fetchData()

    return () => {isMounted = false}

  },[])


  return (
    <div> StockList</div>
  )
}



export {StockList}
