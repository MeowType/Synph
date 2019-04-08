const { spawn, spawnSync } = require('child_process')

const commands = [
    'rollup:dev:watch',
    'server'
]

const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm'
/**@type {(import 'child_process'.ChildProcess)[]}*/
const childs = []

let is_exit = false

for (const cmd of commands) {
    let child = spawn(npm, ['run', cmd], {
        stdio: 'inherit',
        cwd: process.cwd(),
    })
    console.log(`================================================================================

[start:${child.pid}] \t${cmd}

================================================================================`)
    childs.push(child)
    child.on('close', close)
    function close() {
        console.log(`================================================================================

[close:${child.pid}] \t${cmd}

================================================================================`)
        if (is_exit) return
        childs.splice(childs.indexOf(child), 1)
        if (process.platform === 'win32') {
            spawnSync('taskkill', ["/pid", child.pid, '/f', '/t'])
        } else {
            child.kill('SIGKILL')
        }
        child = spawn(npm, ['run', cmd], {
            stdio: 'inherit',
            cwd: process.cwd(),
        })
        console.log(`================================================================================

[start:${child.pid}] \t${cmd}

================================================================================`)
        childs.push(child)
        child.on('close', close)
    }
}

function kill_childs() {
    for (const child of childs) {
        console.log(`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

[kill:${child.pid}]

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`)
        if (process.platform === 'win32') {
            spawnSync('taskkill', ["/pid", child.pid, '/f', '/t'])
        } else {
            child.kill('SIGKILL')
        }
    }
    childs = []
}
process.on('beforeExit', () => {
    is_exit = true
    kill_childs()
})
process.on('exit', () => {
    is_exit = true
    kill_childs()
})