/*CMD
  command: /prov
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin_id = "5868075152"
//you may get it via Bot.sendMessage(user.telegramid)

var msg_count = Bot.getProperty("support_msg_count",0)

var msg_seen = Bot.getProperty("support_msg_seen",0)

var msg_details = Bot.getProperty("support_msg_details",{})

if(!msg_details[msg_count+1]){msg_details[msg_count+1] = {}}


if(!user.last_name){user.last_name = " "}
msg_details[msg_count+1].message = message 
msg_details[msg_count+1].userId = user.telegramid
msg_details[msg_count+1].name = user.first_name
msg_details[msg_count+1].last_name = user.last_name
msg_details[msg_count+1].message_id = request.message_id


Bot.sendMessage("🔄 Проверяем вашу оплату. Это может занять до 30 минут.")

var text = "оплата\n\nВсего: " + [msg_count-msg_seen+1]

Bot.sendMessageToChatWithId(admin_id, text)

Bot.setProperty("support_msg_count",msg_count+1,"integer")
Bot.setProperty("support_msg_details",msg_details,"json")
if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}

//your bjs
