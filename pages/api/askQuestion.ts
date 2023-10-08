import query from "@/lib/queryApi";
import type { NextApiRequest, NextApiResponse } from "next";
import { admin, admindb } from "../../firebaseAdmin";

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { prompt, chatId, model, session } = req.body;
  if (!prompt) {
    res.status(400).json({
      answer: "Please provide a prompt",
    });
  }

  if (!chatId) {
    res.status(400).json({ answer: "Please provide a valid chat ID!" });
  }
  const response = await query(prompt, chatId, model);

  // ChatGPT Query
  const message: Message = {
    text: response || "ChatGPT was unable to find the answer for that!",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "chatGPT",
      name: "chatGPT",
      avatar: `https://ui-avatars.com/api/?name=chatGPT`,
    },
  };
  await admindb
    .collection("users")
    .doc(session?.user?.email)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message);

  res.status(200).json({ answer: message.text });
}
