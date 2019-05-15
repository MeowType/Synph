// Generated from Synph.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var SynphListener = require('./SynphListener').SynphListener;
var grammarFileName = "Synph.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0017\u00b3\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0007\u0003\'\n\u0003\f\u0003\u000e\u0003*\u000b\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0004\u0003\u0004\u0007\u00040\n\u0004\f\u0004\u000e",
    "\u00043\u000b\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0007\u00059\n\u0005\f\u0005\u000e\u0005<\u000b\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\n\u0003",
    "\n\u0005\nN\n\n\u0003\n\u0003\n\u0003\n\u0005\nS\n\n\u0003\n\u0003\n",
    "\u0005\nW\n\n\u0003\n\u0005\nZ\n\n\u0003\n\u0003\n\u0005\n^\n\n\u0003",
    "\n\u0005\na\n\n\u0003\n\u0003\n\u0005\ne\n\n\u0003\n\u0005\nh\n\n\u0003",
    "\n\u0003\n\u0005\nl\n\n\u0003\n\u0003\n\u0005\np\n\n\u0003\n\u0005\n",
    "s\n\n\u0003\n\u0003\n\u0005\nw\n\n\u0003\n\u0005\nz\n\n\u0003\n\u0003",
    "\n\u0005\n~\n\n\u0003\n\u0005\n\u0081\n\n\u0003\n\u0003\n\u0005\n\u0085",
    "\n\n\u0005\n\u0087\n\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0005",
    "\f\u008d\n\f\u0003\f\u0003\f\u0003\r\u0003\r\u0007\r\u0093\n\r\f\r\u000e",
    "\r\u0096\u000b\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u00a1\n",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0005",
    "\u0010\u00a8\n\u0010\u0003\u0010\u0007\u0010\u00ab\n\u0010\f\u0010\u000e",
    "\u0010\u00ae\u000b\u0010\u0003\u0011\u0005\u0011\u00b1\n\u0011\u0003",
    "\u0011\u0002\u0002\u0012\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014",
    "\u0016\u0018\u001a\u001c\u001e \u0002\u0003\u0004\u0002\u0011\u0011",
    "\u0013\u0013\u0002\u00c5\u0002\"\u0003\u0002\u0002\u0002\u0004$\u0003",
    "\u0002\u0002\u0002\u0006-\u0003\u0002\u0002\u0002\b6\u0003\u0002\u0002",
    "\u0002\n?\u0003\u0002\u0002\u0002\fA\u0003\u0002\u0002\u0002\u000eE",
    "\u0003\u0002\u0002\u0002\u0010H\u0003\u0002\u0002\u0002\u0012\u0086",
    "\u0003\u0002\u0002\u0002\u0014\u0088\u0003\u0002\u0002\u0002\u0016\u008c",
    "\u0003\u0002\u0002\u0002\u0018\u0090\u0003\u0002\u0002\u0002\u001a\u0099",
    "\u0003\u0002\u0002\u0002\u001c\u009d\u0003\u0002\u0002\u0002\u001e\u00a5",
    "\u0003\u0002\u0002\u0002 \u00b0\u0003\u0002\u0002\u0002\"#\t\u0002\u0002",
    "\u0002#\u0003\u0003\u0002\u0002\u0002$(\u0007\b\u0002\u0002%\'\u0005",
    "\u0012\n\u0002&%\u0003\u0002\u0002\u0002\'*\u0003\u0002\u0002\u0002",
    "(&\u0003\u0002\u0002\u0002()\u0003\u0002\u0002\u0002)+\u0003\u0002\u0002",
    "\u0002*(\u0003\u0002\u0002\u0002+,\u0007\t\u0002\u0002,\u0005\u0003",
    "\u0002\u0002\u0002-1\u0007\n\u0002\u0002.0\u0005\u0012\n\u0002/.\u0003",
    "\u0002\u0002\u000203\u0003\u0002\u0002\u00021/\u0003\u0002\u0002\u0002",
    "12\u0003\u0002\u0002\u000224\u0003\u0002\u0002\u000231\u0003\u0002\u0002",
    "\u000245\u0007\u000b\u0002\u00025\u0007\u0003\u0002\u0002\u00026:\u0007",
    "\f\u0002\u000279\u0005\u0012\n\u000287\u0003\u0002\u0002\u00029<\u0003",
    "\u0002\u0002\u0002:8\u0003\u0002\u0002\u0002:;\u0003\u0002\u0002\u0002",
    ";=\u0003\u0002\u0002\u0002<:\u0003\u0002\u0002\u0002=>\u0007\u000b\u0002",
    "\u0002>\t\u0003\u0002\u0002\u0002?@\u0007\u0012\u0002\u0002@\u000b\u0003",
    "\u0002\u0002\u0002AB\u0005\n\u0006\u0002BC\u0007\u0010\u0002\u0002C",
    "D\u0005\n\u0006\u0002D\r\u0003\u0002\u0002\u0002EF\u0007\u000e\u0002",
    "\u0002FG\u0005\u0012\n\u0002G\u000f\u0003\u0002\u0002\u0002HI\u0007",
    "\u000f\u0002\u0002IJ\u0005\u0012\n\u0002J\u0011\u0003\u0002\u0002\u0002",
    "KM\u0005\u000e\b\u0002LN\u0005\u0016\f\u0002ML\u0003\u0002\u0002\u0002",
    "MN\u0003\u0002\u0002\u0002N\u0087\u0003\u0002\u0002\u0002O\u0087\u0005",
    "\u001c\u000f\u0002PR\u0005\u0010\t\u0002QS\u0005\u0016\f\u0002RQ\u0003",
    "\u0002\u0002\u0002RS\u0003\u0002\u0002\u0002S\u0087\u0003\u0002\u0002",
    "\u0002TV\u0005\u0004\u0003\u0002UW\u0007\u0015\u0002\u0002VU\u0003\u0002",
    "\u0002\u0002VW\u0003\u0002\u0002\u0002WY\u0003\u0002\u0002\u0002XZ\u0005",
    "\u0016\f\u0002YX\u0003\u0002\u0002\u0002YZ\u0003\u0002\u0002\u0002Z",
    "\u0087\u0003\u0002\u0002\u0002[]\u0005\u0006\u0004\u0002\\^\u0007\u0015",
    "\u0002\u0002]\\\u0003\u0002\u0002\u0002]^\u0003\u0002\u0002\u0002^`",
    "\u0003\u0002\u0002\u0002_a\u0005\u0016\f\u0002`_\u0003\u0002\u0002\u0002",
    "`a\u0003\u0002\u0002\u0002a\u0087\u0003\u0002\u0002\u0002bd\u0005\b",
    "\u0005\u0002ce\u0007\u0015\u0002\u0002dc\u0003\u0002\u0002\u0002de\u0003",
    "\u0002\u0002\u0002eg\u0003\u0002\u0002\u0002fh\u0005\u0016\f\u0002g",
    "f\u0003\u0002\u0002\u0002gh\u0003\u0002\u0002\u0002h\u0087\u0003\u0002",
    "\u0002\u0002ik\u0005\u0002\u0002\u0002jl\u0005\u0016\f\u0002kj\u0003",
    "\u0002\u0002\u0002kl\u0003\u0002\u0002\u0002l\u0087\u0003\u0002\u0002",
    "\u0002mo\u0005\f\u0007\u0002np\u0007\u0015\u0002\u0002on\u0003\u0002",
    "\u0002\u0002op\u0003\u0002\u0002\u0002pr\u0003\u0002\u0002\u0002qs\u0005",
    "\u0016\f\u0002rq\u0003\u0002\u0002\u0002rs\u0003\u0002\u0002\u0002s",
    "\u0087\u0003\u0002\u0002\u0002tv\u0005\n\u0006\u0002uw\u0007\u0015\u0002",
    "\u0002vu\u0003\u0002\u0002\u0002vw\u0003\u0002\u0002\u0002wy\u0003\u0002",
    "\u0002\u0002xz\u0005\u0016\f\u0002yx\u0003\u0002\u0002\u0002yz\u0003",
    "\u0002\u0002\u0002z\u0087\u0003\u0002\u0002\u0002{}\u0007\u0014\u0002",
    "\u0002|~\u0007\u0015\u0002\u0002}|\u0003\u0002\u0002\u0002}~\u0003\u0002",
    "\u0002\u0002~\u0080\u0003\u0002\u0002\u0002\u007f\u0081\u0005\u0016",
    "\f\u0002\u0080\u007f\u0003\u0002\u0002\u0002\u0080\u0081\u0003\u0002",
    "\u0002\u0002\u0081\u0087\u0003\u0002\u0002\u0002\u0082\u0084\u0005\u001a",
    "\u000e\u0002\u0083\u0085\u0005\u0016\f\u0002\u0084\u0083\u0003\u0002",
    "\u0002\u0002\u0084\u0085\u0003\u0002\u0002\u0002\u0085\u0087\u0003\u0002",
    "\u0002\u0002\u0086K\u0003\u0002\u0002\u0002\u0086O\u0003\u0002\u0002",
    "\u0002\u0086P\u0003\u0002\u0002\u0002\u0086T\u0003\u0002\u0002\u0002",
    "\u0086[\u0003\u0002\u0002\u0002\u0086b\u0003\u0002\u0002\u0002\u0086",
    "i\u0003\u0002\u0002\u0002\u0086m\u0003\u0002\u0002\u0002\u0086t\u0003",
    "\u0002\u0002\u0002\u0086{\u0003\u0002\u0002\u0002\u0086\u0082\u0003",
    "\u0002\u0002\u0002\u0087\u0013\u0003\u0002\u0002\u0002\u0088\u0089\u0005",
    "\u0002\u0002\u0002\u0089\u008a\u0005\u0012\n\u0002\u008a\u0015\u0003",
    "\u0002\u0002\u0002\u008b\u008d\u0005\u0018\r\u0002\u008c\u008b\u0003",
    "\u0002\u0002\u0002\u008c\u008d\u0003\u0002\u0002\u0002\u008d\u008e\u0003",
    "\u0002\u0002\u0002\u008e\u008f\u0007\u0016\u0002\u0002\u008f\u0017\u0003",
    "\u0002\u0002\u0002\u0090\u0094\u0007\u0003\u0002\u0002\u0091\u0093\u0005",
    "\u0012\n\u0002\u0092\u0091\u0003\u0002\u0002\u0002\u0093\u0096\u0003",
    "\u0002\u0002\u0002\u0094\u0092\u0003\u0002\u0002\u0002\u0094\u0095\u0003",
    "\u0002\u0002\u0002\u0095\u0097\u0003\u0002\u0002\u0002\u0096\u0094\u0003",
    "\u0002\u0002\u0002\u0097\u0098\u0007\u0004\u0002\u0002\u0098\u0019\u0003",
    "\u0002\u0002\u0002\u0099\u009a\u0005\u0002\u0002\u0002\u009a\u009b\u0007",
    "\u0005\u0002\u0002\u009b\u009c\u0005\u0012\n\u0002\u009c\u001b\u0003",
    "\u0002\u0002\u0002\u009d\u009e\u0007\r\u0002\u0002\u009e\u00a0\u0007",
    "\b\u0002\u0002\u009f\u00a1\u0005\u001e\u0010\u0002\u00a0\u009f\u0003",
    "\u0002\u0002\u0002\u00a0\u00a1\u0003\u0002\u0002\u0002\u00a1\u00a2\u0003",
    "\u0002\u0002\u0002\u00a2\u00a3\u0005\u0012\n\u0002\u00a3\u00a4\u0007",
    "\t\u0002\u0002\u00a4\u001d\u0003\u0002\u0002\u0002\u00a5\u00ac\u0005",
    "\u0014\u000b\u0002\u00a6\u00a8\u0007\u0017\u0002\u0002\u00a7\u00a6\u0003",
    "\u0002\u0002\u0002\u00a7\u00a8\u0003\u0002\u0002\u0002\u00a8\u00a9\u0003",
    "\u0002\u0002\u0002\u00a9\u00ab\u0005\u0014\u000b\u0002\u00aa\u00a7\u0003",
    "\u0002\u0002\u0002\u00ab\u00ae\u0003\u0002\u0002\u0002\u00ac\u00aa\u0003",
    "\u0002\u0002\u0002\u00ac\u00ad\u0003\u0002\u0002\u0002\u00ad\u001f\u0003",
    "\u0002\u0002\u0002\u00ae\u00ac\u0003\u0002\u0002\u0002\u00af\u00b1\u0005",
    "\u001e\u0010\u0002\u00b0\u00af\u0003\u0002\u0002\u0002\u00b0\u00b1\u0003",
    "\u0002\u0002\u0002\u00b1!\u0003\u0002\u0002\u0002\u001c(1:MRVY]`dgk",
    "orvy}\u0080\u0084\u0086\u008c\u0094\u00a0\u00a7\u00ac\u00b0"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "')'", "'='", null, null, "'{'", "'}'", 
                     "'['", "']'", "'&['", "'do'", "'~'", "'!'", "'-'", 
                     null, null, null, null, "'i'", null, "';'" ];

var symbolicNames = [ null, null, null, null, "WS", "LINE", "BlockStart", 
                      "BlockEnd", "OrBlockStart", "OrBlockEnd", "AndBlockStart", 
                      "Do", "Not", "Ignore", "Range", "NameID", "String", 
                      "QuotRef", "SpecialChar", "Suffix", "LoopType", "End" ];

var ruleNames =  [ "name", "group", "orGroup", "andGroup", "token", "range", 
                   "not", "ignore", "body", "alias", "loop", "loopBy", "var", 
                   "subrange", "block", "root" ];

function SynphParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

SynphParser.prototype = Object.create(antlr4.Parser.prototype);
SynphParser.prototype.constructor = SynphParser;

Object.defineProperty(SynphParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

SynphParser.EOF = antlr4.Token.EOF;
SynphParser.T__0 = 1;
SynphParser.T__1 = 2;
SynphParser.T__2 = 3;
SynphParser.WS = 4;
SynphParser.LINE = 5;
SynphParser.BlockStart = 6;
SynphParser.BlockEnd = 7;
SynphParser.OrBlockStart = 8;
SynphParser.OrBlockEnd = 9;
SynphParser.AndBlockStart = 10;
SynphParser.Do = 11;
SynphParser.Not = 12;
SynphParser.Ignore = 13;
SynphParser.Range = 14;
SynphParser.NameID = 15;
SynphParser.String = 16;
SynphParser.QuotRef = 17;
SynphParser.SpecialChar = 18;
SynphParser.Suffix = 19;
SynphParser.LoopType = 20;
SynphParser.End = 21;

SynphParser.RULE_name = 0;
SynphParser.RULE_group = 1;
SynphParser.RULE_orGroup = 2;
SynphParser.RULE_andGroup = 3;
SynphParser.RULE_token = 4;
SynphParser.RULE_range = 5;
SynphParser.RULE_not = 6;
SynphParser.RULE_ignore = 7;
SynphParser.RULE_body = 8;
SynphParser.RULE_alias = 9;
SynphParser.RULE_loop = 10;
SynphParser.RULE_loopBy = 11;
SynphParser.RULE_var = 12;
SynphParser.RULE_subrange = 13;
SynphParser.RULE_block = 14;
SynphParser.RULE_root = 15;


function NameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SynphParser.RULE_name;
    return this;
}

NameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NameContext.prototype.constructor = NameContext;

NameContext.prototype.NameID = function() {
    return this.getToken(SynphParser.NameID, 0);
};

NameContext.prototype.QuotRef = function() {
    return this.getToken(SynphParser.QuotRef, 0);
};

NameContext.prototype.enterRule = function(listener) {
    if(listener instanceof SynphListener ) {
        listener.enterName(this);
	}
};

NameContext.prototype.exitRule = function(listener) {
    if(listener instanceof SynphListener ) {
        listener.exitName(this);
	}
};




SynphParser.NameContext = NameContext;

SynphParser.prototype.name = function() {

    var localctx = new NameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, SynphParser.RULE_name);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 32;
        _la = this._input.LA(1);
        if(!(_la===SynphParser.NameID || _la===SynphParser.QuotRef)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function GroupContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SynphParser.RULE_group;
    return this;
}

GroupContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GroupContext.prototype.constructor = GroupContext;

GroupContext.prototype.BlockStart = function() {
    return this.getToken(SynphParser.BlockStart, 0);
};

GroupContext.prototype.BlockEnd = function() {
    return this.getToken(SynphParser.BlockEnd, 0);
};

GroupContext.prototype.body = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BodyContext);
    } else {
        return this.getTypedRuleContext(BodyContext,i);
    }
};

GroupContext.prototype.enterRule = function(listener) {
    if(listener instanceof SynphListener ) {
        listener.enterGroup(this);
	}
};

GroupContext.prototype.exitRule = function(listener) {
    if(listener instanceof SynphListener ) {
        listener.exitGroup(this);
	}
};




SynphParser.GroupContext = GroupContext;

SynphParser.prototype.group = function() {

    var localctx = new GroupContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, SynphParser.RULE_group);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 34;
        this.match(SynphParser.BlockStart);
        this.state = 38;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SynphParser.BlockStart) | (1 << SynphParser.OrBlockStart) | (1 << SynphParser.AndBlockStart) | (1 << SynphParser.Do) | (1 << SynphParser.Not) | (1 << SynphParser.Ignore) | (1 << SynphParser.NameID) | (1 << SynphParser.String) | (1 << SynphParser.QuotRef) | (1 << SynphParser.SpecialChar))) !== 0)) {
            this.state = 35;
            this.body();
            this.state = 40;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 41;
        this.match(SynphParser.BlockEnd);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OrGroupContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SynphParser.RULE_orGroup;
    return this;
}

OrGroupContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OrGroupContext.prototype.constructor = OrGroupContext;

OrGroupContext.prototype.OrBlockStart = function() {
    return this.getToken(SynphParser.OrBlockStart, 0);
};

OrGroupContext.prototype.OrBlockEnd = function() {
    return this.getToken(SynphParser.OrBlockEnd, 0);
};

OrGroupContext.prototype.body = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BodyContext);
    } else {
        return this.getTypedRuleContext(BodyContext,i);
    }
};

OrGroupContext.prototype.enterRule = function(listener) {
    if(listener instanceof SynphListener ) {
        listener.enterOrGroup(this);
	}
};

OrGroupContext.prototype.exitRule = function(listener) {
    if(listener instanceof SynphListener ) {
        listener.exitOrGroup(this);
	}
};




SynphParser.OrGroupContext = OrGroupContext;

SynphParser.prototype.orGroup = function() {

    var localctx = new OrGroupContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, SynphParser.RULE_orGroup);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 43;
        this.match(SynphParser.OrBlockStart);
        this.state = 47;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SynphParser.BlockStart) | (1 << SynphParser.OrBlockStart) | (1 << SynphParser.AndBlockStart) | (1 << SynphParser.Do) | (1 << SynphParser.Not) | (1 << SynphParser.Ignore) | (1 << SynphParser.NameID) | (1 << SynphParser.String) | (1 << SynphParser.QuotRef) | (1 << SynphParser.SpecialChar))) !== 0)) {
            this.state = 44;
            this.body();
            this.state = 49;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 50;
        this.match(SynphParser.OrBlockEnd);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AndGroupContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SynphParser.RULE_andGroup;
    return this;
}

AndGroupContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AndGroupContext.prototype.constructor = AndGroupContext;

AndGroupContext.prototype.AndBlockStart = function() {
    return this.getToken(SynphParser.AndBlockStart, 0);
};

AndGroupContext.prototype.OrBlockEnd = function() {
    return this.getToken(SynphParser.OrBlockEnd, 0);
};

AndGroupContext.prototype.body = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BodyContext);
    } else {
        return this.getTypedRuleContext(BodyContext,i);
    }
};

AndGroupContext.prototype.enterRule = function(listener) {
    if(listener instanceof SynphListener ) {
        listener.enterAndGroup(this);
	}
};

AndGroupContext.prototype.exitRule = function(listener) {
    if(listener instanceof SynphListener ) {
        listener.exitAndGroup(this);
	}
};




SynphParser.AndGroupContext = AndGroupContext;

SynphParser.prototype.andGroup = function() {

    var localctx = new AndGroupContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, SynphParser.RULE_andGroup);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 52;
        this.match(SynphParser.AndBlockStart);
        this.state = 56;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SynphParser.BlockStart) | (1 << SynphParser.OrBlockStart) | (1 << SynphParser.AndBlockStart) | (1 << SynphParser.Do) | (1 << SynphParser.Not) | (1 << SynphParser.Ignore) | (1 << SynphParser.NameID) | (1 << SynphParser.String) | (1 << SynphParser.QuotRef) | (1 << SynphParser.SpecialChar))) !== 0)) {
            this.state = 53;
            this.body();
            this.state = 58;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 59;
        this.match(SynphParser.OrBlockEnd);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TokenContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SynphParser.RULE_token;
    return this;
}

TokenContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TokenContext.prototype.constructor = TokenContext;

TokenContext.prototype.String = function() {
    return this.getToken(SynphParser.String, 0);
};

TokenContext.prototype.enterRule = function(listener) {
    if(listener instanceof SynphListener ) {
        listener.enterToken(this);
	}
};

TokenContext.prototype.exitRule = function(listener) {
    if(listener instanceof SynphListener ) {
        listener.exitToken(this);
	}
};




SynphParser.TokenContext = TokenContext;

SynphParser.prototype.token = function() {

    var localctx = new TokenContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, SynphParser.RULE_token);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 61;
        this.match(SynphParser.String);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function RangeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SynphParser.RULE_range;
    return this;
}

RangeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RangeContext.prototype.constructor = RangeContext;

RangeContext.prototype.token = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TokenContext);
    } else {
        return this.getTypedRuleContext(TokenContext,i);
    }
};

RangeContext.prototype.Range = function() {
    return this.getToken(SynphParser.Range, 0);
};

RangeContext.prototype.enterRule = function(listener) {
    if(listener instanceof SynphListener ) {
        listener.enterRange(this);
	}
};

RangeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SynphListener ) {
        listener.exitRange(this);
	}
};




SynphParser.RangeContext = RangeContext;

SynphParser.prototype.range = function() {

    var localctx = new RangeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, SynphParser.RULE_range);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 63;
        this.token();
        this.state = 64;
        this.match(SynphParser.Range);
        this.state = 65;
        this.token();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NotContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SynphParser.RULE_not;
    return this;
}

NotContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NotContext.prototype.constructor = NotContext;

NotContext.prototype.Not = function() {
    return this.getToken(SynphParser.Not, 0);
};

NotContext.prototype.body = function() {
    return this.getTypedRuleContext(BodyContext,0);
};

NotContext.prototype.enterRule = function(listener) {
    if(listener instanceof SynphListener ) {
        listener.enterNot(this);
	}
};

NotContext.prototype.exitRule = function(listener) {
    if(listener instanceof SynphListener ) {
        listener.exitNot(this);
	}
};




SynphParser.NotContext = NotContext;

SynphParser.prototype.not = function() {

    var localctx = new NotContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, SynphParser.RULE_not);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 67;
        this.match(SynphParser.Not);
        this.state = 68;
        this.body();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function IgnoreContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SynphParser.RULE_ignore;
    return this;
}

IgnoreContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IgnoreContext.prototype.constructor = IgnoreContext;

IgnoreContext.prototype.Ignore = function() {
    return this.getToken(SynphParser.Ignore, 0);
};

IgnoreContext.prototype.body = function() {
    return this.getTypedRuleContext(BodyContext,0);
};

IgnoreContext.prototype.enterRule = function(listener) {
    if(listener instanceof SynphListener ) {
        listener.enterIgnore(this);
	}
};

IgnoreContext.prototype.exitRule = function(listener) {
    if(listener instanceof SynphListener ) {
        listener.exitIgnore(this);
	}
};




SynphParser.IgnoreContext = IgnoreContext;

SynphParser.prototype.ignore = function() {

    var localctx = new IgnoreContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, SynphParser.RULE_ignore);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 70;
        this.match(SynphParser.Ignore);
        this.state = 71;
        this.body();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SynphParser.RULE_body;
    return this;
}

BodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BodyContext.prototype.constructor = BodyContext;

BodyContext.prototype.not = function() {
    return this.getTypedRuleContext(NotContext,0);
};

BodyContext.prototype.loop = function() {
    return this.getTypedRuleContext(LoopContext,0);
};

BodyContext.prototype.subrange = function() {
    return this.getTypedRuleContext(SubrangeContext,0);
};

BodyContext.prototype.ignore = function() {
    return this.getTypedRuleContext(IgnoreContext,0);
};

BodyContext.prototype.group = function() {
    return this.getTypedRuleContext(GroupContext,0);
};

BodyContext.prototype.Suffix = function() {
    return this.getToken(SynphParser.Suffix, 0);
};

BodyContext.prototype.orGroup = function() {
    return this.getTypedRuleContext(OrGroupContext,0);
};

BodyContext.prototype.andGroup = function() {
    return this.getTypedRuleContext(AndGroupContext,0);
};

BodyContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

BodyContext.prototype.range = function() {
    return this.getTypedRuleContext(RangeContext,0);
};

BodyContext.prototype.token = function() {
    return this.getTypedRuleContext(TokenContext,0);
};

BodyContext.prototype.SpecialChar = function() {
    return this.getToken(SynphParser.SpecialChar, 0);
};

BodyContext.prototype.var = function() {
    return this.getTypedRuleContext(VarContext,0);
};

BodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof SynphListener ) {
        listener.enterBody(this);
	}
};

BodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof SynphListener ) {
        listener.exitBody(this);
	}
};




SynphParser.BodyContext = BodyContext;

SynphParser.prototype.body = function() {

    var localctx = new BodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, SynphParser.RULE_body);
    var _la = 0; // Token type
    try {
        this.state = 132;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 73;
            this.not();
            this.state = 75;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
            if(la_===1) {
                this.state = 74;
                this.loop();

            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 77;
            this.subrange();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 78;
            this.ignore();
            this.state = 80;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
            if(la_===1) {
                this.state = 79;
                this.loop();

            }
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 82;
            this.group();
            this.state = 84;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===SynphParser.Suffix) {
                this.state = 83;
                this.match(SynphParser.Suffix);
            }

            this.state = 87;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
            if(la_===1) {
                this.state = 86;
                this.loop();

            }
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 89;
            this.orGroup();
            this.state = 91;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===SynphParser.Suffix) {
                this.state = 90;
                this.match(SynphParser.Suffix);
            }

            this.state = 94;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
            if(la_===1) {
                this.state = 93;
                this.loop();

            }
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 96;
            this.andGroup();
            this.state = 98;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===SynphParser.Suffix) {
                this.state = 97;
                this.match(SynphParser.Suffix);
            }

            this.state = 101;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
            if(la_===1) {
                this.state = 100;
                this.loop();

            }
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 103;
            this.name();
            this.state = 105;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
            if(la_===1) {
                this.state = 104;
                this.loop();

            }
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 107;
            this.range();
            this.state = 109;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===SynphParser.Suffix) {
                this.state = 108;
                this.match(SynphParser.Suffix);
            }

            this.state = 112;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
            if(la_===1) {
                this.state = 111;
                this.loop();

            }
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 114;
            this.token();
            this.state = 116;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===SynphParser.Suffix) {
                this.state = 115;
                this.match(SynphParser.Suffix);
            }

            this.state = 119;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
            if(la_===1) {
                this.state = 118;
                this.loop();

            }
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 121;
            this.match(SynphParser.SpecialChar);
            this.state = 123;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===SynphParser.Suffix) {
                this.state = 122;
                this.match(SynphParser.Suffix);
            }

            this.state = 126;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
            if(la_===1) {
                this.state = 125;
                this.loop();

            }
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 128;
            this.var();
            this.state = 130;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
            if(la_===1) {
                this.state = 129;
                this.loop();

            }
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AliasContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SynphParser.RULE_alias;
    return this;
}

AliasContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AliasContext.prototype.constructor = AliasContext;

AliasContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

AliasContext.prototype.body = function() {
    return this.getTypedRuleContext(BodyContext,0);
};

AliasContext.prototype.enterRule = function(listener) {
    if(listener instanceof SynphListener ) {
        listener.enterAlias(this);
	}
};

AliasContext.prototype.exitRule = function(listener) {
    if(listener instanceof SynphListener ) {
        listener.exitAlias(this);
	}
};




SynphParser.AliasContext = AliasContext;

SynphParser.prototype.alias = function() {

    var localctx = new AliasContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, SynphParser.RULE_alias);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 134;
        this.name();
        this.state = 135;
        this.body();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LoopContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SynphParser.RULE_loop;
    return this;
}

LoopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LoopContext.prototype.constructor = LoopContext;

LoopContext.prototype.LoopType = function() {
    return this.getToken(SynphParser.LoopType, 0);
};

LoopContext.prototype.loopBy = function() {
    return this.getTypedRuleContext(LoopByContext,0);
};

LoopContext.prototype.enterRule = function(listener) {
    if(listener instanceof SynphListener ) {
        listener.enterLoop(this);
	}
};

LoopContext.prototype.exitRule = function(listener) {
    if(listener instanceof SynphListener ) {
        listener.exitLoop(this);
	}
};




SynphParser.LoopContext = LoopContext;

SynphParser.prototype.loop = function() {

    var localctx = new LoopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, SynphParser.RULE_loop);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 138;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SynphParser.T__0) {
            this.state = 137;
            this.loopBy();
        }

        this.state = 140;
        this.match(SynphParser.LoopType);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LoopByContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SynphParser.RULE_loopBy;
    return this;
}

LoopByContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LoopByContext.prototype.constructor = LoopByContext;

LoopByContext.prototype.body = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BodyContext);
    } else {
        return this.getTypedRuleContext(BodyContext,i);
    }
};

LoopByContext.prototype.enterRule = function(listener) {
    if(listener instanceof SynphListener ) {
        listener.enterLoopBy(this);
	}
};

LoopByContext.prototype.exitRule = function(listener) {
    if(listener instanceof SynphListener ) {
        listener.exitLoopBy(this);
	}
};




SynphParser.LoopByContext = LoopByContext;

SynphParser.prototype.loopBy = function() {

    var localctx = new LoopByContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, SynphParser.RULE_loopBy);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 142;
        this.match(SynphParser.T__0);
        this.state = 146;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SynphParser.BlockStart) | (1 << SynphParser.OrBlockStart) | (1 << SynphParser.AndBlockStart) | (1 << SynphParser.Do) | (1 << SynphParser.Not) | (1 << SynphParser.Ignore) | (1 << SynphParser.NameID) | (1 << SynphParser.String) | (1 << SynphParser.QuotRef) | (1 << SynphParser.SpecialChar))) !== 0)) {
            this.state = 143;
            this.body();
            this.state = 148;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 149;
        this.match(SynphParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VarContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SynphParser.RULE_var;
    return this;
}

VarContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarContext.prototype.constructor = VarContext;

VarContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

VarContext.prototype.body = function() {
    return this.getTypedRuleContext(BodyContext,0);
};

VarContext.prototype.enterRule = function(listener) {
    if(listener instanceof SynphListener ) {
        listener.enterVar(this);
	}
};

VarContext.prototype.exitRule = function(listener) {
    if(listener instanceof SynphListener ) {
        listener.exitVar(this);
	}
};




SynphParser.VarContext = VarContext;

SynphParser.prototype.var = function() {

    var localctx = new VarContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, SynphParser.RULE_var);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 151;
        this.name();
        this.state = 152;
        this.match(SynphParser.T__2);
        this.state = 153;
        this.body();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SubrangeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SynphParser.RULE_subrange;
    return this;
}

SubrangeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SubrangeContext.prototype.constructor = SubrangeContext;

SubrangeContext.prototype.Do = function() {
    return this.getToken(SynphParser.Do, 0);
};

SubrangeContext.prototype.BlockStart = function() {
    return this.getToken(SynphParser.BlockStart, 0);
};

SubrangeContext.prototype.body = function() {
    return this.getTypedRuleContext(BodyContext,0);
};

SubrangeContext.prototype.BlockEnd = function() {
    return this.getToken(SynphParser.BlockEnd, 0);
};

SubrangeContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

SubrangeContext.prototype.enterRule = function(listener) {
    if(listener instanceof SynphListener ) {
        listener.enterSubrange(this);
	}
};

SubrangeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SynphListener ) {
        listener.exitSubrange(this);
	}
};




SynphParser.SubrangeContext = SubrangeContext;

SynphParser.prototype.subrange = function() {

    var localctx = new SubrangeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, SynphParser.RULE_subrange);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 155;
        this.match(SynphParser.Do);
        this.state = 156;
        this.match(SynphParser.BlockStart);
        this.state = 158;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
        if(la_===1) {
            this.state = 157;
            this.block();

        }
        this.state = 160;
        this.body();
        this.state = 161;
        this.match(SynphParser.BlockEnd);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SynphParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.alias = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AliasContext);
    } else {
        return this.getTypedRuleContext(AliasContext,i);
    }
};

BlockContext.prototype.End = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SynphParser.End);
    } else {
        return this.getToken(SynphParser.End, i);
    }
};


BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof SynphListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof SynphListener ) {
        listener.exitBlock(this);
	}
};




SynphParser.BlockContext = BlockContext;

SynphParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, SynphParser.RULE_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 163;
        this.alias();
        this.state = 170;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,24,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 165;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(_la===SynphParser.End) {
                    this.state = 164;
                    this.match(SynphParser.End);
                }

                this.state = 167;
                this.alias(); 
            }
            this.state = 172;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,24,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function RootContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SynphParser.RULE_root;
    return this;
}

RootContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RootContext.prototype.constructor = RootContext;

RootContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

RootContext.prototype.enterRule = function(listener) {
    if(listener instanceof SynphListener ) {
        listener.enterRoot(this);
	}
};

RootContext.prototype.exitRule = function(listener) {
    if(listener instanceof SynphListener ) {
        listener.exitRoot(this);
	}
};




SynphParser.RootContext = RootContext;

SynphParser.prototype.root = function() {

    var localctx = new RootContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, SynphParser.RULE_root);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 174;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SynphParser.NameID || _la===SynphParser.QuotRef) {
            this.state = 173;
            this.block();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.SynphParser = SynphParser;
