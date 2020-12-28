var fs = require("fs");
var discord = require("discord.js");

const client = new discord.Client();
var token = "";
fs.readFile("token.txt", "utf8", function(err, data) {
    if (err) throw err;
	token = data;
	console.log(token);
	client.login(token);
});


client.on("ready", () => {
	console.log("Logged in as " + client.user.tag);
});

client.on("message", msg => {
	if(msg.content.includes("frog")) {
		msg.channel.send("ribbit");
	}
});

