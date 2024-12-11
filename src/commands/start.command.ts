import { Markup, Telegraf } from "telegraf";
import { Command } from "./command.class";
import { IBotContext } from "../context/context.interface";

export class StartCommand extends Command {
    constructor(bot: Telegraf<IBotContext>){
        super(bot);
    }

    handle(): void {
        this.bot.start((ctx) => {
            ctx.reply('test', Markup.inlineKeyboard([
                Markup.button.callback('1', 'first'),
                Markup.button.callback('2', 'second'),
            ]));
        });

        this.bot.action('first', (ctx) => {
            ctx.session.test = true;
            ctx.editMessageText('hello');
        });

        this.bot.action('second', (ctx) => {
            ctx.session.test = false;
            ctx.editMessageText('bye');
        });
    }
}