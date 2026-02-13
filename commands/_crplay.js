/*CMD
  command: /crplay
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

Api.sendMessage({
  text: "🚫 Доступ к VIP прогнозам доступен при активной подписки BULL VIP",
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: "🔱 Оформить подписку",
          web_app: { url: "https://cb391989.tw1.ru/bull.html" }
        }
      ]
    ]
  }
});
if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})


}

//your bjs
