/*CMD
  command: /bull12
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var buttons = [
[
  { title: "💳 Перейти к оплате", url: "https://clck.ru/3SY84g" }]
    ,
    [
  { title: "🔄 Изменить способ оплаты", command: "/sps12" }]
    ,
    
  [
  { title: "✅️ Я оплатил", command: "/prov" }]
    
]
Bot.sendInlineKeyboard(buttons, "*📦 Товар: Подписка BULL VIP (12 МЕСЯЦЕВ)\n\n💎 Оплата через: СБП/Карта*\n💰 *Сумма*: 3800 рублей\n⏰ *Срок*: 360 дней\n\nПосле оплаты, нажмите на кнопку ниже *Я оплатил*\n\n❗️ *ПЕРЕД ТЕМ КАК ПЕРЕЙТИ НА СТРАНИЦУ ОПЛАТЫ, УБЕДИТЕСЬ ЧТО У ВАС ОТКЛЮЧЕН VPN*\n\n*Нажмите кнопку ниже для перехода к оплате*:")

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}
