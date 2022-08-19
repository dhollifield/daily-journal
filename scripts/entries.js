const journalEntries = [
    {
        id: 1,
        date: "7/09/2022",
        concept: "Dev Tools Research",
        entry: "We broke up into study groups of 4-5 people. Each group was assigned a dev tool to research. My team researched Git/Github. My team was the HTMLites made up of me, Erica, Robert, and Jeremy. We presented 4 slides to the rest of our cohort.",
        mood: "&#128522"
    },
    {
        id: 2,
        date: "7/11/2022",
        concept: "Dev Tools, HTML",
        entry: "The various study groups presented the dev tools they had researched. This included the Terminal, VS Code, Markdown, Keyboard Shortcuts, and Sprints/SCRUM. Everyone did a great job presenting their topics and then Lynn answered questions submitted by all the teams.",
        mood: "&#128526"
    },
    {
        id: 3,
        date: "7/12/2022",
        concept: "Terminal, HTML",
        entry: "Lynn demontrated using the Terminal to navigate directories, make new directories (folders), make new files, move in an out of directories, and serve our HTML to a webpage.",
        mood: "&#128533"
    },
    {   
        id: 4,
        date: "7/18/2022",
        concept: "Git/Github",
        entry: "We learned abuot Git and Github including how to work with a team on the same repositories in Github. This was very overwhelming and I have had to take diligent notes about the process, which I have to use every time I interact with Github.",
        mood: "&#128534"
    }
]

export const getEntries = () => {
    const copyOfEntries = journalEntries.map(entry => ({...entry}))
    return copyOfEntries
}