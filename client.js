const data = loadData()
console.log(data)
const $moviesList = document.getElementById("moviesList")

function renderMovies() {
    $moviesList.innerHTML = 
    data.movies.map(renderMovie).join('')
}

const renderMovie = movie => 
`<div>
    <h1>${movie.name}</h1>
    <ul>${movie.reviews.map(renderReview).join('')}</ul>
</div>`

const renderReview = review => `<li>${review.rating}</li>`

function loadData() {
    //JSON - Javascript Object Notation
    const movies = [

        {
            //key : value
            "name": "Star Wars Episode IV",
            "genre": "Sci-Fi",
            "reviews": [
                {
                    "rating": 5,
                    "like": true,
                    "user": {
                        "name": "John Word",
                        "gender": "male",
                        "region": "USA"
                    }
                },
                {
                    "rating": 2,
                    "like": false,
                    "user": {
                        "name": "Josephine Orelia",
                        "gender": "female",
                        "region": "France"
                    }
                }
            ]
        },
        {
            "name": "The Grinch",
            "reviews": [
                {
                    "rating": 3
                },
                {
                    "rating": 3
                },
                {
                    "rating": 3
                },
                {
                    "rating": 3
                },
                {
                    "rating": 4
                },
                {
                    "rating": 4
                },
            ]
        },

        {
            //key : value
            "name": "The Notebook",
            "genre": "Romantic Comedy",
            "reviews": []
        }

    ]

    return {
        "movies": movies
    }
}

renderMovies()