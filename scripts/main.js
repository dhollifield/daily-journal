// console.log("Working on js")

const journalEntries = [
    {
        id: 1,
        date: "7/09/2022",
        concept: "Dev Tools Research",
        entry: "We broke up into study groups of 4-5 people per team. Each group was assigned a dev tool to research. Our team researched Git & Github. I enjoyed my first team made up of me, Eric, Robert, and Jeremy. We broke down our presentation into 4 slides that each one of us presented to the rest of our cohort.",
        mood: "Good"
    },
    {
        id: 2,
        date: "7/11/2022",
        concept: "Dev Tools, HTML",
        entry: "The various study groups presented the dev tools they had researched. This included the Terminal, VS Code, Markdown, Keyboard Shortcuts, and Sprints/SCRUM. Everyone did a great job presenting their topics and then Lynn answered questions submitted by all the teams.",
        mood: "Confident"
    },
    {
        id: 3,
        date: "7/12/2022",
        concept: "Terminal, HTML",
        entry: "Lynn demontrated using the Terminal to navigate directories, make new directories (folders), make new files, move in an out of directories, and serve our HTML to a webpage.",
        mood: "Confused"
    },
    {   
        id: 4,
        date: "7/18/2022",
        concept: "Git/Github",
        entry: "We learned abuot Git and Github including how to work with a team on the same repositories in Github. This was very overwhelming and I have had to take diligent notes about the process, which I have to use every time I interact with Github.",
        mood: "Overwhelmed"
    }
]
// console.log(journalEntries)

for (const journalEntry of journalEntries) {
    console.log(journalEntry.entry)
}

for (const journalEntry of journalEntries) {
    console.log(journalEntry.concept)
}

for (const journalEntry of journalEntries) {
    if ((journalEntry.id % 2) != 0) {
    console.log(journalEntry.id)
    } 
}
