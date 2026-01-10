/*CMD
  command: /podpis
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
{ title: "Купить", command: "/buysubk" }]
,
[
  { title: "Подробнее", command: "/podrgl" }]
  ,
[
 { title: "<- Назад", command: "/magaz" }]
]
Bot.sendInlineKeyboard(buttons, "Цена: *250 рублей* (3 USDT)\n\nДля подробного ознокомления с подпиской нажми на кнопку ПОДРОБНЕЕ ниже.")
if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}

//your bjs
