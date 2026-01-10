/*CMD
  command: /game6
  help: 
  need_reply: false
  auto_retry_time: 
  folder: игры
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var buttons = [
[
  { title: "FREE", command: "/gamefr9" },
  { title: "VIP", command: "/platvalu" }]
  ,
  [
  { title: "⬑ Назад", command: "/maine" }]
]
Bot.sendInlineKeyboard(buttons, "Выберите категорию 👇")

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})


}

//your bjs
