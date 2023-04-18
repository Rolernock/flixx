// const apiUrl = 'https://api.themoviedb.org/3/movie/550?api_key=42b86bf192388ed473de8aea121740de'

const global = {
  currentPage: window.location.pathname,
  search: {
    term: '',
    type: '',
    page: 1,
    totalPages: 1,
    totalResults: 0,
  },
  api: {
    apiKey: '42b86bf192388ed473de8aea121740de',
    apiUrl: 'https://api.themoviedb.org/3/'
  }
}

//Display popular movies
async function displayPopularMovies() {
    const {results} = await fetchAPIData('movie/popular');
    results.forEach(movie => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <a href="/movie-details.html?id=${movie.id}">
        ${
            movie.poster_path ?
            `<img
            src="https://image.tmdb.org/t/p/w500/${movie.poster_path}"
            alt="${movie.title}"
            class="card-img-top"
            />`
            :
            `<img
            src='/images/no-image.jpg'
            alt='${movie.title}'
            class='card-img-top'
            />`
        }
            
         </a>
        <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">
            <small class="text-muted">Release: ${movie.release_date}</small>
            </p>
        </div>`
        document.querySelector('#popular-movies').appendChild(div)
    })
}

// Display TV Shows
async function displayPopularTvShow() {
        const { results } = await fetchAPIData('tv/popular');

    results.forEach(show => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <a href="/tv-details.html?id=${show.id}">
        ${
            show.poster_path ?
            `<img
            src="https://image.tmdb.org/t/p/w500/${show.poster_path}"
            alt="${show.name}"
            class="card-img-top"
            />`
            :
            `<img
            src='images/no-image.jpg
            alt='${show.name}'
            class='card-img-top'
            />`
        }
            
         </a>
        <div class="card-body">
            <h5 class="card-title">${show.name}</h5>
            <p class="card-text">
            <small class="text-muted">Air Date: ${show.first_air_date}</small>
            </p>
        </div>`
        document.querySelector('#popular-shows').appendChild(div)
    })
}
//Show and Hide Spinner
function showSpinner() {
    document.querySelector('.spinner').classList.add('show')
}
function hideSpinner() {
    document.querySelector('.spinner').classList.remove('show')
}

//Display Movie Ditails
async function displayMovieDetails() {
    const searchId = window.location.search.split('=')[1];
  const movie = await fetchAPIData(`movie/${searchId}`);


    const div = document.querySelector('#movie-details')
    div.innerHTML = `
    <div class="details-top">
          <div>
            <img
              src="https://image.tmdb.org/t/p/w500/${movie.poster_path}"
              class="card-img-top"
              alt="${movie.title}"
            />
          </div>
          <div>
            <h2>${movie.title}</h2>
            <p>
              <i class="fas fa-star text-primary"></i>
              ${movie.vote_average.toFixed(1)} / 10
            </p>
            <p class="text-muted">Release Date: ${movie.release_date}</p>
            <p>
              ${movie.overview}
            </p>
            <h5>Genres</h5>
            <ul class="list-group">
              ${movie.genres.map(genre => `<li>${genre.name}</li>`).join('')}
            </ul>
            <a href="${movie.homepage}" target="_blank" class="btn">Visit Movie Homepage</a>
          </div>
        </div>
        <div class="details-bottom">
          <h2>Movie Info</h2>
          <ul>
            <li><span class="text-secondary">Budget:</span> $${addCommas(movie.budget)}</li>
            <li><span class="text-secondary">Revenue:</span> $${addCommas(movie.revenue)}</li>
            <li><span class="text-secondary">Runtime:</span> ${movie.runtime} Minutes</li>
            <li><span class="text-secondary">Status:</span> ${movie.status}</li>
          </ul>
          <h4>Production Companies</h4>
          <div class="list-group">${movie.production_companies.map(names => `<li>${names.name}</li>`).join('')}</div>
        </div>
      </div>`
}

//Display popular movies
async function displayPopularMovies() {
    const {results} = await fetchAPIData('movie/popular');
    results.forEach(movie => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <a href="/movie-details.html?id=${movie.id}">
        ${
            movie.poster_path ?
            `<img
            src="https://image.tmdb.org/t/p/w500/${movie.poster_path}"
            alt="${movie.title}"
            class="card-img-top"
            />`
            :
            `<img
            src='/images/no-image.jpg'
            alt='${movie.title}'
            class='card-img-top'
            />`
        }
            
         </a>
        <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">
            <small class="text-muted">Release: ${movie.release_date}</small>
            </p>
        </div>`
        document.querySelector('#popular-movies').appendChild(div)
    })
}

// Display TV Shows
async function displayPopularTvShow() {
        const { results } = await fetchAPIData('tv/popular');

    results.forEach(show => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <a href="/tv-details.html?id=${show.id}">
        ${
            show.poster_path ?
            `<img
            src="https://image.tmdb.org/t/p/w500/${show.poster_path}"
            alt="${show.name}"
            class="card-img-top"
            />`
            :
            `<img
            src='images/no-image.jpg
            alt='${show.name}'
            class='card-img-top'
            />`
        }
            
         </a>
        <div class="card-body">
            <h5 class="card-title">${show.name}</h5>
            <p class="card-text">
            <small class="text-muted">Air Date: ${show.first_air_date}</small>
            </p>
        </div>`
        document.querySelector('#popular-shows').appendChild(div)
    })
}
//Show and Hide Spinner
function showSpinner() {
    document.querySelector('.spinner').classList.add('show')
}
function hideSpinner() {
    document.querySelector('.spinner').classList.remove('show')
}

//Display Show Details
async function displayShowDetails() {
    const searchId = window.location.search.split('=')[1];
  const show = await fetchAPIData(`tv/${searchId}`);
  
    const div = document.querySelector('#show-details')
    div.innerHTML = `
    <div class="details-top">
          <div>
            <img
              src="https://image.tmdb.org/t/p/w500/${show.poster_path}"
              class="card-img-top"
              alt="${show.name}"
            />
          </div>
          <div>
            <h2>${show.name}</h2>
            <p>
              <i class="fas fa-star text-primary"></i>
              ${show.vote_average.toFixed(1)} / 10
            </p>
            <p class="text-muted">Last Air Date: ${show.last_air_date}</p>
            <p>
              ${show.overview}
            </p>
            <h5>Genres</h5>
            <ul class="list-group">
              ${show.genres.map(genre => `<li>${genre.name}</li>`).join('')}
            </ul>
            <a href="${show.homepage}" target="_blank" class="btn">Visit Movie Homepage</a>
          </div>
        </div>
        <div class="details-bottom">
          <h2>Show Info</h2>
          <ul>
            <li><span class="text-secondary">Number of Episodes:</span> ${show.number_of_episodes}</li>
            <li><span class="text-secondary">Last Episode to Air:</span> ${show.last_episode_to_air.name}</li>
            <li><span class="text-secondary">Status:</span> ${show.status}</li>
          </ul>
          <h4>Production Companies</h4>
          <div class="list-group">${show.production_companies.map(names => `<li>${names.name}</li>`).join('')}</div>
        </div>
      </div>`
}


//Display Slider
async function displaySlider() {
  const { results } = await fetchAPIData('movie/now_playing');
  results.forEach(movie => {
    const div = document.createElement('div');
    div.classList.add('swiper-slide');
    div.innerHTML = `
    <a href="movie-details.html?id=${movie.id}">
    <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}"/>
    </a>
    <h4 class="swiper-rating">
    <i class="fas fa-star text-secondary"></i> ${movie.vote_average.toFixed(1)} / 10</h4>`

    document.querySelector('.swiper-wrapper').appendChild(div);

    swiperInit();
  })
}

function swiperInit() {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    breakpoints: {
      500: {
        slidesPerView: 2
      },
      700: {
        slidesPerView: 3
      },
      1200: {
        slidesPerView: 4
      },
    }
  })
}

// Search Movies / Shows
async function search() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  global.search.type = urlParams.get('type');
  global.search.term = urlParams.get('search-term');


  if (global.search.term !== '' && global.search.term !== null) {
    const { results, total_pages, page, total_results } = await searchAPIData();

    global.search.page = page;
    global.search.totalPages = total_pages;
    global.search.totalResults = total_results;
    
    if (results.length === 0) {
      showAlert('No Results Found!');
      return;
    }
    displaySearchResults(results);

  } else {
      showAlert('Please enter a search term')
  }
  document.querySelector('#search-term').value = '';
}


// Display Search Results
function displaySearchResults(results) {

  // clear previous results
  document.querySelector('#search-results').innerHTML = '';
  document.querySelector('#pagination').innerHTML = '';
  results.forEach(result => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <a href="/${global.search.type}-details.html?id=${result.id}">
        ${
            result.poster_path ?
            `<img
            src="https://image.tmdb.org/t/p/w500/${result.poster_path}"
            alt="${global.search.type === 'movie' ? result.title : result.name}"
            class="card-img-top"
            />`
            :
            `<img
            src='/images/no-image.jpg'
            alt='${global.search.type === 'movie' ? result.title : result.name}}'
            class='card-img-top'
            />`
        }
            
         </a>
        <div class="card-body">
            <h5 class="card-title">${global.search.type === 'movie' ? result.title : result.name}</h5>
            <p class="card-text">
            <small class="text-muted">Release: ${global.search.type === 'movie' ? result.release_date : result.first_air_date}</small>
            </p>
        </div>`
        document.querySelector('#search-results-heading').innerHTML = 
          `
          <h2>${results.length} of ${global.search.totalResults} RESULTS FOR ${global.search.term}</h2>
          `
        document.querySelector('#search-results').appendChild(div)
  })
  displayPagination();
}

// Create and display pagination for search
function displayPagination() {
  const div = document.createElement('div');
  div.classList.add('pagination')
  div.innerHTML = 
    `
          <button class="btn btn-primary" id="prev">Prev</button>
          <button class="btn btn-primary" id="next">Next</button>
          <div class="page-counter">Page ${global.search.page} of ${global.search.totalPages}</div>
    `
  document.querySelector('#pagination').appendChild(div);

  // disable first page of prev
  if (global.search.page === 1) {
    document.querySelector('#prev').disabled = true;
  }

  // disable last page of next
  console.log(global.search.page);
  if (global.search.page === global.search.totalPages) {
    document.querySelector('#next').disabled = true;
  }

  //Next page
  document.querySelector('#next').addEventListener('click', async () => {
    global.search.page++;
    const { results, total_pages } = await searchAPIData();
    displaySearchResults(results);

  //Previous page
    document.querySelector('#prev').addEventListener('click', async () => {
      global.search.page--;
      const { results, total_pages } = await searchAPIData();
      displaySearchResults(results);
    })
  })
}

//Fetch data from TMBD api
async function fetchAPIData(endpoint) {
    API_KEY = global.api.apiKey;
    API_URL = global.api.apiUrl;
    showSpinner();
    const response = await fetch(`${API_URL}${endpoint}?api_key=${API_KEY}`)
    const data = await response.json();
    hideSpinner();
    return data;
}

//Make request to search
async function searchAPIData() {
    API_KEY = global.api.apiKey;
    API_URL = global.api.apiUrl;
    showSpinner();
    const response = await fetch(`${API_URL}search/${global.search.type}?api_key=${API_KEY}&query=${global.search.term}&page=${global.search.page}`)
    const data = await response.json();
    hideSpinner();
    return data;
}


//Show alert
function showAlert(message, className = 'error') {
  const alertEl = document.createElement('div');
  alertEl.classList.add('alert', className);
  alertEl.appendChild(document.createTextNode(message));
  document.querySelector('#alert').appendChild(alertEl)
      setTimeout(() => {
        alertEl.remove();
    }, 2000)
}

function addCommas(num) {
  // Convert the number to a string
  let numStr = num.toString();

  // Split the string into an array of digits
  let digits = numStr.split("");

  // Initialize an empty array to hold the formatted number
  let formattedNum = [];

  // Loop through the digits, starting from the end
  for (let i = digits.length - 1, j = 0; i >= 0; i--, j++) {
    // Add the current digit to the formatted number array
    formattedNum.unshift(digits[i]);

    // Add a comma after every third digit
    if (j % 3 === 2 && i !== 0) {
      formattedNum.unshift(",");
    }
  }

  // Join the array into a string and return it
  return formattedNum.join("");
}


// Highlight active link
function highlightActiveLink() {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        if (global.currentPage === link.getAttribute('href')) {
            link.classList.add('active')
        }
    })
}

// Init App
function init() {
    switch (global.currentPage) {
        case '/':
        case '/index.html':
        displayPopularMovies();
        displaySlider();
            break;
        case '/shows.html':
            displayPopularTvShow();
            break;
        case '/movie-details.html':
            displayMovieDetails();
            break;
        case '/tv-details.html':
            displayShowDetails();
            break;
      case '/search.html':
        search();
        default:
            break;
    }
    highlightActiveLink();
}

document.addEventListener('DOMContentLoaded', init);    
