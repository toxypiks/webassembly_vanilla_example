(module
 (func $print (import "js" "print") (param i32))
 (func (export "hello") (param i32) (param i32)
       local.get 0
       local.get 1
       i32.add
       call $print))
