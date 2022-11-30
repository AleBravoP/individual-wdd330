// const form = document.forms[0];
// const [input,button] = form.elements;

// pegriloso:
// input.addEventListener('focus', () => alert('focused'), false);

// form.addEventListener ('submit', makeHero, false);

// function search(event) {
//     alert(`You searched for: ${input.value}`);
//     event.preventDefault();
// }

// input.addEventListener('focus', function(){
//     if (input.value==='Search Here') {
//         input.value = '' 
//     }
// }, false);

// input.addEventListener('blur', function(){
//     if(input.value === '') {
//         input.value = 'Search Here';
//     } }, false);

navigator.geolocation.getCurrentPosition(youAreHere);
function youAreHere(position) {
    console.log(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`); 
}

const heroForm = document.forms['hero'];
heroForm.heroName.addEventListener('keyup',disableSubmit,false);
heroForm.addEventListener('submit',validate,false);
heroForm.addEventListener('submit', makeHero, false);

function makeHero(event) {

    event.preventDefault(); // prevent the form from being submitted

    const hero = {}; // create an empty object

    hero.name = heroForm.heroName.value; // create a name property based on the input field's value
    hero.realName = heroForm.realName.value; 
    console.log (hero.realName);

    hero.powers = [];
    for (let i=0; i < heroForm.powers.length; i++) {
        if (heroForm.powers[i].checked) {
            hero.powers.push(heroForm.powers[i].value);
        }
    }
    // Same as above for:
    // hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);
    console.log(hero.powers);

    hero.category = heroForm.category.value;
    console.log(hero.category);

    hero.city = heroForm.city.value;
    console.log(hero.city);

    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
    
    localStorage.setItem('superman', JSON.stringify(hero));
    superman = JSON.parse(localStorage.getItem('superman'));

    return hero;
}


function validate(event) {
    const firstLetter = heroForm.heroName.value[0];
    if (firstLetter.toUpperCase() === 'X') {
        event.preventDefault();
        alert('Your name is not allowed to start with X!');
    }
}


const label = heroForm.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is not allowed to start with X.';
label.append(error);

function validateInline() {
    const heroName = this.value.toUpperCase();
    if(heroName.startsWith('X')){
    error.style.display = 'block';
    } else {
    error.style.display = 'none';
    }
}

function disableSubmit(event) {
    if(event.target.value === ''){
        document.getElementById('submit').disabled = true;
    } else {
        document.getElementById('submit').disabled = false;
    }
}