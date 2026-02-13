/*CMD
  command: /help9
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
  { title: "История платежей", command: "/istr" }]
    ,
  [
  { title: "БОТ не отвечает", command: "/neboty" }]
  ,
  [
    { title: "Проблемы с оплатой", command: "/opla" }]
    ,
    [
    { title: "Чат поддержки", url: "https://t.me/bulldropsoft?direct" }]
    ,
    [
  { title: "🏡Главное меню", command: "/maine" }]
]
Bot.sendInlineKeyboard(buttons, "Выбери тему для получения помощи")

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}

//your bjs
