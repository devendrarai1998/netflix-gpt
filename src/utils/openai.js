// import OpenAI from "openai";
// import { OPENAI_KEY } from "./constants";

// const openai = new OpenAI({
//   apiKey: OPENAI_KEY,
//   dangerouslyAllowBrowser: true, // This is the default and can be omitted
// });

// export default openai;

import { GEMINI_KEY } from './constants';


import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(GEMINI_KEY);
const geminiModel = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default geminiModel;