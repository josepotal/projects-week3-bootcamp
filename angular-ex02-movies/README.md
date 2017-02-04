This application is using Angular routes to show the:
- /popular
`https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
- /upcoming
`/discover/movie?primary_release_date.lte=2014-10-22`
- /nowPlaying
`/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22`
- /topRated
`https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1`

By consuming from an API provided by: www.themoviedb.org
An example of request: 
```
https://api.themoviedb.org/3/movie/550?api_key=48915862a111fe6eaaa51e012de9bb33
```

The API key for my user is : 48915862a111fe6eaaa51e012de9bb33
