import NewChat from "./NewChat";

export default function Sidebar() {
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1 ">
        <div>
          {/*NewChat*/}
          <NewChat/>

          <div>{/*Model Selection*/}</div>

          {/*Map through the chatRows */}
        </div>
      </div>
    </div>
  );
}
