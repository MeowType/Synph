// Generated from ./Synph.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { NameContext } from "./SynphParser";
import { GroupContext } from "./SynphParser";
import { OrGroupContext } from "./SynphParser";
import { AndGroupContext } from "./SynphParser";
import { TokenContext } from "./SynphParser";
import { RangeContext } from "./SynphParser";
import { NotContext } from "./SynphParser";
import { IgnoreContext } from "./SynphParser";
import { BodyContext } from "./SynphParser";
import { AliasContext } from "./SynphParser";
import { LoopContext } from "./SynphParser";
import { LoopByContext } from "./SynphParser";
import { VarContext } from "./SynphParser";
import { SubrangeContext } from "./SynphParser";
import { BlockContext } from "./SynphParser";
import { RootContext } from "./SynphParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `SynphParser`.
 */
export interface SynphListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `SynphParser.name`.
	 * @param ctx the parse tree
	 */
	enterName?: (ctx: NameContext) => void;
	/**
	 * Exit a parse tree produced by `SynphParser.name`.
	 * @param ctx the parse tree
	 */
	exitName?: (ctx: NameContext) => void;

	/**
	 * Enter a parse tree produced by `SynphParser.group`.
	 * @param ctx the parse tree
	 */
	enterGroup?: (ctx: GroupContext) => void;
	/**
	 * Exit a parse tree produced by `SynphParser.group`.
	 * @param ctx the parse tree
	 */
	exitGroup?: (ctx: GroupContext) => void;

	/**
	 * Enter a parse tree produced by `SynphParser.orGroup`.
	 * @param ctx the parse tree
	 */
	enterOrGroup?: (ctx: OrGroupContext) => void;
	/**
	 * Exit a parse tree produced by `SynphParser.orGroup`.
	 * @param ctx the parse tree
	 */
	exitOrGroup?: (ctx: OrGroupContext) => void;

	/**
	 * Enter a parse tree produced by `SynphParser.andGroup`.
	 * @param ctx the parse tree
	 */
	enterAndGroup?: (ctx: AndGroupContext) => void;
	/**
	 * Exit a parse tree produced by `SynphParser.andGroup`.
	 * @param ctx the parse tree
	 */
	exitAndGroup?: (ctx: AndGroupContext) => void;

	/**
	 * Enter a parse tree produced by `SynphParser.token`.
	 * @param ctx the parse tree
	 */
	enterToken?: (ctx: TokenContext) => void;
	/**
	 * Exit a parse tree produced by `SynphParser.token`.
	 * @param ctx the parse tree
	 */
	exitToken?: (ctx: TokenContext) => void;

	/**
	 * Enter a parse tree produced by `SynphParser.range`.
	 * @param ctx the parse tree
	 */
	enterRange?: (ctx: RangeContext) => void;
	/**
	 * Exit a parse tree produced by `SynphParser.range`.
	 * @param ctx the parse tree
	 */
	exitRange?: (ctx: RangeContext) => void;

	/**
	 * Enter a parse tree produced by `SynphParser.not`.
	 * @param ctx the parse tree
	 */
	enterNot?: (ctx: NotContext) => void;
	/**
	 * Exit a parse tree produced by `SynphParser.not`.
	 * @param ctx the parse tree
	 */
	exitNot?: (ctx: NotContext) => void;

	/**
	 * Enter a parse tree produced by `SynphParser.ignore`.
	 * @param ctx the parse tree
	 */
	enterIgnore?: (ctx: IgnoreContext) => void;
	/**
	 * Exit a parse tree produced by `SynphParser.ignore`.
	 * @param ctx the parse tree
	 */
	exitIgnore?: (ctx: IgnoreContext) => void;

	/**
	 * Enter a parse tree produced by `SynphParser.body`.
	 * @param ctx the parse tree
	 */
	enterBody?: (ctx: BodyContext) => void;
	/**
	 * Exit a parse tree produced by `SynphParser.body`.
	 * @param ctx the parse tree
	 */
	exitBody?: (ctx: BodyContext) => void;

	/**
	 * Enter a parse tree produced by `SynphParser.alias`.
	 * @param ctx the parse tree
	 */
	enterAlias?: (ctx: AliasContext) => void;
	/**
	 * Exit a parse tree produced by `SynphParser.alias`.
	 * @param ctx the parse tree
	 */
	exitAlias?: (ctx: AliasContext) => void;

	/**
	 * Enter a parse tree produced by `SynphParser.loop`.
	 * @param ctx the parse tree
	 */
	enterLoop?: (ctx: LoopContext) => void;
	/**
	 * Exit a parse tree produced by `SynphParser.loop`.
	 * @param ctx the parse tree
	 */
	exitLoop?: (ctx: LoopContext) => void;

	/**
	 * Enter a parse tree produced by `SynphParser.loopBy`.
	 * @param ctx the parse tree
	 */
	enterLoopBy?: (ctx: LoopByContext) => void;
	/**
	 * Exit a parse tree produced by `SynphParser.loopBy`.
	 * @param ctx the parse tree
	 */
	exitLoopBy?: (ctx: LoopByContext) => void;

	/**
	 * Enter a parse tree produced by `SynphParser.var`.
	 * @param ctx the parse tree
	 */
	enterVar?: (ctx: VarContext) => void;
	/**
	 * Exit a parse tree produced by `SynphParser.var`.
	 * @param ctx the parse tree
	 */
	exitVar?: (ctx: VarContext) => void;

	/**
	 * Enter a parse tree produced by `SynphParser.subrange`.
	 * @param ctx the parse tree
	 */
	enterSubrange?: (ctx: SubrangeContext) => void;
	/**
	 * Exit a parse tree produced by `SynphParser.subrange`.
	 * @param ctx the parse tree
	 */
	exitSubrange?: (ctx: SubrangeContext) => void;

	/**
	 * Enter a parse tree produced by `SynphParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `SynphParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `SynphParser.root`.
	 * @param ctx the parse tree
	 */
	enterRoot?: (ctx: RootContext) => void;
	/**
	 * Exit a parse tree produced by `SynphParser.root`.
	 * @param ctx the parse tree
	 */
	exitRoot?: (ctx: RootContext) => void;
}

