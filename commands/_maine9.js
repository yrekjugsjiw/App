/*CMD
  command: /maine9
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var fullBotUsers = Bot.getProperty("wholeUsers", [])
var already = User.getProperty("already")
if (!already) {
  User.setProperty("already", "DONE", "string")
  fullBotUsers.push(user.telegramid)
  Bot.setProperty("wholeUsers", fullBotUsers, "json")
}

Libs.Random.sendMessage([""]);
var buttons = [
[
  { title: "🚀 Прогнозы", command: "/game6" },
  { title: "👤 Профиль", command: "/cabinet98" }]
  ,
  [
  { title: "🛍 Магазин", command: "/magaz" },
  { title: "💰 Бонусы", command: "/bonusi91" },
  { title: "❓️ Помощь", command: "/help" }]
]

Bot.sendInlineKeyboard(buttons, "Выбери нужный раздел ниже 👇")

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}

//your bjs
