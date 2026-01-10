/*CMD
  command: /buysubk
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
  { title: "💳 Оплата картой РФ/СБП", command: "/buyrf" }]
    ,
  [
  { title: "🃏 Оплата через CryptoBot", command: "/rubton" }]
  ,
  [
  { title: "🎗 Промокод", command: "/prom2" }]
    ,
  [
  { title: "⬑ Назад", command: "/podpis" }]
]
Bot.sendInlineKeyboard(buttons, "Цена: *250 рублей* (3 USDT)\n\nТы собираешься купить *BULL VIP* на 30 *дней*.\n\nОплата Картой/СБП - оплата доступна с помощью карт, выпущенных в РФ, и Системы Быстрых Платежей.\n\nОплата через CryptoBot - оплата с помощью крипто валюты (USDT)\n\nЕсли у тебя не получилось оплатить с помощью одной платежной системы, то обязательно попробуй другую.\n\nЕсли возникли проблемы при оплате, пишите в [Поддержку](https://t.me/bulldropsoft?direct).")

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}
