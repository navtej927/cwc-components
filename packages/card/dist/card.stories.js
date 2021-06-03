"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.basicCard = void 0;
const react_1 = __importDefault(require("react"));
const _1 = require(".");
exports.default = {
    title: "Card"
};
const basicCard = () => react_1.default.createElement(_1.Card, null, "Basic Button");
exports.basicCard = basicCard;
//# sourceMappingURL=card.stories.js.map