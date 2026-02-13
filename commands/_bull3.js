/*CMD
  command: /bull3
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
  { title: "💳 Перейти к оплате", url: "https://clck.ru/3RCiX3" }]
    ,
    [
  { title: "🔄 Изменить способ оплаты", command: "/sps3" }]
    ,
    
  [
  { title: "✅️ Я оплатил", command: "/prov" }]
    
]
Bot.sendInlineKeyboard(buttons, "*📦 Товар: Подписка BULL VIP (3 МЕСЯЦА)\n\n💎 Оплата через: СБП/Карта*\n💰 *Сумма*: 728 рублей\n⏰ *Срок*: 90 дней\n\nПосле оплаты, нажмите на кнопку ниже *Я оплатил*\n\n❗️ *ПЕРЕД ТЕМ КАК ПЕРЕЙТИ НА СТРАНИЦУ ОПЛАТЫ, УБЕДИТЕСЬ ЧТО У ВАС ОТКЛЮЧЕН VPN*\n\n*Нажмите кнопку ниже для перехода к оплате*:")

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}
