/*CMD
  command: /opla
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
  { title: "⬑ Назад", command: "/maine" }]
]
Bot.sendInlineKeyboard(buttons, "Если у вас возникли проблемы с оплатой подписки, попробуйте воспользоваться другим способом оплаты. Если и другие методы не работают, напишите нам в *поддержку* — мы быстро все починим")

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}

//your bjs
