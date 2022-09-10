const journalEntries = [
    {
        id: 1,
        date: "2022-07-09",
        concept: "Dev Tools Research",
        entry: "We broke up into study groups of 4-5 people. Each group was assigned a dev tool to research. My team researched Git/Github. My team was the HTMLites made up of me, Erica, Robert, and Jeremy. We presented 4 slides to the rest of our cohort.",
        mood: "&#128522"
    },
    {
        id: 2,
        date: "2022-07-11",
        concept: "Dev Tools, HTML",
        entry: "The various study groups presented the dev tools they had researched. This included the Terminal, VS Code, Markdown, Keyboard Shortcuts, and Sprints/SCRUM. Everyone did a great job presenting their topics and then Lynn answered questions submitted by all the teams.",
        mood: "&#128526"
    },
    {
        id: 3,
        date: "2022-07-12",
        concept: "Terminal, HTML",
        entry: "Lynn demontrated using the Terminal to navigate directories, make new directories (folders), make new files, move in an out of directories, and serve our HTML to a webpage.",
        mood: "&#128533"
    },
    {   
        id: 4,
        date: "2022-07-18",
        concept: "Git/Github",
        entry: "We learned about Git and Github including how to work with a team on the same repositories in Github. This was very overwhelming and I have had to take diligent notes about the process, which I have to use every time I interact with Github.",
        mood: "&#128534"
    }
]

export const getJournalEntries = () => {
    const copyOfEntries = journalEntries.map(entry => ({...entry}))
    return copyOfEntries
}

const getNewJournalEntryId = () => {
    const entriesCopy = getJournalEntries();
    let highestOrderId = 0
    if (journalEntries.length > 0) {
        highestOrderId = entriesCopy.sort((a, b) => b.id -a.id)[0].id
    }
    return highestOrderId + 1
}

export const addNewEntry = (entry) => {
    const newId = getNewJournalEntryId();
    entry.id = newId;
    journalEntries.push(entry)
    document.dispatchEvent(new CustomEvent("stateChanged"))
}



// const getNewJournalEntriesId = () => {
//     const entriesCopy = getJournalEntries()
//     let highestOrderId = entriesCopy.sort((a, b) => b.id - a.id)[0].id
//     return highestOrderId + 1
// }

// export const addNewEntry = (entry) => {
//     const newId = getNewJournalEntriesId();
//     copyOfEntries.id = newId;
//     journalEntries.push(entry);
//     document.dispatchEvent(new CustomEvent("stateChanged"))
// }

// NEW ENTRY: 2022/09/10 | Event Listeners | Today the Scrum Lordz worked on separate Event Listener exercises/projects. My focus today was on updating my Daily Journal with Event Listeners. This has been a real struggle for me. | UNSURE