const quoteUrl = "https://api.quotable.io/random";


const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const notesTextArea = document.getElementById('notes');
const saveNotesButton = document.getElementById('save-notes');
const savedNotesContent = document.getElementById('saved-notes-content');


async function fetchQuote() {
    try {
        const response = await fetch(quoteUrl);
        const data = await response.json();
        quoteElement.textContent = `"${data.content}"`;
        authorElement.textContent = `- ${data.author}`;
    } catch (error) {
        quoteElement.textContent = "Failed to fetch quote.";
        authorElement.textContent = "";
    }
}


function saveNotes() {
    const notes = notesTextArea.value;
    if (notes) {
        localStorage.setItem("userNotes", notes);
        displaySavedNotes();
    } else {
        alert("Please enter some notes.");
    }
}


function displaySavedNotes() {
    const savedNotes = localStorage.getItem("userNotes");
    if (savedNotes) {
        savedNotesContent.textContent = savedNotes;
    } else {
        savedNotesContent.textContent = "No saved notes yet.";
    }
}


saveNotesButton.addEventListener('click', saveNotes);


fetchQuote();
displaySavedNotes();
