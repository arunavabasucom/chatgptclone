interface Message {
  text: string | ChatCompletionMessage;
  createdAt: admin.firestore.Timestamp;
  user: {
    _id: string;
    name: string;
    avatar: string;
  };
}
