import { Telegraf } from "telegraf";
import { IConfigService } from "./config/config.interface";
import { ConfigService } from "./config/config.service";
import { IBotContext } from "./context/context.interface";
import { Command } from "./commands/command.class";
import { StartCommand } from "./commands/start.command";
import LocalSession from "telegraf-session-local";

class Bot {
    bot: Telegraf<IBotContext>;
    commands: Command[] = [];

    constructor(private readonly configService: IConfigService) {
        this.bot = new Telegraf<IBotContext>(this.configService.get('TOKEN'));
        this.bot.use((new LocalSession({ database: 'sessions.json' })).middleware())
    }

    init() {
        this.commands = [new StartCommand(this.bot)];
        this.commands.forEach((command) => {
            command.handle();
        })
        this.bot.launch();
    }
}

const bot = new Bot(new ConfigService());
bot.init();
