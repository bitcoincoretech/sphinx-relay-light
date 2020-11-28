"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// import * as SphinxBot from '../../../sphinx-bot'
const SphinxBot = require("sphinx-bot");
const MotherBot = require("./mother");
const WelcomeBot = require("./welcome");
const LoopBot = require("./loop");
const models_1 = require("../models");
const bots_1 = require("../controllers/bots");
exports.buildBotPayload = bots_1.buildBotPayload;
const constants_1 = require("../constants");
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        MotherBot.init();
        const builtInBots = yield models_1.models.ChatBot.findAll({ where: {
                botType: constants_1.default.bot_types.builtin
            } });
        if (!(builtInBots && builtInBots.length))
            return;
        builtInBots.forEach(b => {
            if (b.botPrefix === '/welcome')
                WelcomeBot.init();
            if (b.botPrefix === '/loopout')
                LoopBot.init();
        });
    });
}
exports.init = init;
function builtinBotEmit(msg) {
    setTimeout(() => {
        SphinxBot._emit('message', bots_1.buildBotPayload(msg));
    }, 1200);
}
exports.builtinBotEmit = builtinBotEmit;
//# sourceMappingURL=index.js.map