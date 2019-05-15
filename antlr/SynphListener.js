// Generated from Synph.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by SynphParser.
function SynphListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

SynphListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
SynphListener.prototype.constructor = SynphListener;

// Enter a parse tree produced by SynphParser#name.
SynphListener.prototype.enterName = function(ctx) {
};

// Exit a parse tree produced by SynphParser#name.
SynphListener.prototype.exitName = function(ctx) {
};


// Enter a parse tree produced by SynphParser#group.
SynphListener.prototype.enterGroup = function(ctx) {
};

// Exit a parse tree produced by SynphParser#group.
SynphListener.prototype.exitGroup = function(ctx) {
};


// Enter a parse tree produced by SynphParser#orGroup.
SynphListener.prototype.enterOrGroup = function(ctx) {
};

// Exit a parse tree produced by SynphParser#orGroup.
SynphListener.prototype.exitOrGroup = function(ctx) {
};


// Enter a parse tree produced by SynphParser#andGroup.
SynphListener.prototype.enterAndGroup = function(ctx) {
};

// Exit a parse tree produced by SynphParser#andGroup.
SynphListener.prototype.exitAndGroup = function(ctx) {
};


// Enter a parse tree produced by SynphParser#token.
SynphListener.prototype.enterToken = function(ctx) {
};

// Exit a parse tree produced by SynphParser#token.
SynphListener.prototype.exitToken = function(ctx) {
};


// Enter a parse tree produced by SynphParser#range.
SynphListener.prototype.enterRange = function(ctx) {
};

// Exit a parse tree produced by SynphParser#range.
SynphListener.prototype.exitRange = function(ctx) {
};


// Enter a parse tree produced by SynphParser#not.
SynphListener.prototype.enterNot = function(ctx) {
};

// Exit a parse tree produced by SynphParser#not.
SynphListener.prototype.exitNot = function(ctx) {
};


// Enter a parse tree produced by SynphParser#ignore.
SynphListener.prototype.enterIgnore = function(ctx) {
};

// Exit a parse tree produced by SynphParser#ignore.
SynphListener.prototype.exitIgnore = function(ctx) {
};


// Enter a parse tree produced by SynphParser#body.
SynphListener.prototype.enterBody = function(ctx) {
};

// Exit a parse tree produced by SynphParser#body.
SynphListener.prototype.exitBody = function(ctx) {
};


// Enter a parse tree produced by SynphParser#alias.
SynphListener.prototype.enterAlias = function(ctx) {
};

// Exit a parse tree produced by SynphParser#alias.
SynphListener.prototype.exitAlias = function(ctx) {
};


// Enter a parse tree produced by SynphParser#loop.
SynphListener.prototype.enterLoop = function(ctx) {
};

// Exit a parse tree produced by SynphParser#loop.
SynphListener.prototype.exitLoop = function(ctx) {
};


// Enter a parse tree produced by SynphParser#loopBy.
SynphListener.prototype.enterLoopBy = function(ctx) {
};

// Exit a parse tree produced by SynphParser#loopBy.
SynphListener.prototype.exitLoopBy = function(ctx) {
};


// Enter a parse tree produced by SynphParser#var.
SynphListener.prototype.enterVar = function(ctx) {
};

// Exit a parse tree produced by SynphParser#var.
SynphListener.prototype.exitVar = function(ctx) {
};


// Enter a parse tree produced by SynphParser#subrange.
SynphListener.prototype.enterSubrange = function(ctx) {
};

// Exit a parse tree produced by SynphParser#subrange.
SynphListener.prototype.exitSubrange = function(ctx) {
};


// Enter a parse tree produced by SynphParser#block.
SynphListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by SynphParser#block.
SynphListener.prototype.exitBlock = function(ctx) {
};


// Enter a parse tree produced by SynphParser#root.
SynphListener.prototype.enterRoot = function(ctx) {
};

// Exit a parse tree produced by SynphParser#root.
SynphListener.prototype.exitRoot = function(ctx) {
};



exports.SynphListener = SynphListener;