import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {

    const num = Math.floor(Math.random());

    return {
    statusCode: 200,
    body: JSON.stringify({ message: `${num} is your lucky number` }),
  }
};

export { handler };