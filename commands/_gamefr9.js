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

/* Command: /newbuttons */


// custom emoji ID
const EMOJI_ID = "5474667187258006816"

// ---------- INLINE KEYBOARD ----------

Api.sendMessage({
  text: "<b>🔥 Проверка подписки!</b>\n\nЧтобы пользоваться бесплатными прогнозами, вы должны подписаться на наш новостной канал.",
  parse_mode: "HTML",
  reply_markup: {
    inline_keyboard: [
      // Row 1
      [
        
        {
          text: "🌎 Перейти в TG-Канал",
          url: "https://t.me/bulldropsoft",
          style: "primary"
        }
      ], // Row 2

      [
        {
          text: "🔄 Проверить подписку",
          callback_data: "/gamefr10",
          style: "success"
        }
        
      ], // Row 3 (Icon)

      
    ]
  }
})


