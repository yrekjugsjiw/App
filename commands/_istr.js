/*CMD
  command: /istr
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
 { title: "🏡Главное меню", command: "/maine" }]
]
Bot.sendInlineKeyboard(buttons, "*История операций*:\n\n\n `   Дата         Цена          Описание\n------------|-----------|-------------------\n 01.01.2023     -10₽      Пробная подписка`")

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}

//your bjs
