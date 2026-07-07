import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPEN_AI_API,
  baseURL: "https://api.groq.com/openai/v1",
  dangerouslyAllowBrowser: true,
});


export default openai;