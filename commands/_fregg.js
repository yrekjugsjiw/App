/*CMD
  command: /fregg
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
  { title: "Колесо", command: "/gamefr" }]
  ,
  [
  { title: "❓️Как работает FREE режим", command: "/helpfr" }]
    ,
  [
  { title: "⬑ Назад", command: "/game6" }]
]
Bot.sendInlineKeyboard(buttons, "Выберите режим👇")

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}

//your bjs
