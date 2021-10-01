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

//Third Amendment Input
const noun7Input = document.getElementById('noun-7-input');
const noun8Input = document.getElementById('noun-8-input');
const noun9Input = document.getElementById('noun-9-input');
const noun10Input = document.getElementById('noun-10-input');

//Third Amendment Span
const noun7Span = document.getElementById('noun-7-span');
const noun8Span = document.getElementById('noun-8-span');
const noun9Span = document.getElementById('noun-9-span');
const noun10Span = document.getElementById('noun-10-span');

const nounInputList = [noun1Input, noun2Input, noun3Input, noun4Input, noun5Input, noun6Input, noun7Input, noun8Input, noun9Input, noun10Input];
const nounSpanList = [noun1Span, noun2Span, noun3Span, noun4Span, noun5Span, noun6Span, noun7Span, noun8Span, noun9Span, noun10Span];

const verbInputList = [];
const verbSpanList = [];

submitButton.addEventListener('click', () => {
    for (let i = 0; i < 11; i++) {
        nounSpanList[i].textContent = nounInputList[i].value;
    }

    for (let i = 0; i < 3; i++) {
        verbSpanList[i].textContent = verbInputList[i].value;
    }


    
    amendments.classList.remove('hidden');

});

