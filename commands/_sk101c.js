/*CMD
  command: /sk101c
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
  { title: "🌎 Перейти к оплате", url: "http://t.me/send?start=IVUMhA28D10Y" }]
    ,
    [
  { title: "🔄 Изменить способ оплаты", command: "/sk001" }]
    ,
    
  [
  { title: "✅️ Я оплатил", command: "/prov" }]
    
]
Bot.sendInlineKeyboard(buttons, "*📦 Товар: Подписка BULL VIP (3 МЕСЯЦА)\n\n💎 Оплата через: CryptoBot*\n💰 *Сумма*: 8 USDT\n⏰ *Срок*: 90 дней\n🎁Промокод: СКИДКА10 (-10%) \n\nПосле оплаты, нажмите на кнопку ниже *Я оплатил*\n\n❗️ *ПЕРЕД ТЕМ КАК ПЕРЕЙТИ НА СТРАНИЦУ ОПЛАТЫ, УБЕДИТЕСЬ ЧТО У ВАС ОТКЛЮЧЕН VPN*\n\n*Нажмите кнопку ниже для перехода к оплате*:")

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}
