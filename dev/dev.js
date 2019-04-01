const { spawn, spawnSync } = require('child_process')
const { watch } = require('fs')

const server_commands = [
    'server',
]

const commands = [
    'rollup:dev:server:watch',
    'tsc:dev:watch',
    'rollup:dev:watch',
]

const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm'
/**@type {(import 'child_process'.ChildProcess)[]}*/
const childs = []
/**@type {(import 'child_process'.ChildProcess)[]}*/
let server_childs = []

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

for (const cmd of server_commands) {
    let child = spawn(npm, ['run', cmd], {
        stdio: 'inherit',
        cwd: process.cwd(),
    })
    console.log(`================================================================================

[start:${child.pid}] \t${cmd}

================================================================================`)
    server_childs.push(child)
    child.on('close', close)
    function close() {
        console.log(`================================================================================

[close:${child.pid}] \t${cmd}

================================================================================`)
        if (is_exit) return
        const i = server_childs.indexOf(child)
        if (i != -1) {
            server_childs.splice(i, 1)
        }
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
        server_childs.push(child)
        child.on('close', close)
    }
}
function kill_server() {
    for (const child of server_childs) {
        console.log(`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
[kill:${child.pid}]
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`)
        if (process.platform === 'win32') {
            spawnSync('taskkill', ["/pid", child.pid, '/f', '/t'])
        } else {
            child.kill('SIGKILL')
        }
    }
    server_childs = []
}
watch(`${__dirname}/../test/server`, {
    recursive: true
}, kill_server)
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
    kill_server()
})
process.on('exit', () => {
    is_exit = true
    kill_childs()
    kill_server()
})