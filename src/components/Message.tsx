import { DocumentData } from "firebase/firestore";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
type MessageProps = {
  message: DocumentData;
};

function Message({ message }: MessageProps) {
  const isChatGPT = message.user.name === "chatGPT";

  const text = Array.isArray(message.text)
    ? message.text.join(" ")
    : message.text;

  return (
    <div className={`py-5 text-white ${isChatGPT && `bg-[#434654]`}`}>
      <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
        <img
          src={message.user.avatar}
          alt="avatar"
          className="h-8 w-8 object-cover rounded-md"
        />
        <div className="pt-1 text-base object-cover">
          <Markdown remarkPlugins={[remarkGfm]}>{text}</Markdown>
        </div>
      </div>
    </div>
  );
}

export default Message;
