import Popper from "popper.js";
window.jQuery = $;
window.$ = $;

require("bootstrap");

("use strict");

/**
 * Enter a github username into a form and send this form to the Github API, to
 * retrieve a list of all the user's repositories.
 *
 * [ x ] 1. Register the "submit" event for the form, to be send
 *         => Prevent the default behaviour
 * [ x ] 1. Method to call the API and send the username
 * [ x ] 1. Method to filter the data (we don't need all information)
 * [ x ] 1. Method to generate the needed HTML
 * [ x ] 1. Method to write the HTML to the DOM
 * [ x ] 1. Method to refresh the HTML in the DOM
 */

class GithubApi {
  // Setting up the properties, we need in our class
  constructor() {
    this.apiUrl = "https://api.github.com";
    this.userRepositoriesEndpoint = "/users/:username/repos";

    // Registering the form events
    this.registerEvents();
  }

  registerEvents() {
    // Get the needed elements
    const form = document.querySelector("#username-form");
    const input = form.querySelector("input");

    // Add the event, when the form is submitted
    form.addEventListener("submit", e => {
      // Prevent the default to stop sending the form to the URL by the browser
      e.preventDefault();

      // Get the username from the input field
      const username = input.value.trim();

      // Call another method (to split code for readability) that reads the
      // repositories from the Github API and pass a callback (again => readability)
      // that works on that data.
      this.getRepositories(username, repositories => {
        // Filter the repositories to the data we need (as it is having too many properties)
        repositories = this.filterRepositoryResults(repositories);

        // Generate the HTML markup for the list of repositories
        const markup = this.parseListTemplate(repositories);

        // Update the DIV element to have the new markup inside
        document.querySelector("#repositories").innerHTML = markup;
      });
    });
  }

  getRepositories(username, callback) {
    // Create the URL, replacing the username (as seen in the documentation of the Github API)
    // with the username that was given in the input field.
    const url = `${this.apiUrl}${this.userRepositoriesEndpoint}`.replace(":username", encodeURIComponent(username));

    console.log("get data", url);

    // Calling the API (= opening that URL with a request of the browser)
    $.getJSON(url).done(data => {
      // Call the callback function, that is used to handle the result we get
      // from the Github API server, once the data is there
      callback(data);
    });

    console.log("HELLLO");
  }

  filterRepositoryResults(repositoryData) {
    console.log("filter data", repositoryData);

    // Filter the repositories to a limited set of properties
    const repositories = repositoryData.map(repository => {
      return {
        description: repository.description,
        name: repository.name,
        url: repository.html_url,
        createdAt: repository.created_at,
      };
    });

    return repositories;
  }

  parseListTemplate(repositories) {
    console.log("parse list template", repositories);
    /*
       Loop all repositories, create an array of generated templates
       and join them as a String in the end, using nothing as separator
       (it uses comma, if you don't pass that argument)
    */

    return `
      <div class="list-group">
        ${repositories.map(repository => this.parseListItemTemplate(repository)).join("")}
      </div>
    `;
  }

  parseListItemTemplate(repository) {
    // Create the HTML markup for a single repository item
    // (using the .list-group-item class from bootstrap)
    return `
        <a href="${repository.url}"
           target="_blank"
           class="list-group-item list-group-item-action flex-column align-items-start ">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${repository.name}</h5>
            <small>${moment(repository.createdAt).fromNow()}</small>
          </div>
          <p class="mb-1">
            ${repository.description}
          </p>
        </a>
    `;
  }
}

const github = new GithubApi();
