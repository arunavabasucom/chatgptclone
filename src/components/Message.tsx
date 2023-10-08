import { DocumentData } from "firebase/firestore";

type MessageProps = {
  message: DocumentData;
};

function Message({ message }: MessageProps) {
  return (
    <div>
      <div className=" flex space-x-5 px-10 max-w-2xl mx-auto">
        <img src={ message.user.avatar} alt="avatar" className="h-8 w-8"/>
        <p className="pt-1 text-sm">
          {message.user.name == "chatGPT" ? message.text.content : message.text}
        </p>
      </div>
    </div>
  );
}

export default Message;
