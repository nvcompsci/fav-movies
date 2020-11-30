console.log(loadData())

function loadData() {
    //JSON - Javascript Object Notation
    const movies = [
    
    {
        //key : value
        "name" : "Star Wars Episode IV",
        "genre" : "Sci-Fi",
        "reviews" : [
            {
                "rating" : 5,
                "like" : true,
                "user" : {
                    "name" : "John Word",
                    "gender" : "male",
                    "region" : "USA"
                }
            },
            {
                "rating" : 2,
                "like" : false,
                "user" : {
                    "name" : "Josephine Orelia",
                    "gender" : "female",
                    "region" : "France"
                }
            }
        ]
    },

    {
        //key : value
        "name" : "The Notebook",
        "genre" : "Romantic Comedy",
        "reviews" : []
    }

    ]

    return {
        "movies" : movies
    }
}