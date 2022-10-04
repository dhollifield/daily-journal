import { getJournalEntries, addNewEntry, fetchEntries } from './dataAccess.js'


document.getElementById("container").innerHTML = `
<header>
            <img src="/images/journal-logo-2022.JPG" alt="Deanna Logo">
            <h3 class="journal-tag-line">A Daily Journal of Deanna Hollifield</h3>
        </header>

        <section>
        
        <form class="entryform" id="entryForm">

            <fieldset class="entry-boxes" id="entryDate">
                <label for="entryDate">Date of Entry</label>
                <input type="date" name="entryDate" class="entryForm__date">
            </fieldset>

            <fieldset class="entry-boxes">
                <label for="conceptsCovered">Concepts Covered</label>
                <textarea id="conceptsCovered" name="conceptsCovered" rows="1" cols="10"></textarea>
            </fieldset>

            <fieldset class="entry-boxes">
                <label for="journalEntry">Journal Entry</label>
                <textarea id="journalEntry" name="journalEntry" rows="5" cols="10"></textarea>
            </fieldset>

            <fieldset class="entry-boxes">
                <label for="mood">Mood for the Day</label>
                <select id="mood" name="mood">
                    <option value="&#128522">GOOD &#128522 </option>
                    <option value="&#128526">CONFIDENT &#128526</option>
                    <option value="&#128532">UNSURE &#128532</option>
                    <option value="&#128533">CONFUSED &#128533</option>
                    <option value="&#128534">OVERWHELMED &#128534</option>
                </select>
            </fieldset>

            <button type="button" id="recordButton" class="record-button">Record Journal Entry</button>

        </form>

        </section>

        <section class="journalEntries">
            <h2 class="journal-entries-heading">Journal Entries</h2>
            <div id="journalEntries"></div>
        </section>
        `;

const displayEntries = async () => {
    await fetchEntries()
    const journalEntries = getJournalEntries()

    let allEntries = ""

    for(let i = 0; i < journalEntries.length; i++) {
        allEntries += `
        <div class="entry">
            <p class="entryForm__date">${journalEntries[i].date}</p>
            <p class="entry-concept">${journalEntries[i].concept}</p>
            <p class="entry-entry">${journalEntries[i].entry}</p>
            <p class="entry-mood">${journalEntries[i].mood}</p>
            <button type="button" id="editButton">Edit</button>
            <button type="button" id="deleteButton">Delete</button>
        </div>`
    }

document.getElementById("journalEntries").innerHTML = allEntries

}

displayEntries()

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("stateChanged", (event) => {
    displayEntries()
 });

// Add the Event Listener

document.addEventListener("click", (event) => {
    if (event.target.id === "recordButton") {
        const dateOfEntry = document.querySelector('input[type="date"]').value;
        const entryConcepts = document.getElementById("conceptsCovered").value;
        const entryText = document.getElementById("journalEntry").value;
        const entryMood = document.getElementById("mood").value;

        const newJournalEntry = {
            date: dateOfEntry,
            concept: entryConcepts,
            entry: entryText,
            mood: entryMood
        };
        addNewEntry(newJournalEntry);
    };
});





// Array.from(document.querySelectorAll("#entryForm input textarea option")).reduce((acc, input) => ({...acc, [input.id]: input.value}), {});