import React from "react";
import { BsEmojiSmile } from "react-icons/bs"
import { FaMicrophone } from "react-icons/fa";
import { ImAttachment } from "react-icons/im"
import { MdSend } from "react-icons/md";


function MessageBar() {

  return (

    <div className="bg-panel-header-background h-20 px-4 flex item-center gap-6 relative">

      <div style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center", gap: "10px" }}>

        <div className="flex gap-6">

          <BsEmojiSmile
            className="text-panel-header-icon cursor-pointer text-xl"
            title="Emoji"
          />
          <ImAttachment
            className="text-panel-header-icon cursor-pointer text-xl"
            title="Attach File"
          />
        </div>

        <div className="w-full rounded-lg h-10 flex item-center" >
          <input type="text"
            placeholder="Type a message"
            className="bg-input-background text-sm focus:outline-none text-white h-10 rounded-lg px-5 py-4 w-full"
          />
        </div>

        <div className="flex w-10 item-center justify-center"> 
          <button>
            <MdSend
            className="text-panel-header-icon cursor-pointer text-xl"
            
            />

          </button>
        </div>


      </div>


    </div>

  )

}


export default MessageBar;
