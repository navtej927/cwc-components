"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = __importDefault(require("react"));
const Button = (props) => {
    const { children, disabled } = props;
    return (react_1.default.createElement("button", { disabled: disabled }, children));
};
exports.Button = Button;
//# sourceMappingURL=button.js.map