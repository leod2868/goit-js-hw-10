import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce'
import { fetchCountries } from './fetchCountries';
const DEBOUNCE_DELAY = 300;

const refs = {
    searchBox : document.querySelector('#search-box'),
    countryList : document.querySelector('.country-list'),
    countryInfo : document.querySelector('.country-info'),
}

refs.searchBox.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {

   const searchQuery = e.target.value.trim()
    onClean();
    if (searchQuery !== '') {
        fetchCountries(searchQuery).then(renderCountries).catch(error => {
            console.error(error)
        });
        }

}



function renderCountries(countries) {
    if (countries.length > 10) {
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name');
        return
    } else if (countries.length === 0) {
        Notiflix.Notify.failure('Oops, there is no country with that name');
        return
    } else if (countries.length >= 2 && countries.length <= 10) {
        renderCountriesList(countries);
    } else if (countries.length === 1) {
        renderCountry(countries)
    };
}   

function renderCountriesList(countries) {

    const markupList = countries.map(({ name, flags }) => {
        return `<li><img src='${flags.svg}' alt='${flags.alt}' width='50'>${name.offical}</li>`
    }).join('');
    refs.countryList.insertAdjacentHTML('beforeend', markupList);
};  


function renderCountry(countries) {

    const markupInfo = countries.map(({ name, capital, population, flags, languages }) => {

        return `<img src='${flags.svg}' alt='${name.offical}' width='70'>
                <h1>${name.offical}</h1>
                <p>Capital: ${capital}</p>
                <p>Population: ${population}</p>
                <p>Languages: ${Object.values(languages)}</p>`
    }).join('');
    refs.countryInfo.insertAdjacentHTML('beforeend', markupInfo);
};




function onClean() {
    refs.countryList.innerHTML = '';
    refs.countryInfo.innerHTML = '';
}
















