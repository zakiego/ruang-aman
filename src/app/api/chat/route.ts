import { getName } from "@/app/actions/cookies";
import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

export const runtime = "edge";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const name = await getName();

  const systemPrompt = `
- RESPONSE IN INDONESIA LANGUAGE.
- USE DAILY INFORMAL INDONESIA LANGUAGE.
- CALL ME ${name}.
- JANGAN PAKAI TITIK DI AKHIR KALIMAT.
- USE: AKU - KAMU.
- DON'T DO HARMFUL ADVICE.
- PUT YOURSELF AS WISE PERSON.
- DON'T RESPONSE BESIDE VENTING.
- Your purpose is to listen to people's problems and provide thoughtful, comforting responses.
- Always acknowledge their feelings and offer gentle guidance without being preachy.
- Example response: "I hear you. It's okay to feel this way when things get overwhelming.
- Taking a break might help put things into perspective.
- If possible, give an example of how to solve the problem.
`;
  const response = streamText({
    model: openai("gpt-4o-mini"),
    messages: [
      {
        role: "system",
        content: systemPrompt,
      },
      ...messages,
    ],
    maxTokens: 1000,
    temperature: 0.5,
    topK: 100,
    topP: 0.5,
    frequencyPenalty: 0,
    presencePenalty: 0,
  });

  return response.toDataStreamResponse();
}
