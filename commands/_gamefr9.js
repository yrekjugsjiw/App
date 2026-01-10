/*CMD
  command: /gamefr9
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
  { title: "✅️", command: "/gamefr8" }]

]
Bot.sendInlineKeyboard(buttons, "❗️ *Уважаемый пользователь, прочти перед использованием!\n\nТы выбрал категорию FREE. Выбрав данную категорию, ты даёшь согласие, что прочитал и согласен с тем, что категория FREE не гарантирует 100% успех, так как  бесплатные сигналы генерирует наша нейросеть, которая даёт прогнозы на основании последних 10 игр.*")

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})


}

//your bjs
