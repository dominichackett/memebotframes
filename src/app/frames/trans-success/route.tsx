/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "../../frames/frames";
 
const handleRequest = frames(async (ctx) => {
  return {
    image: (
  
      <span>
      Transaction Submitted.
      </span>
    
    ),
    buttons: [
      <Button action="post" target="/">
        Home
      </Button>,
      
    ],
  };
});
 
export const GET = handleRequest;
export const POST = handleRequest;