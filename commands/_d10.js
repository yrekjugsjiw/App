/*CMD
  command: /d10
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
Bot.sendInlineKeyboard(buttons, "*📦 Товар: Подписка BULL VIP (3 МЕСЯЦА)\n\n💎 Оплата через: СБП/Карта*\n💰 *Сумма*: 728 рублей\n⏰ *Срок*: 100 дней\n🎁Бонус: +10 дней\n\nПосле оплаты, нажмите на кнопку ниже *Я оплатил*\n\n*Нажмите кнопку ниже для перехода к оплате*:")

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}
