import dotenv from 'dotenv'
dotenv.config()

import { Client, GatewayIntentBits } from 'discord.js'

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.DirectMessages
    ]
})

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(client.guilds.cache.map(guild => guild.name));
});

client.on("messageCreate", (message) => {
    console.log(message)

    if (message.content.toLowerCase() === 'ping' && !message.author.bot) {
        message.channel.send(`Pong! :ping_pong:`)
    }
})

console.log("Attempting to login using DISCORD_TOKEN env variable...")
client.login(process.env.DISCORD_TOKEN)