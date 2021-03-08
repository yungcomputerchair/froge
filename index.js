var fs = require("fs");
var discord = require("discord.js");

const client = new discord.Client();
var token = "";
fs.readFile("token.txt", "utf8", function(err, data) {
    if (err) throw err;
	token = data.replace('\n', '');
	client.login(token);
});


client.on("ready", () => {
	console.log("Logged in as " + client.user.tag);
});

client.on("message", msg => {
	if(msg.content.toLowerCase().includes("frog") || msg.mentions.has(client.user.id)) {
		msg.channel.send("ribbit");
	}
});

