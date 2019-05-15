// Generated from ./Synph.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SynphParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface SynphVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `SynphParser.name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitName?: (ctx: NameContext) => Result;

	/**
	 * Visit a parse tree produced by `SynphParser.group`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroup?: (ctx: GroupContext) => Result;

	/**
	 * Visit a parse tree produced by `SynphParser.orGroup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrGroup?: (ctx: OrGroupContext) => Result;

	/**
	 * Visit a parse tree produced by `SynphParser.andGroup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndGroup?: (ctx: AndGroupContext) => Result;

	/**
	 * Visit a parse tree produced by `SynphParser.token`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitToken?: (ctx: TokenContext) => Result;

	/**
	 * Visit a parse tree produced by `SynphParser.range`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRange?: (ctx: RangeContext) => Result;

	/**
	 * Visit a parse tree produced by `SynphParser.not`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNot?: (ctx: NotContext) => Result;

	/**
	 * Visit a parse tree produced by `SynphParser.ignore`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIgnore?: (ctx: IgnoreContext) => Result;

	/**
	 * Visit a parse tree produced by `SynphParser.body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBody?: (ctx: BodyContext) => Result;

	/**
	 * Visit a parse tree produced by `SynphParser.alias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlias?: (ctx: AliasContext) => Result;

	/**
	 * Visit a parse tree produced by `SynphParser.loop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoop?: (ctx: LoopContext) => Result;

	/**
	 * Visit a parse tree produced by `SynphParser.loopBy`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoopBy?: (ctx: LoopByContext) => Result;

	/**
	 * Visit a parse tree produced by `SynphParser.var`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVar?: (ctx: VarContext) => Result;

	/**
	 * Visit a parse tree produced by `SynphParser.subrange`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubrange?: (ctx: SubrangeContext) => Result;

	/**
	 * Visit a parse tree produced by `SynphParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `SynphParser.root`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRoot?: (ctx: RootContext) => Result;
}

