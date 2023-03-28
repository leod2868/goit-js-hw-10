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
let searchQuery = ''
refs.searchBox.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {

 searchQuery = e.target.value.trim()
    onClean();
    if (searchQuery !== '') {
        fetchCountries(searchQuery).then(renderCountries)
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
        renderCountriesList();
    } else if (countries.length === 1) {
        renderCountry()
    };
}   

function renderCountriesList(countries) {}  




function renderCountry(countries) {}





function onClean() {
    refs.countryList.innerHTML = '';
    refs.countryInfo.innerHTML = '';
}
















