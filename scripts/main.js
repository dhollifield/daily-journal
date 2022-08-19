import {getEntries} from './entries.js'

// console.log(journalEntries)


// for (const journalEntry of journalEntries) {
//     console.log(journalEntry.entry)
//     document.getElementById('entries').innerHTML = `<p>${journalEntry.entry}</p>`
// }

// for (const journalEntry of journalEntries) {
//     console.log(journalEntry.concept)
// }

// for (const journalEntry of journalEntries) {
//     if ((journalEntry.id % 2) != 0) {
//     console.log(journalEntry.id)
//     } 
// }

const displayEntries = () => {
    const journalEntries = getEntries()

    let allEntries = ""

    for(let i = 0; i < journalEntries.length; i++) {
        allEntries += `
        <div class="entry">
            <p class="entry-date">${journalEntries[i].date}</p>
            <p class="entry-concept">${journalEntries[i].concept}</p>
            <p class="entry-entry">${journalEntries[i].entry}</p>
            <p class="entry-mood">${journalEntries[i].mood}</p>
            <button type="button" id="editButton">Edit</button>
            <button type="button" id="deleteButton">Delete</button>
        </div>`
    }

document.getElementById("journalEntries").innerHTML += allEntries

}

displayEntries()