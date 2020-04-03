const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
//Customize yargs version
yargs.version('1.1.0')
// add,remove, read, list
// create add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note Body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})
// create remove command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe:'Title of note to be deleted',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
})
//List command
yargs.command({
    command:'list',
    describe:'List the notes',
    handler(){
        notes.listNotes()
    }
})
//Read command
yargs.command({
    command:'read',
    describe:'Read a Note',
    builder:{
        title:{
            describe:'Title of the note to read',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})
yargs.parse()
//console.log(yargs.argv)