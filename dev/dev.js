const { spawn } = require('child_process')

const commands = [
    'tsc:dev:watch',
    'rollup:dev:watch',
    'rollup:dev:server:watch',
    'server'
]

const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm'
const childs = []
for (const cmd of commands) {
    childs.push(spawn(npm, ['run', cmd], {
        stdio: 'inherit',
        cwd: process.cwd(),
    }))
}