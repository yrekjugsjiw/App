/*CMD
  command: /top6j
  help: 
  need_reply: false
  auto_retry_time: 
  folder: реф игра
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

// It is just List
// you can order, paginate it!
// https://help.bots.business/bjs/lists#getting-data
let list = RefLib.getTopList();

list.order_by = "integer_value";
// olso it is possible get newest members:
list.order_ascending = false;

var items = list.get();
//Bot.inspect(items);

var msg = 'Top list: ';
var prop;
for(var ind in items){
  prop = items[ind]
  msg = msg + "\n" +
    String( parseInt(ind) + 1 ) + ". " +
    prop.user.first_name + ": 👨" + String(prop.value)
}

Bot.sendMessage(msg);
