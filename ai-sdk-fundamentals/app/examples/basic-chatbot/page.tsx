"use client";

import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="max-w-md mx-auto border border-gray-300 rounded-lg overflow-hidden flex flex-col h-screen"> <div className="flex-1 overflow-y-auto p-4 bg-gray-100"> {messages.map((m) => ( <div key={m.id} className={`p-3 my-2 rounded-lg max-w-xs ${ m.role === 'user' ? 'bg-green-200 self-end' : 'bg-red-200 self-start' }`} > <span className="font-bold"> {m.role === 'user' ? 'User: ' : 'AI: '} </span> {m.content} </div> ))} </div> <form onSubmit={handleSubmit} className="flex p-4 border-t border-gray-300 bg-white"> <input value={input} placeholder="Say something..." onChange={handleInputChange} className="flex-1 p-2 border border-gray-300 rounded-md mr-2" /> <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md"> Send </button> </form> </div>
  );
}
