import { InputStream, CommonTokenStream } from 'antlr4';
import { SynphLexer } from '../../antlr/SynphLexer';
import { SynphParser } from '../../antlr/SynphParser';

let code = `array {
    '[' value(',')* ']'
}`
let chars = new InputStream(code)
let lexer = new SynphLexer(chars)
let tokens = new CommonTokenStream(lexer)
let parser = new SynphParser(tokens)
parser.buildParseTrees = true
var tree = parser.root()

console.log(tree)