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
 fetchCountries(searchQuery).then(renderCountries)


}




function renderCountries(countries) { 
    






function onClean() {
    refs.countryList.innerHTML = '';
    refs.countryInfo.innerHTML = '';
}














}

