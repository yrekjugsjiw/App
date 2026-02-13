/*CMD
  command: /skd15
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
  { title: "💳 СБП / КАРТА", command: "/sk15" }]
    ,
  [
  { title: "🌎 КРИПТОБОТ(CryptoBot)", command: "/sk15c" }]
   
]
Bot.sendInlineKeyboard(buttons, "*Выберите способ оплаты ниже:*")

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}
