const amount = document.getElementById('Amount');
const to = document.getElementById('to');
const from = document.getElementById('From');
const convert = document.getElementById('convert');
const wrraper = document.getElementById('wrraper');
const rotate = document.getElementById('rotate');

function createCard() {
    return `
    <div id="Api">
        <h3>1,352,131.02</h3>
    </div>
    `;
}   
function createSelects (data) {
    return `
    <option value="${index}">${data.rates.value}{</option>
    `
}


document.addEventListener('DOMContentLoaded', function(e) {
    e.preventDefault();
        fetch('https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest', {
            method: 'GEt',
            headers: {
                'X-RapidAPI-Key': '7609f99e87msh998e8f0bcab10a3p1c7a47jsnbd2372b93f3d',
                'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
            }
        })
            .then(res => {
                if (res.status == 200 && res.success == true) {
                    return res.json();
                }
            })
        .then(data => {
            console.log(data);
            if (data.length) {
                data.forEach(element => {
                    const card = createSelects(element);
                    from.innerHTML += card;
                });
            }
        })
        .catch(err => {
            console.log(err);
        })
})
