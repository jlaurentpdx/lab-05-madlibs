const submitButton = document.getElementById('submit');
const amendments = document.getElementById('amendments');
// First Amendment Input
const noun1Input = document.getElementById('noun-1-input');
const noun2Input = document.getElementById('noun-2-input');
const noun3Input = document.getElementById('noun-3-input');
const verb1Input = document.getElementById('verb-1-input');
//First Amendment Span
const noun1Span = document.getElementById('noun-1-span');
const noun2Span = document.getElementById('noun-2-span');
const noun3Span = document.getElementById('noun-3-span');
const verb1Span = document.getElementById('verb-1-span');

//Second Amendment Input
const noun4Input = document.getElementById('noun-4-input');
const noun5Input = document.getElementById('noun-5-input');
const noun6Input = document.getElementById('noun-6-input');
const verb2Input = document.getElementById('verb-2-input');

//Second Amendment Span
const noun4Span = document.getElementById('noun-4-span');
const noun5Span = document.getElementById('noun-5-span');
const noun6Span = document.getElementById('noun-6-span');
const verb2Span = document.getElementById('verb-2-span');

submitButton.addEventListener('click', () => {
    amendments.classList.remove('hidden');

});

