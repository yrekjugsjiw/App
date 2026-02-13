/*CMD
  command: /d20
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
  { title: "💳 Перейти к оплате", url: "https://www.donationalerts.com/r/oplata24/PkaufhcgMFKqdIXXHH" }]
    ,
    [
  { title: "🔄 Изменить способ оплаты", command: "/sps6" }]
    ,
    
  [
  { title: "✅️ Я оплатил", command: "/prov" }]
    
]
Bot.sendInlineKeyboard(buttons, "*📦 Товар: Подписка BULL VIP (6 МЕСЯЦЕВ)\n\n💎 Оплата через: СБП/Карта*\n💰 *Сумма*: 1120 рублей\n⏰ *Срок*: 200 дней\n🎁Бонус: +20 дней\n\nПосле оплаты, нажмите на кнопку ниже *Я оплатил*\n\n*Нажмите кнопку ниже для перехода к оплате*:")

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}
