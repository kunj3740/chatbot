import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";
import { LanguageModelV1 } from '@ai-sdk/provider';

export async function POST(request: Request) {
  const { messages } = await request.json();
  
  // Explicitly cast the model to LanguageModelV1
  const model: LanguageModelV1 = openai("gpt-4o") as LanguageModelV1;

  const stream = await streamText({
    model, 
    system: "You are a helpful assistant.",
    messages,
  });

  return stream.toAIStreamResponse();
}
