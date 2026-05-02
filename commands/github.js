async function githubCommand(sock, chatId) {
    const repoInfo = `*🤖 EliTechWiz-V3*

*📂 GitHub Repository:*
https://github.com/Eliahhango/elitechwiz-elitechwiz-v3

*📢 Official Channel:*
https://youtube.com/@eliahhango

_Star ⭐ the repository if you like the bot!_`;

    try {
        await sock.sendMessage(chatId, {
            text: repoInfo,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363296769705874@newsletter',
                    newsletterName: 'EliTechWiz-V3',
                    serverMessageId: -1
                }
            }
        });
    } catch (error) {
        console.error('Error in github command:', error);
        await sock.sendMessage(chatId, { 
            text: '❌ Error fetching repository information.' 
        });
    }
}

module.exports = githubCommand; 