class GhibliApi {
  constructor() {
    this.baseUrl = "https://ghibliapi.herokuapp.com";
    this.endpoints = {
     "/:entry"
    };

    this.registerEvents();
  }

  registerEvents(){
    const form = document.querySelector("#ghibli-form");
    const input = form.querySelector("#entry");
    

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const inputEntry = inputField.value.trim();
        this.getResults(inputEntry,(data) => ()

    })

    getResults(userEntry) {
        const url = `${this.baseUrl}${this.endpoints.films}`.replace(":entry", userEntry);
        console.log(url);

        $.getJSON(url.done((data) => callback(data));
        }
    }
}

const findMovies = new GhibliApi();