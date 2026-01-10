/*CMD
  command: /bonusi91
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var buttons = [
[
{ title: "⌛️ Ежедневный бонус", command: "/rulet10" }]
,
[
  { title: "⌛️ Еженедельная рулетка", command: "/rulet9" }]
  ,
[
 { title: "<- Назад", command: "/maine" }]
]
Bot.sendInlineKeyboard(buttons, "Выберите действие👇")
if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}

//your bjs
