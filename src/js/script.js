import makeMarkup from '../templates/'
import {products} from '../js/data.js';

const data = {products};

const markup = makeMarkup(data);

document.body.insertAdjacentHTML(makeMarkup);

console.log(markup);
