// Generated from ./Synph.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { SynphListener } from "./SynphListener";
import { SynphVisitor } from "./SynphVisitor";


export class SynphParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly WS = 4;
	public static readonly LINE = 5;
	public static readonly BlockStart = 6;
	public static readonly BlockEnd = 7;
	public static readonly OrBlockStart = 8;
	public static readonly OrBlockEnd = 9;
	public static readonly AndBlockStart = 10;
	public static readonly Do = 11;
	public static readonly Not = 12;
	public static readonly Ignore = 13;
	public static readonly Range = 14;
	public static readonly NameID = 15;
	public static readonly String = 16;
	public static readonly QuotRef = 17;
	public static readonly SpecialChar = 18;
	public static readonly Suffix = 19;
	public static readonly LoopType = 20;
	public static readonly End = 21;
	public static readonly RULE_name = 0;
	public static readonly RULE_group = 1;
	public static readonly RULE_orGroup = 2;
	public static readonly RULE_andGroup = 3;
	public static readonly RULE_token = 4;
	public static readonly RULE_range = 5;
	public static readonly RULE_not = 6;
	public static readonly RULE_ignore = 7;
	public static readonly RULE_body = 8;
	public static readonly RULE_alias = 9;
	public static readonly RULE_loop = 10;
	public static readonly RULE_loopBy = 11;
	public static readonly RULE_var = 12;
	public static readonly RULE_subrange = 13;
	public static readonly RULE_block = 14;
	public static readonly RULE_root = 15;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"name", "group", "orGroup", "andGroup", "token", "range", "not", "ignore", 
		"body", "alias", "loop", "loopBy", "var", "subrange", "block", "root",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "'='", undefined, undefined, "'{'", "'}'", "'['", 
		"']'", "'&['", "'do'", "'~'", "'!'", "'-'", undefined, undefined, undefined, 
		undefined, "'i'", undefined, "';'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "WS", "LINE", "BlockStart", 
		"BlockEnd", "OrBlockStart", "OrBlockEnd", "AndBlockStart", "Do", "Not", 
		"Ignore", "Range", "NameID", "String", "QuotRef", "SpecialChar", "Suffix", 
		"LoopType", "End",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SynphParser._LITERAL_NAMES, SynphParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SynphParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Synph.g4"; }

	// @Override
	public get ruleNames(): string[] { return SynphParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return SynphParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(SynphParser._ATN, this);
	}
	// @RuleVersion(0)
	public name(): NameContext {
		let _localctx: NameContext = new NameContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SynphParser.RULE_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 32;
			_la = this._input.LA(1);
			if (!(_la === SynphParser.NameID || _la === SynphParser.QuotRef)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public group(): GroupContext {
		let _localctx: GroupContext = new GroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, SynphParser.RULE_group);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 34;
			this.match(SynphParser.BlockStart);
			this.state = 38;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SynphParser.BlockStart) | (1 << SynphParser.OrBlockStart) | (1 << SynphParser.AndBlockStart) | (1 << SynphParser.Do) | (1 << SynphParser.Not) | (1 << SynphParser.Ignore) | (1 << SynphParser.NameID) | (1 << SynphParser.String) | (1 << SynphParser.QuotRef) | (1 << SynphParser.SpecialChar))) !== 0)) {
				{
				{
				this.state = 35;
				this.body();
				}
				}
				this.state = 40;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 41;
			this.match(SynphParser.BlockEnd);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public orGroup(): OrGroupContext {
		let _localctx: OrGroupContext = new OrGroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, SynphParser.RULE_orGroup);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 43;
			this.match(SynphParser.OrBlockStart);
			this.state = 47;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SynphParser.BlockStart) | (1 << SynphParser.OrBlockStart) | (1 << SynphParser.AndBlockStart) | (1 << SynphParser.Do) | (1 << SynphParser.Not) | (1 << SynphParser.Ignore) | (1 << SynphParser.NameID) | (1 << SynphParser.String) | (1 << SynphParser.QuotRef) | (1 << SynphParser.SpecialChar))) !== 0)) {
				{
				{
				this.state = 44;
				this.body();
				}
				}
				this.state = 49;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 50;
			this.match(SynphParser.OrBlockEnd);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public andGroup(): AndGroupContext {
		let _localctx: AndGroupContext = new AndGroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, SynphParser.RULE_andGroup);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 52;
			this.match(SynphParser.AndBlockStart);
			this.state = 56;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SynphParser.BlockStart) | (1 << SynphParser.OrBlockStart) | (1 << SynphParser.AndBlockStart) | (1 << SynphParser.Do) | (1 << SynphParser.Not) | (1 << SynphParser.Ignore) | (1 << SynphParser.NameID) | (1 << SynphParser.String) | (1 << SynphParser.QuotRef) | (1 << SynphParser.SpecialChar))) !== 0)) {
				{
				{
				this.state = 53;
				this.body();
				}
				}
				this.state = 58;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 59;
			this.match(SynphParser.OrBlockEnd);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public token(): TokenContext {
		let _localctx: TokenContext = new TokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, SynphParser.RULE_token);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 61;
			this.match(SynphParser.String);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public range(): RangeContext {
		let _localctx: RangeContext = new RangeContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, SynphParser.RULE_range);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 63;
			this.token();
			this.state = 64;
			this.match(SynphParser.Range);
			this.state = 65;
			this.token();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public not(): NotContext {
		let _localctx: NotContext = new NotContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, SynphParser.RULE_not);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 67;
			this.match(SynphParser.Not);
			this.state = 68;
			this.body();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ignore(): IgnoreContext {
		let _localctx: IgnoreContext = new IgnoreContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, SynphParser.RULE_ignore);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 70;
			this.match(SynphParser.Ignore);
			this.state = 71;
			this.body();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public body(): BodyContext {
		let _localctx: BodyContext = new BodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, SynphParser.RULE_body);
		let _la: number;
		try {
			this.state = 132;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 73;
				this.not();
				this.state = 75;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
				case 1:
					{
					this.state = 74;
					this.loop();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 77;
				this.subrange();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 78;
				this.ignore();
				this.state = 80;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
				case 1:
					{
					this.state = 79;
					this.loop();
					}
					break;
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 82;
				this.group();
				this.state = 84;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SynphParser.Suffix) {
					{
					this.state = 83;
					this.match(SynphParser.Suffix);
					}
				}

				this.state = 87;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
				case 1:
					{
					this.state = 86;
					this.loop();
					}
					break;
				}
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 89;
				this.orGroup();
				this.state = 91;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SynphParser.Suffix) {
					{
					this.state = 90;
					this.match(SynphParser.Suffix);
					}
				}

				this.state = 94;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
				case 1:
					{
					this.state = 93;
					this.loop();
					}
					break;
				}
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 96;
				this.andGroup();
				this.state = 98;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SynphParser.Suffix) {
					{
					this.state = 97;
					this.match(SynphParser.Suffix);
					}
				}

				this.state = 101;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
				case 1:
					{
					this.state = 100;
					this.loop();
					}
					break;
				}
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 103;
				this.name();
				this.state = 105;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
				case 1:
					{
					this.state = 104;
					this.loop();
					}
					break;
				}
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 107;
				this.range();
				this.state = 109;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SynphParser.Suffix) {
					{
					this.state = 108;
					this.match(SynphParser.Suffix);
					}
				}

				this.state = 112;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
				case 1:
					{
					this.state = 111;
					this.loop();
					}
					break;
				}
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 114;
				this.token();
				this.state = 116;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SynphParser.Suffix) {
					{
					this.state = 115;
					this.match(SynphParser.Suffix);
					}
				}

				this.state = 119;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
				case 1:
					{
					this.state = 118;
					this.loop();
					}
					break;
				}
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 121;
				this.match(SynphParser.SpecialChar);
				this.state = 123;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SynphParser.Suffix) {
					{
					this.state = 122;
					this.match(SynphParser.Suffix);
					}
				}

				this.state = 126;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
				case 1:
					{
					this.state = 125;
					this.loop();
					}
					break;
				}
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 128;
				this.var();
				this.state = 130;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
				case 1:
					{
					this.state = 129;
					this.loop();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alias(): AliasContext {
		let _localctx: AliasContext = new AliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, SynphParser.RULE_alias);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 134;
			this.name();
			this.state = 135;
			this.body();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public loop(): LoopContext {
		let _localctx: LoopContext = new LoopContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, SynphParser.RULE_loop);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 138;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SynphParser.T__0) {
				{
				this.state = 137;
				this.loopBy();
				}
			}

			this.state = 140;
			this.match(SynphParser.LoopType);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public loopBy(): LoopByContext {
		let _localctx: LoopByContext = new LoopByContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, SynphParser.RULE_loopBy);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 142;
			this.match(SynphParser.T__0);
			this.state = 146;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SynphParser.BlockStart) | (1 << SynphParser.OrBlockStart) | (1 << SynphParser.AndBlockStart) | (1 << SynphParser.Do) | (1 << SynphParser.Not) | (1 << SynphParser.Ignore) | (1 << SynphParser.NameID) | (1 << SynphParser.String) | (1 << SynphParser.QuotRef) | (1 << SynphParser.SpecialChar))) !== 0)) {
				{
				{
				this.state = 143;
				this.body();
				}
				}
				this.state = 148;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 149;
			this.match(SynphParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public var(): VarContext {
		let _localctx: VarContext = new VarContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, SynphParser.RULE_var);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 151;
			this.name();
			this.state = 152;
			this.match(SynphParser.T__2);
			this.state = 153;
			this.body();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public subrange(): SubrangeContext {
		let _localctx: SubrangeContext = new SubrangeContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, SynphParser.RULE_subrange);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 155;
			this.match(SynphParser.Do);
			this.state = 156;
			this.match(SynphParser.BlockStart);
			this.state = 158;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				{
				this.state = 157;
				this.block();
				}
				break;
			}
			this.state = 160;
			this.body();
			this.state = 161;
			this.match(SynphParser.BlockEnd);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, SynphParser.RULE_block);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 163;
			this.alias();
			this.state = 170;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 165;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === SynphParser.End) {
						{
						this.state = 164;
						this.match(SynphParser.End);
						}
					}

					this.state = 167;
					this.alias();
					}
					}
				}
				this.state = 172;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public root(): RootContext {
		let _localctx: RootContext = new RootContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, SynphParser.RULE_root);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 174;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SynphParser.NameID || _la === SynphParser.QuotRef) {
				{
				this.state = 173;
				this.block();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x17\xB3\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x03\x02\x03\x02\x03" +
		"\x03\x03\x03\x07\x03\'\n\x03\f\x03\x0E\x03*\v\x03\x03\x03\x03\x03\x03" +
		"\x04\x03\x04\x07\x040\n\x04\f\x04\x0E\x043\v\x04\x03\x04\x03\x04\x03\x05" +
		"\x03\x05\x07\x059\n\x05\f\x05\x0E\x05<\v\x05\x03\x05\x03\x05\x03\x06\x03" +
		"\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\t\x03\t\x03" +
		"\t\x03\n\x03\n\x05\nN\n\n\x03\n\x03\n\x03\n\x05\nS\n\n\x03\n\x03\n\x05" +
		"\nW\n\n\x03\n\x05\nZ\n\n\x03\n\x03\n\x05\n^\n\n\x03\n\x05\na\n\n\x03\n" +
		"\x03\n\x05\ne\n\n\x03\n\x05\nh\n\n\x03\n\x03\n\x05\nl\n\n\x03\n\x03\n" +
		"\x05\np\n\n\x03\n\x05\ns\n\n\x03\n\x03\n\x05\nw\n\n\x03\n\x05\nz\n\n\x03" +
		"\n\x03\n\x05\n~\n\n\x03\n\x05\n\x81\n\n\x03\n\x03\n\x05\n\x85\n\n\x05" +
		"\n\x87\n\n\x03\v\x03\v\x03\v\x03\f\x05\f\x8D\n\f\x03\f\x03\f\x03\r\x03" +
		"\r\x07\r\x93\n\r\f\r\x0E\r\x96\v\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xA1\n\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x10\x03\x10\x05\x10\xA8\n\x10\x03\x10\x07\x10\xAB\n\x10\f\x10" +
		"\x0E\x10\xAE\v\x10\x03\x11\x05\x11\xB1\n\x11\x03\x11\x02\x02\x02\x12\x02" +
		"\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
		"\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\x02\x03\x04\x02\x11\x11" +
		"\x13\x13\x02\xC5\x02\"\x03\x02\x02\x02\x04$\x03\x02\x02\x02\x06-\x03\x02" +
		"\x02\x02\b6\x03\x02\x02\x02\n?\x03\x02\x02\x02\fA\x03\x02\x02\x02\x0E" +
		"E\x03\x02\x02\x02\x10H\x03\x02\x02\x02\x12\x86\x03\x02\x02\x02\x14\x88" +
		"\x03\x02\x02\x02\x16\x8C\x03\x02\x02\x02\x18\x90\x03\x02\x02\x02\x1A\x99" +
		"\x03\x02\x02\x02\x1C\x9D\x03\x02\x02\x02\x1E\xA5\x03\x02\x02\x02 \xB0" +
		"\x03\x02\x02\x02\"#\t\x02\x02\x02#\x03\x03\x02\x02\x02$(\x07\b\x02\x02" +
		"%\'\x05\x12\n\x02&%\x03\x02\x02\x02\'*\x03\x02\x02\x02(&\x03\x02\x02\x02" +
		"()\x03\x02\x02\x02)+\x03\x02\x02\x02*(\x03\x02\x02\x02+,\x07\t\x02\x02" +
		",\x05\x03\x02\x02\x02-1\x07\n\x02\x02.0\x05\x12\n\x02/.\x03\x02\x02\x02" +
		"03\x03\x02\x02\x021/\x03\x02\x02\x0212\x03\x02\x02\x0224\x03\x02\x02\x02" +
		"31\x03\x02\x02\x0245\x07\v\x02\x025\x07\x03\x02\x02\x026:\x07\f\x02\x02" +
		"79\x05\x12\n\x0287\x03\x02\x02\x029<\x03\x02\x02\x02:8\x03\x02\x02\x02" +
		":;\x03\x02\x02\x02;=\x03\x02\x02\x02<:\x03\x02\x02\x02=>\x07\v\x02\x02" +
		">\t\x03\x02\x02\x02?@\x07\x12\x02\x02@\v\x03\x02\x02\x02AB\x05\n\x06\x02" +
		"BC\x07\x10\x02\x02CD\x05\n\x06\x02D\r\x03\x02\x02\x02EF\x07\x0E\x02\x02" +
		"FG\x05\x12\n\x02G\x0F\x03\x02\x02\x02HI\x07\x0F\x02\x02IJ\x05\x12\n\x02" +
		"J\x11\x03\x02\x02\x02KM\x05\x0E\b\x02LN\x05\x16\f\x02ML\x03\x02\x02\x02" +
		"MN\x03\x02\x02\x02N\x87\x03\x02\x02\x02O\x87\x05\x1C\x0F\x02PR\x05\x10" +
		"\t\x02QS\x05\x16\f\x02RQ\x03\x02\x02\x02RS\x03\x02\x02\x02S\x87\x03\x02" +
		"\x02\x02TV\x05\x04\x03\x02UW\x07\x15\x02\x02VU\x03\x02\x02\x02VW\x03\x02" +
		"\x02\x02WY\x03\x02\x02\x02XZ\x05\x16\f\x02YX\x03\x02\x02\x02YZ\x03\x02" +
		"\x02\x02Z\x87\x03\x02\x02\x02[]\x05\x06\x04\x02\\^\x07\x15\x02\x02]\\" +
		"\x03\x02\x02\x02]^\x03\x02\x02\x02^`\x03\x02\x02\x02_a\x05\x16\f\x02`" +
		"_\x03\x02\x02\x02`a\x03\x02\x02\x02a\x87\x03\x02\x02\x02bd\x05\b\x05\x02" +
		"ce\x07\x15\x02\x02dc\x03\x02\x02\x02de\x03\x02\x02\x02eg\x03\x02\x02\x02" +
		"fh\x05\x16\f\x02gf\x03\x02\x02\x02gh\x03\x02\x02\x02h\x87\x03\x02\x02" +
		"\x02ik\x05\x02\x02\x02jl\x05\x16\f\x02kj\x03\x02\x02\x02kl\x03\x02\x02" +
		"\x02l\x87\x03\x02\x02\x02mo\x05\f\x07\x02np\x07\x15\x02\x02on\x03\x02" +
		"\x02\x02op\x03\x02\x02\x02pr\x03\x02\x02\x02qs\x05\x16\f\x02rq\x03\x02" +
		"\x02\x02rs\x03\x02\x02\x02s\x87\x03\x02\x02\x02tv\x05\n\x06\x02uw\x07" +
		"\x15\x02\x02vu\x03\x02\x02\x02vw\x03\x02\x02\x02wy\x03\x02\x02\x02xz\x05" +
		"\x16\f\x02yx\x03\x02\x02\x02yz\x03\x02\x02\x02z\x87\x03\x02\x02\x02{}" +
		"\x07\x14\x02\x02|~\x07\x15\x02\x02}|\x03\x02\x02\x02}~\x03\x02\x02\x02" +
		"~\x80\x03\x02\x02\x02\x7F\x81\x05\x16\f\x02\x80\x7F\x03\x02\x02\x02\x80" +
		"\x81\x03\x02\x02\x02\x81\x87\x03\x02\x02\x02\x82\x84\x05\x1A\x0E\x02\x83" +
		"\x85\x05\x16\f\x02\x84\x83\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85" +
		"\x87\x03\x02\x02\x02\x86K\x03\x02\x02\x02\x86O\x03\x02\x02\x02\x86P\x03" +
		"\x02\x02\x02\x86T\x03\x02\x02\x02\x86[\x03\x02\x02\x02\x86b\x03\x02\x02" +
		"\x02\x86i\x03\x02\x02\x02\x86m\x03\x02\x02\x02\x86t\x03\x02\x02\x02\x86" +
		"{\x03\x02\x02\x02\x86\x82\x03\x02\x02\x02\x87\x13\x03\x02\x02\x02\x88" +
		"\x89\x05\x02\x02\x02\x89\x8A\x05\x12\n\x02\x8A\x15\x03\x02\x02\x02\x8B" +
		"\x8D\x05\x18\r\x02\x8C\x8B\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D" +
		"\x8E\x03\x02\x02\x02\x8E\x8F\x07\x16\x02\x02\x8F\x17\x03\x02\x02\x02\x90" +
		"\x94\x07\x03\x02\x02\x91\x93\x05\x12\n\x02\x92\x91\x03\x02\x02\x02\x93" +
		"\x96\x03\x02\x02\x02\x94\x92\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95" +
		"\x97\x03\x02\x02\x02\x96\x94\x03\x02\x02\x02\x97\x98\x07\x04\x02\x02\x98" +
		"\x19\x03\x02\x02\x02\x99\x9A\x05\x02\x02\x02\x9A\x9B\x07\x05\x02\x02\x9B" +
		"\x9C\x05\x12\n\x02\x9C\x1B\x03\x02\x02\x02\x9D\x9E\x07\r\x02\x02\x9E\xA0" +
		"\x07\b\x02\x02\x9F\xA1\x05\x1E\x10\x02\xA0\x9F\x03\x02\x02\x02\xA0\xA1" +
		"\x03\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2\xA3\x05\x12\n\x02\xA3\xA4" +
		"\x07\t\x02\x02\xA4\x1D\x03\x02\x02\x02\xA5\xAC\x05\x14\v\x02\xA6\xA8\x07" +
		"\x17\x02\x02\xA7\xA6\x03\x02\x02\x02\xA7\xA8\x03\x02\x02\x02\xA8\xA9\x03" +
		"\x02\x02\x02\xA9\xAB\x05\x14\v\x02\xAA\xA7\x03\x02\x02\x02\xAB\xAE\x03" +
		"\x02\x02\x02\xAC\xAA\x03\x02\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD\x1F\x03" +
		"\x02\x02\x02\xAE\xAC\x03\x02\x02\x02\xAF\xB1\x05\x1E\x10\x02\xB0\xAF\x03" +
		"\x02\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1!\x03\x02\x02\x02\x1C(1:MRVY]" +
		"`dgkorvy}\x80\x84\x86\x8C\x94\xA0\xA7\xAC\xB0";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SynphParser.__ATN) {
			SynphParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SynphParser._serializedATN));
		}

		return SynphParser.__ATN;
	}

}

export class NameContext extends ParserRuleContext {
	public NameID(): TerminalNode | undefined { return this.tryGetToken(SynphParser.NameID, 0); }
	public QuotRef(): TerminalNode | undefined { return this.tryGetToken(SynphParser.QuotRef, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SynphParser.RULE_name; }
	// @Override
	public enterRule(listener: SynphListener): void {
		if (listener.enterName) {
			listener.enterName(this);
		}
	}
	// @Override
	public exitRule(listener: SynphListener): void {
		if (listener.exitName) {
			listener.exitName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SynphVisitor<Result>): Result {
		if (visitor.visitName) {
			return visitor.visitName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupContext extends ParserRuleContext {
	public BlockStart(): TerminalNode { return this.getToken(SynphParser.BlockStart, 0); }
	public BlockEnd(): TerminalNode { return this.getToken(SynphParser.BlockEnd, 0); }
	public body(): BodyContext[];
	public body(i: number): BodyContext;
	public body(i?: number): BodyContext | BodyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BodyContext);
		} else {
			return this.getRuleContext(i, BodyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SynphParser.RULE_group; }
	// @Override
	public enterRule(listener: SynphListener): void {
		if (listener.enterGroup) {
			listener.enterGroup(this);
		}
	}
	// @Override
	public exitRule(listener: SynphListener): void {
		if (listener.exitGroup) {
			listener.exitGroup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SynphVisitor<Result>): Result {
		if (visitor.visitGroup) {
			return visitor.visitGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrGroupContext extends ParserRuleContext {
	public OrBlockStart(): TerminalNode { return this.getToken(SynphParser.OrBlockStart, 0); }
	public OrBlockEnd(): TerminalNode { return this.getToken(SynphParser.OrBlockEnd, 0); }
	public body(): BodyContext[];
	public body(i: number): BodyContext;
	public body(i?: number): BodyContext | BodyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BodyContext);
		} else {
			return this.getRuleContext(i, BodyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SynphParser.RULE_orGroup; }
	// @Override
	public enterRule(listener: SynphListener): void {
		if (listener.enterOrGroup) {
			listener.enterOrGroup(this);
		}
	}
	// @Override
	public exitRule(listener: SynphListener): void {
		if (listener.exitOrGroup) {
			listener.exitOrGroup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SynphVisitor<Result>): Result {
		if (visitor.visitOrGroup) {
			return visitor.visitOrGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AndGroupContext extends ParserRuleContext {
	public AndBlockStart(): TerminalNode { return this.getToken(SynphParser.AndBlockStart, 0); }
	public OrBlockEnd(): TerminalNode { return this.getToken(SynphParser.OrBlockEnd, 0); }
	public body(): BodyContext[];
	public body(i: number): BodyContext;
	public body(i?: number): BodyContext | BodyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BodyContext);
		} else {
			return this.getRuleContext(i, BodyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SynphParser.RULE_andGroup; }
	// @Override
	public enterRule(listener: SynphListener): void {
		if (listener.enterAndGroup) {
			listener.enterAndGroup(this);
		}
	}
	// @Override
	public exitRule(listener: SynphListener): void {
		if (listener.exitAndGroup) {
			listener.exitAndGroup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SynphVisitor<Result>): Result {
		if (visitor.visitAndGroup) {
			return visitor.visitAndGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TokenContext extends ParserRuleContext {
	public String(): TerminalNode { return this.getToken(SynphParser.String, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SynphParser.RULE_token; }
	// @Override
	public enterRule(listener: SynphListener): void {
		if (listener.enterToken) {
			listener.enterToken(this);
		}
	}
	// @Override
	public exitRule(listener: SynphListener): void {
		if (listener.exitToken) {
			listener.exitToken(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SynphVisitor<Result>): Result {
		if (visitor.visitToken) {
			return visitor.visitToken(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RangeContext extends ParserRuleContext {
	public token(): TokenContext[];
	public token(i: number): TokenContext;
	public token(i?: number): TokenContext | TokenContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TokenContext);
		} else {
			return this.getRuleContext(i, TokenContext);
		}
	}
	public Range(): TerminalNode { return this.getToken(SynphParser.Range, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SynphParser.RULE_range; }
	// @Override
	public enterRule(listener: SynphListener): void {
		if (listener.enterRange) {
			listener.enterRange(this);
		}
	}
	// @Override
	public exitRule(listener: SynphListener): void {
		if (listener.exitRange) {
			listener.exitRange(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SynphVisitor<Result>): Result {
		if (visitor.visitRange) {
			return visitor.visitRange(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NotContext extends ParserRuleContext {
	public Not(): TerminalNode { return this.getToken(SynphParser.Not, 0); }
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SynphParser.RULE_not; }
	// @Override
	public enterRule(listener: SynphListener): void {
		if (listener.enterNot) {
			listener.enterNot(this);
		}
	}
	// @Override
	public exitRule(listener: SynphListener): void {
		if (listener.exitNot) {
			listener.exitNot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SynphVisitor<Result>): Result {
		if (visitor.visitNot) {
			return visitor.visitNot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IgnoreContext extends ParserRuleContext {
	public Ignore(): TerminalNode { return this.getToken(SynphParser.Ignore, 0); }
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SynphParser.RULE_ignore; }
	// @Override
	public enterRule(listener: SynphListener): void {
		if (listener.enterIgnore) {
			listener.enterIgnore(this);
		}
	}
	// @Override
	public exitRule(listener: SynphListener): void {
		if (listener.exitIgnore) {
			listener.exitIgnore(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SynphVisitor<Result>): Result {
		if (visitor.visitIgnore) {
			return visitor.visitIgnore(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BodyContext extends ParserRuleContext {
	public not(): NotContext | undefined {
		return this.tryGetRuleContext(0, NotContext);
	}
	public loop(): LoopContext | undefined {
		return this.tryGetRuleContext(0, LoopContext);
	}
	public subrange(): SubrangeContext | undefined {
		return this.tryGetRuleContext(0, SubrangeContext);
	}
	public ignore(): IgnoreContext | undefined {
		return this.tryGetRuleContext(0, IgnoreContext);
	}
	public group(): GroupContext | undefined {
		return this.tryGetRuleContext(0, GroupContext);
	}
	public Suffix(): TerminalNode | undefined { return this.tryGetToken(SynphParser.Suffix, 0); }
	public orGroup(): OrGroupContext | undefined {
		return this.tryGetRuleContext(0, OrGroupContext);
	}
	public andGroup(): AndGroupContext | undefined {
		return this.tryGetRuleContext(0, AndGroupContext);
	}
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	public range(): RangeContext | undefined {
		return this.tryGetRuleContext(0, RangeContext);
	}
	public token(): TokenContext | undefined {
		return this.tryGetRuleContext(0, TokenContext);
	}
	public SpecialChar(): TerminalNode | undefined { return this.tryGetToken(SynphParser.SpecialChar, 0); }
	public var(): VarContext | undefined {
		return this.tryGetRuleContext(0, VarContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SynphParser.RULE_body; }
	// @Override
	public enterRule(listener: SynphListener): void {
		if (listener.enterBody) {
			listener.enterBody(this);
		}
	}
	// @Override
	public exitRule(listener: SynphListener): void {
		if (listener.exitBody) {
			listener.exitBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SynphVisitor<Result>): Result {
		if (visitor.visitBody) {
			return visitor.visitBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AliasContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SynphParser.RULE_alias; }
	// @Override
	public enterRule(listener: SynphListener): void {
		if (listener.enterAlias) {
			listener.enterAlias(this);
		}
	}
	// @Override
	public exitRule(listener: SynphListener): void {
		if (listener.exitAlias) {
			listener.exitAlias(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SynphVisitor<Result>): Result {
		if (visitor.visitAlias) {
			return visitor.visitAlias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoopContext extends ParserRuleContext {
	public LoopType(): TerminalNode { return this.getToken(SynphParser.LoopType, 0); }
	public loopBy(): LoopByContext | undefined {
		return this.tryGetRuleContext(0, LoopByContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SynphParser.RULE_loop; }
	// @Override
	public enterRule(listener: SynphListener): void {
		if (listener.enterLoop) {
			listener.enterLoop(this);
		}
	}
	// @Override
	public exitRule(listener: SynphListener): void {
		if (listener.exitLoop) {
			listener.exitLoop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SynphVisitor<Result>): Result {
		if (visitor.visitLoop) {
			return visitor.visitLoop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoopByContext extends ParserRuleContext {
	public body(): BodyContext[];
	public body(i: number): BodyContext;
	public body(i?: number): BodyContext | BodyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BodyContext);
		} else {
			return this.getRuleContext(i, BodyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SynphParser.RULE_loopBy; }
	// @Override
	public enterRule(listener: SynphListener): void {
		if (listener.enterLoopBy) {
			listener.enterLoopBy(this);
		}
	}
	// @Override
	public exitRule(listener: SynphListener): void {
		if (listener.exitLoopBy) {
			listener.exitLoopBy(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SynphVisitor<Result>): Result {
		if (visitor.visitLoopBy) {
			return visitor.visitLoopBy(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SynphParser.RULE_var; }
	// @Override
	public enterRule(listener: SynphListener): void {
		if (listener.enterVar) {
			listener.enterVar(this);
		}
	}
	// @Override
	public exitRule(listener: SynphListener): void {
		if (listener.exitVar) {
			listener.exitVar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SynphVisitor<Result>): Result {
		if (visitor.visitVar) {
			return visitor.visitVar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubrangeContext extends ParserRuleContext {
	public Do(): TerminalNode { return this.getToken(SynphParser.Do, 0); }
	public BlockStart(): TerminalNode { return this.getToken(SynphParser.BlockStart, 0); }
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	public BlockEnd(): TerminalNode { return this.getToken(SynphParser.BlockEnd, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SynphParser.RULE_subrange; }
	// @Override
	public enterRule(listener: SynphListener): void {
		if (listener.enterSubrange) {
			listener.enterSubrange(this);
		}
	}
	// @Override
	public exitRule(listener: SynphListener): void {
		if (listener.exitSubrange) {
			listener.exitSubrange(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SynphVisitor<Result>): Result {
		if (visitor.visitSubrange) {
			return visitor.visitSubrange(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public alias(): AliasContext[];
	public alias(i: number): AliasContext;
	public alias(i?: number): AliasContext | AliasContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AliasContext);
		} else {
			return this.getRuleContext(i, AliasContext);
		}
	}
	public End(): TerminalNode[];
	public End(i: number): TerminalNode;
	public End(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SynphParser.End);
		} else {
			return this.getToken(SynphParser.End, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SynphParser.RULE_block; }
	// @Override
	public enterRule(listener: SynphListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: SynphListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SynphVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RootContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SynphParser.RULE_root; }
	// @Override
	public enterRule(listener: SynphListener): void {
		if (listener.enterRoot) {
			listener.enterRoot(this);
		}
	}
	// @Override
	public exitRule(listener: SynphListener): void {
		if (listener.exitRoot) {
			listener.exitRoot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SynphVisitor<Result>): Result {
		if (visitor.visitRoot) {
			return visitor.visitRoot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


