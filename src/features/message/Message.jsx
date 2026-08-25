import { useState } from "react"

function MessageScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function submit (){
   if (name.trim() === "") {
    alert("Please enter the name");
    return;
  }  
  if (email.trim() === "") {
    alert("Please enter the email");
    return;
  } 
  if (message.trim() === "") {
    alert("Please enter message to be send");
    return;
  } 
   alert("تم إرسال الرسالة بنجاح!");

   setName("");
   setEmail("");
   setMessage("");
  }
  return (
    <div className="flex justify-center  dark:bg-zinc-900 p-1 sm:p-4">
      <div className="w-full max-w-md bg-[#eff2f3] dark:bg-zinc-800/60 backdrop-blur-sm p-6 rounded-3xl space-y-4 border border-slate-300 dark:border-zinc-700/50 shadow-xl"> 
        
        <h1 className="text-xl font-bold  text-center mb-2">Send Message</h1>
        
        <div>
          <label className="block text-xs font-medium dark:text-zinc-300 mb-1.5 ml-1">
            Full Name
          </label>
          <input  
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Full Name"
            className="w-full px-4 py-2.5 bg-[#fdfeff] dark:bg-zinc-900/80 border border-slate-300 dark:border-zinc-700 rounded-xl text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-medium dark:text-zinc-300 mb-1.5 ml-1">
            Email Address
          </label>
          <input  
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="w-full px-4 py-2.5 bg-[#fdfeff] dark:bg-zinc-900/80 border border-slate-300 dark:border-zinc-700 rounded-xl text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all "
          />
        </div>

        <div>
          <label className="block text-xs font-medium dark:text-zinc-300 mb-1.5 ml-1">
            Message
          </label>
          <textarea  
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message here..."
            className="w-full px-4 py-2.5 bg-[#fdfeff] dark:bg-zinc-900/80 border border-slate-300 dark:border-zinc-700 rounded-xl text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none "
          />
        </div>

        <button
        onClick={submit}
         className="w-full py-3 mt-2 bg-blue-600 dark:bg-red-500 hover:bg-blue-500 dark:hover:bg-red-500/90  text-white rounded-xl text-sm font-semibold shadow-lg shadow-blue-600/20 dark:shadow-red-600/30 transition-all active:scale-[0.98]">
          Send Message
        </button>

      </div>
    </div>
  )
}

export default MessageScreen