const fs = require('fs')
const chalk = require('chalk')
const getNotes = () => {
    return 'Your notess...'
}
const addNote = (title,body)=>{
    const notes = loadNotes()
    const duplicateNote = notes.find((note)=>note.title===title)
    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
     })
     saveNotes(notes)
     console.log(chalk.green('New Note added'))
    }
    else{
        console.log(chalk.red('Note title taken'))
    }
}
const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON) 
}
const loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }
    
}
const removeNotes = (title)=>{
    const notes = loadNotes()
    const notestokeep = notes.filter((note)=>note.title!==title)
    if(notestokeep.length===notes.length || notes.length===0){
        console.log(chalk.red(title+' Note not found'))
    }
    else{
        console.log(chalk.green(title+' Note removed'))
    }
    saveNotes(notestokeep)
}
const listNotes = ()=>{
    const notes = loadNotes()
    console.log(chalk.inverse('Your Notes'))
    notes.forEach((note) => {
        console.log(note.title)
    })
}
const readNotes =(title)=>{
    const notes = loadNotes()
    const requiredNote = notes.find((note)=>note.title===title)
    if(!requiredNote){
        console.log(chalk.red('note Not found!'))
    }
    else{
        console.log(requiredNote.title)
        console.log(requiredNote.body)
    }
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNotes: removeNotes,
    listNotes :listNotes,
    readNotes: readNotes
}