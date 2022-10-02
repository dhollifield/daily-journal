const applicationState = {
    entries: []
}

const API = "http://localhost:8088"

export const fetchEntries = async ()=> {
    const dataFetch = await fetch(`${API}/journalEntries`)
    const journalEntries = await dataFetch.json()
    applicationState.entries = journalEntries
}

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