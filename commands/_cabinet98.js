/*CMD
  command: /cabinet98
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

let refList = RefLib.getRefList();

if (!refList.exist) {
  var buttons = [
[

  { title: "⬑ Назад", command: "/maine" }]
]
Bot.sendInlineKeyboard(buttons, "[[Информация]]:\n👤 Имя: " + user.first_name + 
"\n🆔️ ID: " + user.telegramid + 
"\n➖️➖️*Личный кабинет*➖️➖️" + 
"\nБонусный баланс: 0.00 ₽" + 
"\nПодписка: *None*" + 
"\nДо конца подписки: 0 *d*" + 
"\n➖️➖️*Реферальная система*➖️➖️" + 
"\nВсего заработано: 0 ₽" + 
"\nВсего рефералов: " + RefLib.getRefCount() + 
"\nРеферальный процент: 25.00" + 
"\nСсылка для приглашения: `https://t.me/bulldropsoft_bot?start=user"+user.id+"`")
  
  return
}

let users_rows = ""
let link = RefLib.getLink();

// only 100 first users here
// for other users you need use pagination:
// https://help.bots.business/bjs/lists#paginating
let users = refList.getUsers();

for (var ind in users) {
  users_rows = users_rows + "\n👤 " + Libs.commonLib.getLinkFor( users[ind] )
}

let msg =
"[[Информация]]:\n👤 Имя: " + user.first_name + 
"\n🆔️ ID: " + user.telegramid + 
"\n➖️➖️*Личный кабинет*➖️➖️" + 
"\nБонусный баланс: 0.00 ₽" + 
"\nПодписка: *None*" + 
"\nДо конца подписки: 0 *d*" + 
"\n➖️➖️*Реферальная система*➖️➖️" + 
"\nВсего заработано: 0 ₽" + 
"\nВсего рефералов: " + RefLib.getRefCount() + 
"\nРеферальный процент: 15.00" + 
"\nСсылка для приглашения: `https://t.me/bulldropsoft_bot?start=user"+user.id+"`"
  
  

Bot.sendMessage(msg);

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}

//your bjs
