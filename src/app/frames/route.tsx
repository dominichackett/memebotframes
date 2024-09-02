/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "./frames";
 
const handleRequest = frames(async (ctx) => {
    const symbol = ctx.searchParams.symbol
    const name = ctx.searchParams.name
    const description = ctx.searchParams.description
    const network = ctx.searchParams.network
    const image = ctx.searchParams.image
    console.log(ctx.searchParams)
    

  return {
    image: (
  
      <div tw="flex flex-col">
        <img tw="h-[300px] rounded-full border-8 border-gray-400" src={image}/>
      
        <div tw="flex flex-row">
            <span tw="text-bold">{symbol} {name} </span>
        </div>
        <p>Network: {(parseInt(network) == 1 ?"Optimism":"Galadriel")}</p>
       
        
      </div>
    
    ),
    buttons: [
     
      <Button action="tx" target={{ query: {symbol:symbol,name:name,description:description,network:network,image:image },pathname:"/trans"}} post_url="/trans-success">
        Launch Token
    </Button>,
    ],
  };
});
 
export const GET = handleRequest;
export const POST = handleRequest;