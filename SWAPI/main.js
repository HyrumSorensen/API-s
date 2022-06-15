let button = document.querySelector('button')

function clicked(e) {
    console.log('button clicked!');
    axios.get('https://swapi.dev/api/planets/')
    .then((res) => {
        for(let i = 0; i < res.data.results.length; i++) {
            axios.get(`${res.data.results[i].url}`)
                .then((res) => {
                    let element = document.createElement("h2");
                    element.textContent = res.data.name;
                    document.querySelector('body').appendChild(element);
                })
        }
    })
}

button.addEventListener('click', clicked)

