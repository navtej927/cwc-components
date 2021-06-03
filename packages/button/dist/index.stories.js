"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.basicButton = void 0;
const react_1 = __importDefault(require("react"));
const button_1 = require("./button");
exports.default = {
    title: "Button"
};
const basicButton = () => react_1.default.createElement(button_1.Button, null, "Basic Button");
exports.basicButton = basicButton;
//# sourceMappingURL=index.stories.js.map