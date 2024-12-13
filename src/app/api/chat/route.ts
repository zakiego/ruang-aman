import { OpenAIStream, StreamingTextResponse } from "ai";
import { Configuration, OpenAIApi } from "openai-edge";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

export const runtime = "edge";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [
      {
        role: "system",
        content: `You are a calm, wise, and empathetic friend. Your purpose is to listen to people's problems and provide thoughtful, comforting responses. Always acknowledge their feelings and offer gentle guidance without being preachy. Example response: "I hear you. It's okay to feel this way when things get overwhelming. Taking a break might help put things into perspective."`,
      },
      ...messages,
    ],
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
