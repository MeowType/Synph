# `.synph` Syntax
## alias
- \<new name> `=` \<old name>
## group
- `{` [group body] `}`
- \<group name\> `=` `{` [group body] `}`
## or group
- `[` [group body] `]`
- \<group name\> `=` `[` [group body] `]`
## and group
- `&[` [group body] `]`
- \<group name\> `=` `&[` [group body] `]`
## grammar
- \<no space grammar name>
- ``` ` ``` \<any grammar name> ``` ` ```
## token
- `'` \<token char> `'`
- `"` \<token char> `"`
## token range
- \<token> `-` \<token>
## loop
- \<any> \<loop type>
- \<any> '(' \<loop by> ')' \<loop type>
## loop type
|type|mean|  
|-|-|  
|`*`|any times|  
|`?`|0 or 1|  
|`+`|>=1|  
|`5`|just 5 times|  
|`0..5`|>=0 and <=5|  
|`..5`|<=5|  
|`5..` or `5+`|>=5|  
|`..<5` |<5|  
|`5<..`|>5|  
|`5?`|0 or 5|  
## not
- `~` \<any>
## special char
Special characters cannot be in the token string  
|char|mean|  
|-|-|  
|`u`|any unicode char|
|`d`|`'0'-'9'`|
|`n`|`\n`|
|`r`|`\r`|
|`f`|`\f`|
|`t`|`\t`|
|`4t`|x space tab|
|`nt`|new indented block|
|`n2t`|new x space indented block|
|`nmt`|new indented block, need more then last|
|`n2mt`|new x space indented block, need more then last|
|`et`|end indented block|
|`emt`|end indented block, need less then last|
|`w`|any unicode word|
|`aw`|any ascii word, `[ai d '_']`|
|`a`|`'a'-'z'`|
|`s`|any space char|
|`b`|word bound|
|`eof`|end of file|
## suffix
Suffixes can be used with special characters  
|suffix|mean|  
|-|-|  
|`i`|ignore case|
# JSON example
```synph
object = {
    '{' { key=string ':' value=value }(',')* '}'
}

array = {
    '[' value(',')* ']'
}

value = [
    string number object array
    'true' 'false' 'null'
]

string = {
    '"' [ char escape ]*  '"'
}
char = &[ u ~`all control character` ]
`control character` = [ '"' '\\' '/' 'b' 'f' 'n' 'r' 't' ]
`all control character` = [ `control character` 'u' ]
escape = {
    '\\' [ `control character` `escape escape` ]
}
`escape escape` = { 'u' `hexadecimal digits`4 }

number = {
    '-'? int { '.' digit+ }? index? 
}
digit = '0'-'9'
int = [ '0' { '1'-'9' digit* } ]
index = 'e'i ['+' '-']? digit+
```