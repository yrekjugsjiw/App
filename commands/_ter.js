/*CMD
  command: /ter
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

function onEnding(time){
  // can give bonus now
  var button = [
  [{title: "🔗 Перейти", url: "https://t.me/bulldropsoft"}],
  [{title: "Продолжить", command: "/maine"}]
];

Bot.sendInlineKeyboard(button, "❗️ Уважаемый пользователь, если вы еще не подписаны на наш новостной Telegram-канал, то советуем вам подписаться, чтобы не пропускать новости нашего проекта.")
  // your other code here
  //..

  return true; // if false - cooldown is not restarted
}

function onStarting(){
  // cooldown just started
  var button = [
  [{title: "🔗 Перейти", url: "https://t.me/bulldropsoft"}],
  [{title: "Продолжить", command: "/maine"}]
];

Bot.sendInlineKeyboard(button, "❗️ Уважаемый пользователь, если вы еще не подписаны на наш новостной Telegram-канал, то советуем вам подписаться, чтобы не пропускать новости нашего проекта.")
}

function onWaiting(waitTime){
  // we have active cooldown
  var buttons = [
[
  { title: " 🔄 Попробывать еще раз", command: "/start" }]
]
Bot.sendInlineKeyboard(buttons, " Попробуй еще раз через  " + waitTime + " секунд")
}

Libs.CooldownLib.user.watch({
  // you need name for cooldown
  name: "OemBonusCooldown",
  time: 15, // cooldown time, 120 secs - 2 minute
  onStarting: onStarting,
  onEnding: onEnding,
  onWaiting: onWaiting
})
if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}

//your bjs

function doTouchOwnLink(){
  Bot.sendMessage("Ты нажал по своей ссылке!");
}

function doAttracted(refUser){
  

  Bot.sendMessageToChatWithId(
    refUser.telegramid,
    "🎉 Теперь ты будешь получать 30% от покупок твоего реферала. " 
  );
}

function doAlreadyAttracted(){
  Bot.sendMessage("");
}

let trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAlreadyAttracted: doAlreadyAttracted,
  debug: false // extra info for debugging
}

RefLib.track(trackOptions);
