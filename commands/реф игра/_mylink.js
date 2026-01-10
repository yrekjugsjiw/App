/*CMD
  command: /mylink
  help: 
  need_reply: false
  auto_retry_time: 
  folder: реф игра
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

Libs.ReferralLib.currentUser.getRefLink('bulldropsoft_bot');
Bot.sendMessage("👤 Твоя реферальная ссылка: https://t.me/bulldropsoft_bot?start=user"+user.id+"");
if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}

//your bjs
