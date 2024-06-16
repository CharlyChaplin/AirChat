const data = require("./src/mockData/chats.json");
const msg = require("./src/mockData/messages.json");

module.exports = {
	locals: {
		chats: data,
		messages: msg
	}
};