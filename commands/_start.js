/*CMD
  command: /start
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

var fullBotUsers = Bot.getProperty("wholeUsers", [])
var already = User.getProperty("already")
if (!already) {
  User.setProperty("already", "DONE", "string")
  fullBotUsers.push(user.telegramid)
  Bot.setProperty("wholeUsers", fullBotUsers, "json")
}
if (params == "pay1bull") {
  if (typeof Bot !== 'undefined') {
    Bot.runCommand("/bull1");
  } else {
    Api.sendMessage({ text: "Выполняю команду /bull1" });
  }
} else if (params == "pay3bull") {
  if (typeof Bot !== 'undefined') {
    Bot.runCommand("/bull3");
  } else {
    Api.sendMessage({ text: "Выполняю команду /bull3" });
  }
} else if (params == "pay6bull") {
  if (typeof Bot !== 'undefined') {
    Bot.runCommand("/bull6");
  } else {
    Api.sendMessage({ text: "Выполняю команду /bull6" });
  }
} else if (params == "pay12bull") {
  if (typeof Bot !== 'undefined') {
    Bot.runCommand("/bull12");
  } else {
    Api.sendMessage({ text: "Выполняю команду /bull12" });
  }
} else if (params == "free") {
  if (typeof Bot !== 'undefined') {
    Bot.runCommand("/gamefr9");
  } else {
    Api.sendMessage({ text: "Выполняю команду /gamefr9" });
  }
} else if (params == "vip") {
  if (typeof Bot !== 'undefined') {
    Bot.runCommand("/platvalu");
  } else {
    Api.sendMessage({ text: "Выполняю команду /platvalu" });
  }
} else if (params == "skidka5") {
  if (typeof Bot !== 'undefined') {
    Bot.runCommand("/sk15");
  } else {
    Api.sendMessage({ text: "Выполняю команду /sk15" });
  }
} else if (params == "skidka10") {
  if (typeof Bot !== 'undefined') {
    Bot.runCommand("/sk10");
  } else {
    Api.sendMessage({ text: "Выполняю команду /sk10" });
  }
} else if (params == "day10") {
  if (typeof Bot !== 'undefined') {
    Bot.runCommand("/d10");
  } else {
    Api.sendMessage({ text: "Выполняю команду /d10" });
  }
} else if (params == "day20") {
  if (typeof Bot !== 'undefined') {
    Bot.runCommand("/d20");
  } else {
    Api.sendMessage({ text: "Выполняю команду /d20" });
  }
} else if (params == "skidka101") {
  if (typeof Bot !== 'undefined') {
    Bot.runCommand("/sk101");
  } else {
    Api.sendMessage({ text: "Выполняю команду /sk101" });
  }
} else if (params == "skidka15") {
  if (typeof Bot !== 'undefined') {
    Bot.runCommand("/sk5");
  } else {
    Api.sendMessage({ text: "Выполняю команду /sk5" });
  }
} else {
  // Default action if no match
  Api.sendPhoto({
    photo: "https://ibb.co/ZRxrzQPF", // it is picture!
    caption: "➤ Вас приветствует <a href='https://t.me/bulldropsoft'>BULLDROPSOFT</a> 🚀\n\n• Наши уникальные возможности:\n\n🫂 Приглашайте друзей и получайте 25% от каждой их покупки!\n\n✅ Мы реализовали бесплатную систему прогнозов, которой может пользоваться каждый.\n\n😉 Если у вас возникнут проблемы, мы всегда готовы быстро помочь или ответить на ваши вопросы.",
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [
      // Row 1
      [

        {
          text: "⚡️ Получить прогноз",
          web_app: { 
          url: "https://co731450.tw1.ru/index.html" },
          style: "success"
        }
      ], // Row 2

      [
        {
          text: "📰 Новости",
          url: "https://t.me/bulldropsoft",
          style: "primary"
        },
        {
          text: "🆘️ Помощь",
          url: "https://t.me/bulldropsoft?direct",
          style: "danger"
        }
      ], // Row 3 (Icon)

      
    ]
  }
})

  // Deleting the message if request and request.message exist
  if (request && request.data && request.message) {
    var message_id = request.message.message_id;
    var chat_id = request.message.chat.id;

    Api.deleteMessage({
      chat_id: chat_id,
      message_id: message_id
    });
  }
}
