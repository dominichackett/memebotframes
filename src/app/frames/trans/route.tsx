import { frames } from "../frames";
import { transaction } from "frames.js/core";
import { ContractABI,opContractAddress,galadrielContractAddress } from "../../../../contracts"; 
import   {encodeFunctionData} from "viem"
export const POST = frames(async (ctx) => {
  // Do something with the request data to generate transaction data
    const symbol = ctx.searchParams.symbol
    const name = ctx.searchParams.name
    const description = ctx.searchParams.description
    const network = ctx.searchParams.network
    const image = ctx.searchParams.image
  // Create calldata for the transaction using Viem's `encodeFunctionData`
  const calldata = encodeFunctionData({
    abi: ContractABI,
    functionName: "launchToken",
    args: [symbol,name,description,image],
  });
  console.log(ctx.searchParams.value)
  // Return transaction data that conforms to the correct type
  return transaction({
    chainId:   (parseInt(network) == 1 ?"eip155:11155420":"eip155:696969"), 
    method: "eth_sendTransaction",
    params: {
      abi: ContractABI,
      to: (parseInt(network) == 1 ?opContractAddress:galadrielContractAddress),
      data: calldata,
      
    },
  });
});