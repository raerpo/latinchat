"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var styled_components_1 = require("styled-components");
var io = require("socket.io-client");
var ChatStyles = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n"], ["\n"])));
var MessagesStyles = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n"], ["\n"])));
var UsersStyles = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n"], ["\n"])));
var socket = io();
var Chat = /** @class */ (function (_super) {
    __extends(Chat, _super);
    function Chat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            message: '',
            messageList: []
        };
        _this.handleChangeMessage = function (e) {
            _this.setState({
                message: e.currentTarget.value
            });
        };
        _this.handleSendMessage = function () {
            socket.emit('send message', _this.state.message);
            // Clear message after send
            _this.setState({
                message: ''
            });
        };
        _this.renderMessages = function (messages) {
            return messages.map(function (message, index) { return React.createElement("li", { key: index }, message); });
        };
        return _this;
    }
    Chat.prototype.componentDidMount = function () {
        var _this = this;
        // On every message, we should change the state
        socket.on('message', function (message) {
            var chat = _this.state.messageList;
            _this.setState({
                messageList: chat.concat(message)
            });
        });
    };
    Chat.prototype.render = function () {
        return (React.createElement(ChatStyles, null,
            React.createElement(MessagesStyles, null,
                React.createElement("ul", null, this.renderMessages(this.state.messageList)),
                React.createElement("div", null,
                    React.createElement("input", { type: "text", value: this.state.message, onChange: this.handleChangeMessage }),
                    React.createElement("button", { onClick: this.handleSendMessage }, "Enviar"))),
            React.createElement(UsersStyles, null)));
    };
    return Chat;
}(React.Component));
var LatinChatHome = /** @class */ (function (_super) {
    __extends(LatinChatHome, _super);
    function LatinChatHome() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LatinChatHome.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement("div", null, "Logo"),
            React.createElement("div", null, "\u00E1rea Rosa"),
            React.createElement("div", null));
    };
    return LatinChatHome;
}(React.Component));
ReactDOM.render(React.createElement(Chat, null), document.querySelector('#root'));
var templateObject_1, templateObject_2, templateObject_3;
