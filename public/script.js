let newsbody = document.getElementById('news-body');
let sportsbody = document.getElementById('sports-body');
let businessbody = document.getElementById('business-body');
let technologybody = document.getElementById('technology-body');
let entertainmentbody = document.getElementById('entertainment-body');
let healthbody = document.getElementById('health-body');
let sciencebody = document.getElementById('science-body');

// Creating ajax get request
const topheadlines = new XMLHttpRequest();
const sports = new XMLHttpRequest();
const business = new XMLHttpRequest();
const technology = new XMLHttpRequest();
const entertainment = new XMLHttpRequest();
const health = new XMLHttpRequest();
const science = new XMLHttpRequest();

topheadlines.open('GET', `https://newsapi.org/v2/top-headlines?apiKey=6dbfe97f492d4ad38c063fb53d86e57e&country=in`, true);
sports.open('GET', `https://newsapi.org/v2/top-headlines?apiKey=6dbfe97f492d4ad38c063fb53d86e57e&category=sports&country=in`, true);
business.open('GET', `https://newsapi.org/v2/top-headlines?apiKey=6dbfe97f492d4ad38c063fb53d86e57e&category=business&country=in`, true);
technology.open('GET', `https://newsapi.org/v2/top-headlines?apiKey=6dbfe97f492d4ad38c063fb53d86e57e&category=technology&country=in`, true);
entertainment.open('GET', `https://newsapi.org/v2/top-headlines?apiKey=6dbfe97f492d4ad38c063fb53d86e57e&category=entertainment&country=in`, true);
health.open('GET', `https://newsapi.org/v2/top-headlines?apiKey=6dbfe97f492d4ad38c063fb53d86e57e&category=health&country=in`, true);
science.open('GET', `https://newsapi.org/v2/top-headlines?apiKey=6dbfe97f492d4ad38c063fb53d86e57e&category=science&country=in`, true);

// Response is ready
topheadlines.onload = function() {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element) {
            let news = `<div class="card" style="width: 24rem;">
            <img src="${element.urlToImage}" class="card-img-top" alt="Unable to load the image">
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <div class="date">${element.publishedAt.substr(0,10)}</div>
                <p class="card-text">${element.description}</p>
                <a href="${element.url}" target="_blank" class="btn btn-primary">Visit article</a>
            </div>
            </div>`;
            newsHtml += news;
        });
        newsbody.innerHTML = newsHtml;
    } else {
        console.log("Error")
    }
}

sports.onload = function() {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element) {
            let news = `<div class="card" style="width: 24rem;">
            <img src="${element.urlToImage}" class="card-img-top" alt="Unable to load the image">
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <div class="date">${element.publishedAt.substr(0,10)}</div>
                <p class="card-text">${element.description}</p>
                <a href="${element.url}" target="_blank" class="btn btn-primary">Visit article</a>
            </div>
            </div>`;
            newsHtml += news;
        });
        sportsbody.innerHTML = newsHtml;
    } else {
        console.log("Error")
    }
}

business.onload = function() {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element) {
            let news = `<div class="card" style="width: 24rem;">
            <img src="${element.urlToImage}" class="card-img-top" alt="Unable to load the image">
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <div class="date">${element.publishedAt.substr(0,10)}</div>
                <p class="card-text">${element.description}</p>
                <a href="${element.url}" target="_blank" class="btn btn-primary">Visit article</a>
            </div>
            </div>`;
            newsHtml += news;
        });
        businessbody.innerHTML = newsHtml;
    } else {
        console.log("Error")
    }
}

technology.onload = function() {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element) {
            let news = `<div class="card" style="width: 24rem;">
            <img src="${element.urlToImage}" class="card-img-top" alt="Unable to load the image">
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <div class="date">${element.publishedAt.substr(0,10)}</div>
                <p class="card-text">${element.description}</p>
                <a href="${element.url}" target="_blank" class="btn btn-primary">Visit article</a>
            </div>
            </div>`;
            newsHtml += news;
        });
        technologybody.innerHTML = newsHtml;
    } else {
        console.log("Error")
    }
}

entertainment.onload = function() {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element) {
            let news = `<div class="card" style="width: 24rem;">
            <img src="${element.urlToImage}" class="card-img-top" alt="Unable to load the image">
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <div class="date">${element.publishedAt.substr(0,10)}</div>
                <p class="card-text">${element.description}</p>
                <a href="${element.url}" target="_blank" class="btn btn-primary">Visit article</a>
            </div>
            </div>`;
            newsHtml += news;
        });
        entertainmentbody.innerHTML = newsHtml;
    } else {
        console.log("Error")
    }
}

health.onload = function() {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element) {
            let news = `<div class="card" style="width: 24rem;">
            <img src="${element.urlToImage}" class="card-img-top" alt="Unable to load the image">
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <div class="date">${element.publishedAt.substr(0,10)}</div>
                <p class="card-text">${element.description}</p>
                <a href="${element.url}" target="_blank" class="btn btn-primary">Visit article</a>
            </div>
            </div>`;
            newsHtml += news;
        });
        healthbody.innerHTML = newsHtml;
    } else {
        console.log("Error")
    }
}

science.onload = function() {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element) {
            let news = `<div class="card" style="width: 24rem;">
            <img src="${element.urlToImage}" class="card-img-top" alt="Unable to load the image">
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <div class="date">${element.publishedAt.substr(0,10)}</div>
                <p class="card-text">${element.description}</p>
                <a href="${element.url}" target="_blank" class="btn btn-primary">Visit article</a>
            </div>
            </div>`;
            newsHtml += news;
        });
        sciencebody.innerHTML = newsHtml;
    } else {
        console.log("Error")
    }
}

topheadlines.send();
sports.send();
business.send();
technology.send();
entertainment.send();
health.send();
science.send();