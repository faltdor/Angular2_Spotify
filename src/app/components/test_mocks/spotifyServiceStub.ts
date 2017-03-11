import { Injectable } from '@angular/core';
import  {  Observable  }  from  'rxjs/Observable';
import  'rxjs/add/observable/of';

@Injectable()
export class SpotifyServiceStub  {
        album = { "artists":[{"name":"Batman"}],   
                 "id":"737rTqaakKjNKMvKl8uXLg",
                 "images":[
                    {
                       "height":640,
                       "url":"https://i.scdn.co/image/bfe790abbbdf1f2687ddc1f3d0eb607863489d65",
                       "width":640
                    }
                  ],
                 "label":"Highscore Music",
                 "name":"Dead White, Folge 1: Donner",
                 "release_date":"2017-03-10",
                 "tracks":{
                    "items":[{            
                          "name":"Dead White, Folge 1: Donner, Teil 1",
                          "preview_url":"https://p.scdn.co/mp3-preview/b9841bd03b80317c1cec8a338492f48674888902?cid=null",
                          "track_number":1            
                       }]
                  },
                  "external_urls" : {
                      "spotify" : "https://open.spotify.com/track/2npA7FiZWVyLTFHb2gzIxh"
                    }
                 
              };

        artist = {
				  "external_urls" : {
				    "spotify" : "https://open.spotify.com/artist/3PTvxYMFgNGE9bQdlDT9Wx"
				  },
				  "followers" : {
				    "href" : null,
				    "total" : 4122
				  },
				  "genres" : [ ],
				  "href" : "https://api.spotify.com/v1/artists/3PTvxYMFgNGE9bQdlDT9Wx",
				  "id" : "3PTvxYMFgNGE9bQdlDT9Wx",
				  "images" : [ {
				    "height" : 640,
				    "url" : "https://i.scdn.co/image/dbb1857161a77cd4ca75e217768e37f3d4b0837a",
				    "width" : 640
				  }, {
				    "height" : 300,
				    "url" : "https://i.scdn.co/image/b98478ad70a737f39cc8ed1a1616e9d2fc68210d",
				    "width" : 300
				  }, {
				    "height" : 64,
				    "url" : "https://i.scdn.co/image/5bb0be5453caf8cab5e2af5f772869fe2b22d546",
				    "width" : 64
				  } ],
				  "name" : "Batman",
				  "popularity" : 32,
				  "type" : "artist",
				  "uri" : "spotify:artist:3PTvxYMFgNGE9bQdlDT9Wx"
				} 
				
		albums =  [ {
    "album_type" : "album",
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/3PTvxYMFgNGE9bQdlDT9Wx"
      },
      "href" : "https://api.spotify.com/v1/artists/3PTvxYMFgNGE9bQdlDT9Wx",
      "id" : "3PTvxYMFgNGE9bQdlDT9Wx",
      "name" : "Batman",
      "type" : "artist",
      "uri" : "spotify:artist:3PTvxYMFgNGE9bQdlDT9Wx"
    } ],
    "available_markets" : [ "AT", "CH", "DE" ],
    "external_urls" : {
      "spotify" : "https://open.spotify.com/album/737rTqaakKjNKMvKl8uXLg"
    },
    "href" : "https://api.spotify.com/v1/albums/737rTqaakKjNKMvKl8uXLg",
    "id" : "737rTqaakKjNKMvKl8uXLg",
    "images" : [ {
      "height" : 640,
      "url" : "https://i.scdn.co/image/bfe790abbbdf1f2687ddc1f3d0eb607863489d65",
      "width" : 640
    }, {
      "height" : 300,
      "url" : "https://i.scdn.co/image/a0f8aced7cef8b33ea19b05f769d487c4ffbaa77",
      "width" : 300
    }, {
      "height" : 64,
      "url" : "https://i.scdn.co/image/c6af46363434df788a025797a7e5bef195929ee2",
      "width" : 64
    } ],
    "name" : "Dead White, Folge 1: Donner",
    "type" : "album",
    "uri" : "spotify:album:737rTqaakKjNKMvKl8uXLg"
  }, {
    "album_type" : "album",
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/3PTvxYMFgNGE9bQdlDT9Wx"
      },
      "href" : "https://api.spotify.com/v1/artists/3PTvxYMFgNGE9bQdlDT9Wx",
      "id" : "3PTvxYMFgNGE9bQdlDT9Wx",
      "name" : "Batman",
      "type" : "artist",
      "uri" : "spotify:artist:3PTvxYMFgNGE9bQdlDT9Wx"
    } ],
    "available_markets" : [ "AT", "CH", "DE" ],
    "external_urls" : {
      "spotify" : "https://open.spotify.com/album/4ET8xGqBmKZ6MST41hyylm"
    },
    "href" : "https://api.spotify.com/v1/albums/4ET8xGqBmKZ6MST41hyylm",
    "id" : "4ET8xGqBmKZ6MST41hyylm",
    "images" : [ {
      "height" : 640,
      "url" : "https://i.scdn.co/image/dbb1857161a77cd4ca75e217768e37f3d4b0837a",
      "width" : 640
    }, {
      "height" : 300,
      "url" : "https://i.scdn.co/image/b98478ad70a737f39cc8ed1a1616e9d2fc68210d",
      "width" : 300
    }, {
      "height" : 64,
      "url" : "https://i.scdn.co/image/5bb0be5453caf8cab5e2af5f772869fe2b22d546",
      "width" : 64
    } ],
    "name" : "Stone King, Folge 3: Krieg der Götter",
    "type" : "album",
    "uri" : "spotify:album:4ET8xGqBmKZ6MST41hyylm"
  }, {
    "album_type" : "album",
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/3PTvxYMFgNGE9bQdlDT9Wx"
      },
      "href" : "https://api.spotify.com/v1/artists/3PTvxYMFgNGE9bQdlDT9Wx",
      "id" : "3PTvxYMFgNGE9bQdlDT9Wx",
      "name" : "Batman",
      "type" : "artist",
      "uri" : "spotify:artist:3PTvxYMFgNGE9bQdlDT9Wx"
    } ],
    "available_markets" : [ "AT", "CH", "DE" ],
    "external_urls" : {
      "spotify" : "https://open.spotify.com/album/0XduNv27IiYXZdCzmlbnmr"
    },
    "href" : "https://api.spotify.com/v1/albums/0XduNv27IiYXZdCzmlbnmr",
    "id" : "0XduNv27IiYXZdCzmlbnmr",
    "images" : [ {
      "height" : 640,
      "url" : "https://i.scdn.co/image/ef4120b2de339b9789c51bf610222004353c2b12",
      "width" : 640
    }, {
      "height" : 300,
      "url" : "https://i.scdn.co/image/9b095ffd6d0b92cf205cd471210ab77bb336087f",
      "width" : 300
    }, {
      "height" : 64,
      "url" : "https://i.scdn.co/image/6b80c1d35d62742fba13c272a4a970b5086f32a8",
      "width" : 64
    } ],
    "name" : "Stone King, Folge 2: Gefangen",
    "type" : "album",
    "uri" : "spotify:album:0XduNv27IiYXZdCzmlbnmr"
  }, {
    "album_type" : "album",
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/3PTvxYMFgNGE9bQdlDT9Wx"
      },
      "href" : "https://api.spotify.com/v1/artists/3PTvxYMFgNGE9bQdlDT9Wx",
      "id" : "3PTvxYMFgNGE9bQdlDT9Wx",
      "name" : "Batman",
      "type" : "artist",
      "uri" : "spotify:artist:3PTvxYMFgNGE9bQdlDT9Wx"
    } ],
    "available_markets" : [ "AT", "CH", "DE" ],
    "external_urls" : {
      "spotify" : "https://open.spotify.com/album/6VzMBuh0juEolrtlBrPcG3"
    },
    "href" : "https://api.spotify.com/v1/albums/6VzMBuh0juEolrtlBrPcG3",
    "id" : "6VzMBuh0juEolrtlBrPcG3",
    "images" : [ {
      "height" : 640,
      "url" : "https://i.scdn.co/image/1b9535274387561bcfb436ed91b574821fb42c9d",
      "width" : 640
    }, {
      "height" : 300,
      "url" : "https://i.scdn.co/image/b99ed4fdcdc471f5eb94296152cac70b0daa8f95",
      "width" : 300
    }, {
      "height" : 64,
      "url" : "https://i.scdn.co/image/9733335ab83d60758304de7270564eedd03115d6",
      "width" : 64
    } ],
    "name" : "Stone King, Folge 1: Pyramide",
    "type" : "album",
    "uri" : "spotify:album:6VzMBuh0juEolrtlBrPcG3"
  }, {
    "album_type" : "album",
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/3PTvxYMFgNGE9bQdlDT9Wx"
      },
      "href" : "https://api.spotify.com/v1/artists/3PTvxYMFgNGE9bQdlDT9Wx",
      "id" : "3PTvxYMFgNGE9bQdlDT9Wx",
      "name" : "Batman",
      "type" : "artist",
      "uri" : "spotify:artist:3PTvxYMFgNGE9bQdlDT9Wx"
    } ],
    "available_markets" : [ "AT", "CH", "DE" ],
    "external_urls" : {
      "spotify" : "https://open.spotify.com/album/7wEiewfFjpiYCmJ80KZT4H"
    },
    "href" : "https://api.spotify.com/v1/albums/7wEiewfFjpiYCmJ80KZT4H",
    "id" : "7wEiewfFjpiYCmJ80KZT4H",
    "images" : [ {
      "height" : 640,
      "url" : "https://i.scdn.co/image/b82006303e13fcc0c0ecca16035b7f28f7319b72",
      "width" : 640
    }, {
      "height" : 300,
      "url" : "https://i.scdn.co/image/19277418fe95bcf49b99921efee618d41cd8ccc8",
      "width" : 300
    }, {
      "height" : 64,
      "url" : "https://i.scdn.co/image/77e31ee9cb9f3cf711714a09a1169eb8d299beac",
      "width" : 64
    } ],
    "name" : "No Man's Land, Folge 6: Das Ende",
    "type" : "album",
    "uri" : "spotify:album:7wEiewfFjpiYCmJ80KZT4H"
  }, {
    "album_type" : "album",
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/3PTvxYMFgNGE9bQdlDT9Wx"
      },
      "href" : "https://api.spotify.com/v1/artists/3PTvxYMFgNGE9bQdlDT9Wx",
      "id" : "3PTvxYMFgNGE9bQdlDT9Wx",
      "name" : "Batman",
      "type" : "artist",
      "uri" : "spotify:artist:3PTvxYMFgNGE9bQdlDT9Wx"
    } ],
    "available_markets" : [ "AT", "CH", "DE" ],
    "external_urls" : {
      "spotify" : "https://open.spotify.com/album/5GmXjhKfOUNwzmMHYzVfGh"
    },
    "href" : "https://api.spotify.com/v1/albums/5GmXjhKfOUNwzmMHYzVfGh",
    "id" : "5GmXjhKfOUNwzmMHYzVfGh",
    "images" : [ {
      "height" : 640,
      "url" : "https://i.scdn.co/image/516773c27802873dee3e5c26adc354f70de02824",
      "width" : 640
    }, {
      "height" : 300,
      "url" : "https://i.scdn.co/image/c87351679115d4fc3c7d21d3effa89e5178481ef",
      "width" : 300
    }, {
      "height" : 64,
      "url" : "https://i.scdn.co/image/aa0570c343ab9aa4bf781c50f0a54e80bdb02e1f",
      "width" : 64
    } ],
    "name" : "No Man's Land, Folge 5: Wahnsinn",
    "type" : "album",
    "uri" : "spotify:album:5GmXjhKfOUNwzmMHYzVfGh"
  }, {
    "album_type" : "album",
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/3PTvxYMFgNGE9bQdlDT9Wx"
      },
      "href" : "https://api.spotify.com/v1/artists/3PTvxYMFgNGE9bQdlDT9Wx",
      "id" : "3PTvxYMFgNGE9bQdlDT9Wx",
      "name" : "Batman",
      "type" : "artist",
      "uri" : "spotify:artist:3PTvxYMFgNGE9bQdlDT9Wx"
    } ],
    "available_markets" : [ "AT", "CH", "DE" ],
    "external_urls" : {
      "spotify" : "https://open.spotify.com/album/4Fwz1yioEr2ExsXj9nmljL"
    },
    "href" : "https://api.spotify.com/v1/albums/4Fwz1yioEr2ExsXj9nmljL",
    "id" : "4Fwz1yioEr2ExsXj9nmljL",
    "images" : [ {
      "height" : 640,
      "url" : "https://i.scdn.co/image/5f0eab6cec5f6ef614c99a7d2e84ae624c15c64a",
      "width" : 640
    }, {
      "height" : 300,
      "url" : "https://i.scdn.co/image/feb0b627c5487eba5e80ae7d1d953366a6333526",
      "width" : 300
    }, {
      "height" : 64,
      "url" : "https://i.scdn.co/image/b44c336327ff84f8ee456ffac77d83d5333d5529",
      "width" : 64
    } ],
    "name" : "No Man's Land, Folge 4: Familie",
    "type" : "album",
    "uri" : "spotify:album:4Fwz1yioEr2ExsXj9nmljL"
  }, {
    "album_type" : "album",
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/3PTvxYMFgNGE9bQdlDT9Wx"
      },
      "href" : "https://api.spotify.com/v1/artists/3PTvxYMFgNGE9bQdlDT9Wx",
      "id" : "3PTvxYMFgNGE9bQdlDT9Wx",
      "name" : "Batman",
      "type" : "artist",
      "uri" : "spotify:artist:3PTvxYMFgNGE9bQdlDT9Wx"
    } ],
    "available_markets" : [ "AT", "CH", "DE" ],
    "external_urls" : {
      "spotify" : "https://open.spotify.com/album/2MLqS5CbQhhMijTzeyZpEf"
    },
    "href" : "https://api.spotify.com/v1/albums/2MLqS5CbQhhMijTzeyZpEf",
    "id" : "2MLqS5CbQhhMijTzeyZpEf",
    "images" : [ {
      "height" : 640,
      "url" : "https://i.scdn.co/image/4a02eeed807bca5b7cd1ffe4ed960287dee380c3",
      "width" : 640
    }, {
      "height" : 300,
      "url" : "https://i.scdn.co/image/e00659733bc18fd9310035a85121fbdacfdb1bad",
      "width" : 300
    }, {
      "height" : 64,
      "url" : "https://i.scdn.co/image/510baae956ac8a0514b98b826870271975b80b18",
      "width" : 64
    } ],
    "name" : "No Man's Land, Folge 3: Tod",
    "type" : "album",
    "uri" : "spotify:album:2MLqS5CbQhhMijTzeyZpEf"
  }, {
    "album_type" : "album",
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/3PTvxYMFgNGE9bQdlDT9Wx"
      },
      "href" : "https://api.spotify.com/v1/artists/3PTvxYMFgNGE9bQdlDT9Wx",
      "id" : "3PTvxYMFgNGE9bQdlDT9Wx",
      "name" : "Batman",
      "type" : "artist",
      "uri" : "spotify:artist:3PTvxYMFgNGE9bQdlDT9Wx"
    } ],
    "available_markets" : [ "AT", "CH", "DE" ],
    "external_urls" : {
      "spotify" : "https://open.spotify.com/album/4HbLKOhMs0TPvOsihWsm1p"
    },
    "href" : "https://api.spotify.com/v1/albums/4HbLKOhMs0TPvOsihWsm1p",
    "id" : "4HbLKOhMs0TPvOsihWsm1p",
    "images" : [ {
      "height" : 640,
      "url" : "https://i.scdn.co/image/1e1e0d6cdb529ee0fbcd7d1610c3e33431fc65e9",
      "width" : 640
    }, {
      "height" : 300,
      "url" : "https://i.scdn.co/image/c5385d91372ad514eab77796c638ca864a601e4d",
      "width" : 300
    }, {
      "height" : 64,
      "url" : "https://i.scdn.co/image/2590144b320d844225fb2794ab200ae046e575c1",
      "width" : 64
    } ],
    "name" : "No Man's Land, Folge 2: Chaos",
    "type" : "album",
    "uri" : "spotify:album:4HbLKOhMs0TPvOsihWsm1p"
  }, {
    "album_type" : "album",
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/3PTvxYMFgNGE9bQdlDT9Wx"
      },
      "href" : "https://api.spotify.com/v1/artists/3PTvxYMFgNGE9bQdlDT9Wx",
      "id" : "3PTvxYMFgNGE9bQdlDT9Wx",
      "name" : "Batman",
      "type" : "artist",
      "uri" : "spotify:artist:3PTvxYMFgNGE9bQdlDT9Wx"
    } ],
    "available_markets" : [ "AT", "CH", "DE" ],
    "external_urls" : {
      "spotify" : "https://open.spotify.com/album/3k9V4AbhHou9UJDnFDUxKR"
    },
    "href" : "https://api.spotify.com/v1/albums/3k9V4AbhHou9UJDnFDUxKR",
    "id" : "3k9V4AbhHou9UJDnFDUxKR",
    "images" : [ {
      "height" : 640,
      "url" : "https://i.scdn.co/image/0b2ffdad17f07883ee7c7dde1ce4601ac3411a08",
      "width" : 640
    }, {
      "height" : 300,
      "url" : "https://i.scdn.co/image/a7fe8a06ddb5f6b490aa32db03aca451833f77b9",
      "width" : 300
    }, {
      "height" : 64,
      "url" : "https://i.scdn.co/image/576b2e72189eabbca77f910ab0ce198f4990a84b",
      "width" : 64
    } ],
    "name" : "No Man's Land, Folge 1: Niemandsland",
    "type" : "album",
    "uri" : "spotify:album:3k9V4AbhHou9UJDnFDUxKR"
  }, {
    "album_type" : "album",
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/3PTvxYMFgNGE9bQdlDT9Wx"
      },
      "href" : "https://api.spotify.com/v1/artists/3PTvxYMFgNGE9bQdlDT9Wx",
      "id" : "3PTvxYMFgNGE9bQdlDT9Wx",
      "name" : "Batman",
      "type" : "artist",
      "uri" : "spotify:artist:3PTvxYMFgNGE9bQdlDT9Wx"
    } ],
    "available_markets" : [ "AT", "CH", "DE" ],
    "external_urls" : {
      "spotify" : "https://open.spotify.com/album/4E4tK7XhZvoAyjYeWabTRp"
    },
    "href" : "https://api.spotify.com/v1/albums/4E4tK7XhZvoAyjYeWabTRp",
    "id" : "4E4tK7XhZvoAyjYeWabTRp",
    "images" : [ {
      "height" : 640,
      "url" : "https://i.scdn.co/image/8bba22ab9e7e983c1968b9abb92c4bbd79d6a7f2",
      "width" : 640
    }, {
      "height" : 300,
      "url" : "https://i.scdn.co/image/3dc53dc44615a7c2bf35d55c9039339b0c476d7f",
      "width" : 300
    }, {
      "height" : 64,
      "url" : "https://i.scdn.co/image/ea937594f3d38e495d3e8ebe0cafbc909547c03c",
      "width" : 64
    } ],
    "name" : "Inferno, Folge 4: Dantes Inferno",
    "type" : "album",
    "uri" : "spotify:album:4E4tK7XhZvoAyjYeWabTRp"
  }, {
    "album_type" : "album",
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/3PTvxYMFgNGE9bQdlDT9Wx"
      },
      "href" : "https://api.spotify.com/v1/artists/3PTvxYMFgNGE9bQdlDT9Wx",
      "id" : "3PTvxYMFgNGE9bQdlDT9Wx",
      "name" : "Batman",
      "type" : "artist",
      "uri" : "spotify:artist:3PTvxYMFgNGE9bQdlDT9Wx"
    } ],
    "available_markets" : [ "AT", "CH", "DE" ],
    "external_urls" : {
      "spotify" : "https://open.spotify.com/album/51pJBVTB2ap4zE2s5HCEnk"
    },
    "href" : "https://api.spotify.com/v1/albums/51pJBVTB2ap4zE2s5HCEnk",
    "id" : "51pJBVTB2ap4zE2s5HCEnk",
    "images" : [ {
      "height" : 640,
      "url" : "https://i.scdn.co/image/7537c3cdf9a3636c182fd34a726944ef7b9e0b84",
      "width" : 640
    }, {
      "height" : 300,
      "url" : "https://i.scdn.co/image/43e8dfc1e41cc1c8d943c9f02abf950e7faf06e0",
      "width" : 300
    }, {
      "height" : 64,
      "url" : "https://i.scdn.co/image/7cb4e1d6005a08f7db7b4b6d76aabf3c08a468e0",
      "width" : 64
    } ],
    "name" : "Inferno, Folge 3: Blut und Rauch",
    "type" : "album",
    "uri" : "spotify:album:51pJBVTB2ap4zE2s5HCEnk"
  }, {
    "album_type" : "album",
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/3PTvxYMFgNGE9bQdlDT9Wx"
      },
      "href" : "https://api.spotify.com/v1/artists/3PTvxYMFgNGE9bQdlDT9Wx",
      "id" : "3PTvxYMFgNGE9bQdlDT9Wx",
      "name" : "Batman",
      "type" : "artist",
      "uri" : "spotify:artist:3PTvxYMFgNGE9bQdlDT9Wx"
    } ],
    "available_markets" : [ "AT", "CH", "DE" ],
    "external_urls" : {
      "spotify" : "https://open.spotify.com/album/0w2cl8rQsbDfwOtWXZWMl1"
    },
    "href" : "https://api.spotify.com/v1/albums/0w2cl8rQsbDfwOtWXZWMl1",
    "id" : "0w2cl8rQsbDfwOtWXZWMl1",
    "images" : [ {
      "height" : 640,
      "url" : "https://i.scdn.co/image/7e466981022fd3be21291b4c391cf9ca1d3e3a40",
      "width" : 640
    }, {
      "height" : 300,
      "url" : "https://i.scdn.co/image/0bde24eba1656c229ca54531ab24d2c3d74a660e",
      "width" : 300
    }, {
      "height" : 64,
      "url" : "https://i.scdn.co/image/c2400f6fe7a5014246e8face42ec0988c28044a4",
      "width" : 64
    } ],
    "name" : "Inferno, Folge 2: Das Spiel mit dem Feuer",
    "type" : "album",
    "uri" : "spotify:album:0w2cl8rQsbDfwOtWXZWMl1"
  }, {
    "album_type" : "album",
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/3PTvxYMFgNGE9bQdlDT9Wx"
      },
      "href" : "https://api.spotify.com/v1/artists/3PTvxYMFgNGE9bQdlDT9Wx",
      "id" : "3PTvxYMFgNGE9bQdlDT9Wx",
      "name" : "Batman",
      "type" : "artist",
      "uri" : "spotify:artist:3PTvxYMFgNGE9bQdlDT9Wx"
    } ],
    "available_markets" : [ "AT", "CH", "DE" ],
    "external_urls" : {
      "spotify" : "https://open.spotify.com/album/1ffoJkjnBkUGYuiM1e391k"
    },
    "href" : "https://api.spotify.com/v1/albums/1ffoJkjnBkUGYuiM1e391k",
    "id" : "1ffoJkjnBkUGYuiM1e391k",
    "images" : [ {
      "height" : 640,
      "url" : "https://i.scdn.co/image/fef8b6f7a43d4041ad5c033b34039ae697ef5e91",
      "width" : 640
    }, {
      "height" : 300,
      "url" : "https://i.scdn.co/image/5041f8fe126f5852071b4f3de6ef5905e52eded2",
      "width" : 300
    }, {
      "height" : 64,
      "url" : "https://i.scdn.co/image/21850125b905de9687f37846f49eee1d46e8ff5f",
      "width" : 64
    } ],
    "name" : "Inferno, Folge 1: Hölle",
    "type" : "album",
    "uri" : "spotify:album:1ffoJkjnBkUGYuiM1e391k"
  }, {
    "album_type" : "album",
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/3PTvxYMFgNGE9bQdlDT9Wx"
      },
      "href" : "https://api.spotify.com/v1/artists/3PTvxYMFgNGE9bQdlDT9Wx",
      "id" : "3PTvxYMFgNGE9bQdlDT9Wx",
      "name" : "Batman",
      "type" : "artist",
      "uri" : "spotify:artist:3PTvxYMFgNGE9bQdlDT9Wx"
    } ],
    "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
    "external_urls" : {
      "spotify" : "https://open.spotify.com/album/7F5ZLOIn9eBmLysjIece7y"
    },
    "href" : "https://api.spotify.com/v1/albums/7F5ZLOIn9eBmLysjIece7y",
    "id" : "7F5ZLOIn9eBmLysjIece7y",
    "images" : [ {
      "height" : 640,
      "url" : "https://i.scdn.co/image/2b61ef89a0e5fad7fa70091862fe8e6a4f1a0956",
      "width" : 640
    }, {
      "height" : 300,
      "url" : "https://i.scdn.co/image/1d23a1a1cbcc50b41a3731f1524126627d8796aa",
      "width" : 300
    }, {
      "height" : 64,
      "url" : "https://i.scdn.co/image/2646d61093bc14d7591bdab84dfe9c0e1c2eeb71",
      "width" : 64
    } ],
    "name" : "The Jeans Boys",
    "type" : "album",
    "uri" : "spotify:album:7F5ZLOIn9eBmLysjIece7y"
  }, {
    "album_type" : "album",
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/3PTvxYMFgNGE9bQdlDT9Wx"
      },
      "href" : "https://api.spotify.com/v1/artists/3PTvxYMFgNGE9bQdlDT9Wx",
      "id" : "3PTvxYMFgNGE9bQdlDT9Wx",
      "name" : "Batman",
      "type" : "artist",
      "uri" : "spotify:artist:3PTvxYMFgNGE9bQdlDT9Wx"
    } ],
    "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
    "external_urls" : {
      "spotify" : "https://open.spotify.com/album/1SQFh8OizuoJiJOMnbZLqy"
    },
    "href" : "https://api.spotify.com/v1/albums/1SQFh8OizuoJiJOMnbZLqy",
    "id" : "1SQFh8OizuoJiJOMnbZLqy",
    "images" : [ {
      "height" : 640,
      "url" : "https://i.scdn.co/image/8a870952e1ea8bbc075ff879a26e8e46d8ab8d77",
      "width" : 640
    }, {
      "height" : 300,
      "url" : "https://i.scdn.co/image/1eaf762196a2055a2af2ec5441647aa6031cc06a",
      "width" : 300
    }, {
      "height" : 64,
      "url" : "https://i.scdn.co/image/2e45cd74d96e6bc76d2a5a227f4562778e4700cb",
      "width" : 64
    } ],
    "name" : "Balliamo il Tango \"Caminito\"",
    "type" : "album",
    "uri" : "spotify:album:1SQFh8OizuoJiJOMnbZLqy"
  }, {
    "album_type" : "album",
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/3PTvxYMFgNGE9bQdlDT9Wx"
      },
      "href" : "https://api.spotify.com/v1/artists/3PTvxYMFgNGE9bQdlDT9Wx",
      "id" : "3PTvxYMFgNGE9bQdlDT9Wx",
      "name" : "Batman",
      "type" : "artist",
      "uri" : "spotify:artist:3PTvxYMFgNGE9bQdlDT9Wx"
    } ],
    "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
    "external_urls" : {
      "spotify" : "https://open.spotify.com/album/7HUBiUe0mCzkVSeqUNEqae"
    },
    "href" : "https://api.spotify.com/v1/albums/7HUBiUe0mCzkVSeqUNEqae",
    "id" : "7HUBiUe0mCzkVSeqUNEqae",
    "images" : [ {
      "height" : 640,
      "url" : "https://i.scdn.co/image/6a8140c74d0cff7848908af377820a5f8516f7ef",
      "width" : 640
    }, {
      "height" : 300,
      "url" : "https://i.scdn.co/image/ab588f79d6fab40ddfed672f4cdb087e1a9d86b2",
      "width" : 300
    }, {
      "height" : 64,
      "url" : "https://i.scdn.co/image/3d0393ac116edc16e24f1c54219cbf9f7342a428",
      "width" : 64
    } ],
    "name" : "Balliamo il Tango\"La Cumparsita\"",
    "type" : "album",
    "uri" : "spotify:album:7HUBiUe0mCzkVSeqUNEqae"
  }, {
    "album_type" : "album",
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/3PTvxYMFgNGE9bQdlDT9Wx"
      },
      "href" : "https://api.spotify.com/v1/artists/3PTvxYMFgNGE9bQdlDT9Wx",
      "id" : "3PTvxYMFgNGE9bQdlDT9Wx",
      "name" : "Batman",
      "type" : "artist",
      "uri" : "spotify:artist:3PTvxYMFgNGE9bQdlDT9Wx"
    } ],
    "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
    "external_urls" : {
      "spotify" : "https://open.spotify.com/album/4DQsoG6eyrz0pLJVyJHUZj"
    },
    "href" : "https://api.spotify.com/v1/albums/4DQsoG6eyrz0pLJVyJHUZj",
    "id" : "4DQsoG6eyrz0pLJVyJHUZj",
    "images" : [ {
      "height" : 640,
      "url" : "https://i.scdn.co/image/048a80c827cebdfe5687fa9ae2a998cbce5aa2f9",
      "width" : 640
    }, {
      "height" : 300,
      "url" : "https://i.scdn.co/image/db87b1be3f36d6bec87764ebdbb2bfa0faf15502",
      "width" : 300
    }, {
      "height" : 64,
      "url" : "https://i.scdn.co/image/2dafb6adb560b0eb95128bc8cf54ef71623b97de",
      "width" : 64
    } ],
    "name" : "La czarda di Monti (Fisarmonica solista)",
    "type" : "album",
    "uri" : "spotify:album:4DQsoG6eyrz0pLJVyJHUZj"
  }, {
    "album_type" : "album",
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/3PTvxYMFgNGE9bQdlDT9Wx"
      },
      "href" : "https://api.spotify.com/v1/artists/3PTvxYMFgNGE9bQdlDT9Wx",
      "id" : "3PTvxYMFgNGE9bQdlDT9Wx",
      "name" : "Batman",
      "type" : "artist",
      "uri" : "spotify:artist:3PTvxYMFgNGE9bQdlDT9Wx"
    } ],
    "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
    "external_urls" : {
      "spotify" : "https://open.spotify.com/album/2lNf2PFku5fkVIEW9OORXr"
    },
    "href" : "https://api.spotify.com/v1/albums/2lNf2PFku5fkVIEW9OORXr",
    "id" : "2lNf2PFku5fkVIEW9OORXr",
    "images" : [ {
      "height" : 640,
      "url" : "https://i.scdn.co/image/31f023c23188b1bc6eab53123c3339894d6abd54",
      "width" : 640
    }, {
      "height" : 300,
      "url" : "https://i.scdn.co/image/ffdaa2b088022014e4067208e11ec08e97118be1",
      "width" : 300
    }, {
      "height" : 64,
      "url" : "https://i.scdn.co/image/c24c8c505756f0c1aba4bff6fec62ade803b4284",
      "width" : 64
    } ],
    "name" : "Holla-Hajo!",
    "type" : "album",
    "uri" : "spotify:album:2lNf2PFku5fkVIEW9OORXr"
  }, {
    "album_type" : "album",
    "artists" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/3PTvxYMFgNGE9bQdlDT9Wx"
      },
      "href" : "https://api.spotify.com/v1/artists/3PTvxYMFgNGE9bQdlDT9Wx",
      "id" : "3PTvxYMFgNGE9bQdlDT9Wx",
      "name" : "Batman",
      "type" : "artist",
      "uri" : "spotify:artist:3PTvxYMFgNGE9bQdlDT9Wx"
    } ],
    "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
    "external_urls" : {
      "spotify" : "https://open.spotify.com/album/09eRsjNu1jr2c9ifzAZyhQ"
    },
    "href" : "https://api.spotify.com/v1/albums/09eRsjNu1jr2c9ifzAZyhQ",
    "id" : "09eRsjNu1jr2c9ifzAZyhQ",
    "images" : [ {
      "height" : 640,
      "url" : "https://i.scdn.co/image/404d015e0ef7e116dad3ac8d02920de9521dc303",
      "width" : 640
    }, {
      "height" : 300,
      "url" : "https://i.scdn.co/image/eb9049344b63114c4a25869d4f5030eecc209e17",
      "width" : 300
    }, {
      "height" : 64,
      "url" : "https://i.scdn.co/image/15e3cb043483758dd0539e2c754c50a60be2250a",
      "width" : 64
    } ],
    "name" : "Ach Soo!",
    "type" : "album",
    "uri" : "spotify:album:09eRsjNu1jr2c9ifzAZyhQ"
  } ];		


 serchResultOriginal = {
  "artists" : {
    "href" : "https://api.spotify.com/v1/search?query=bata&type=artist&market=US&offset=0&limit=20",
    "items" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/3t0NEKDuENLcoDV4la0pG4"
      },
      "followers" : {
        "href" : null,
        "total" : 112
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/3t0NEKDuENLcoDV4la0pG4",
      "id" : "3t0NEKDuENLcoDV4la0pG4",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/b7ca6b52e0b4f4c110573e6a9a7b1a636c8ba6b0",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/9b4ed645cf8e442d8af61a99208b07e1c3710494",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/6260c13e700fdf4efd7d67bc45b008880264a02b",
        "width" : 64
      } ],
      "name" : "Batà",
      "popularity" : 6,
      "type" : "artist",
      "uri" : "spotify:artist:3t0NEKDuENLcoDV4la0pG4"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/7x8uj5JgTgmsAFoh8vHfzK"
      },
      "followers" : {
        "href" : null,
        "total" : 36
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/7x8uj5JgTgmsAFoh8vHfzK",
      "id" : "7x8uj5JgTgmsAFoh8vHfzK",
      "images" : [ ],
      "name" : "Dj Bata Boy",
      "popularity" : 26,
      "type" : "artist",
      "uri" : "spotify:artist:7x8uj5JgTgmsAFoh8vHfzK"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/1VMT2ELGIuxbMa5WcdVCS1"
      },
      "followers" : {
        "href" : null,
        "total" : 65
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/1VMT2ELGIuxbMa5WcdVCS1",
      "id" : "1VMT2ELGIuxbMa5WcdVCS1",
      "images" : [ ],
      "name" : "Tambores Bata",
      "popularity" : 9,
      "type" : "artist",
      "uri" : "spotify:artist:1VMT2ELGIuxbMa5WcdVCS1"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/4LaL7eRBrAXVj5MyRQ7TW1"
      },
      "followers" : {
        "href" : null,
        "total" : 859
      },
      "genres" : [ "schlager", "volksmusik" ],
      "href" : "https://api.spotify.com/v1/artists/4LaL7eRBrAXVj5MyRQ7TW1",
      "id" : "4LaL7eRBrAXVj5MyRQ7TW1",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/00f50e498efe9418e876b765e0f7069ab54f7a19",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/8f83ca8a0e44041348a28cf0ea4408b23e283e01",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/9acb4e21479719d1794106c89bd417c19a8ae3b9",
        "width" : 64
      } ],
      "name" : "Bata Illic",
      "popularity" : 28,
      "type" : "artist",
      "uri" : "spotify:artist:4LaL7eRBrAXVj5MyRQ7TW1"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0febJFKLfkMudI8cpqezzX"
      },
      "followers" : {
        "href" : null,
        "total" : 25
      },
      "genres" : [ "steelpan" ],
      "href" : "https://api.spotify.com/v1/artists/0febJFKLfkMudI8cpqezzX",
      "id" : "0febJFKLfkMudI8cpqezzX",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/b0eded59fc9638e7f79c9af2433131b7bfee9b31",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/85d9d1ee058d13ef0802e19c09ea4ec68f24248d",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/3f8aab348490bc326edfc30df9d4052cfef14a20",
        "width" : 64
      } ],
      "name" : "Bakra Bata",
      "popularity" : 0,
      "type" : "artist",
      "uri" : "spotify:artist:0febJFKLfkMudI8cpqezzX"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/7BotcsKnmi44lppAQ79Kog"
      },
      "followers" : {
        "href" : null,
        "total" : 2
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/7BotcsKnmi44lppAQ79Kog",
      "id" : "7BotcsKnmi44lppAQ79Kog",
      "images" : [ ],
      "name" : "Bata Ensemble",
      "popularity" : 0,
      "type" : "artist",
      "uri" : "spotify:artist:7BotcsKnmi44lppAQ79Kog"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/32vP53DCcpsHYhsPjoXEdq"
      },
      "followers" : {
        "href" : null,
        "total" : 20
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/32vP53DCcpsHYhsPjoXEdq",
      "id" : "32vP53DCcpsHYhsPjoXEdq",
      "images" : [ ],
      "name" : "Batá trio",
      "popularity" : 1,
      "type" : "artist",
      "uri" : "spotify:artist:32vP53DCcpsHYhsPjoXEdq"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0s0NZvsaQ7FQbXTqnJ2Nh1"
      },
      "followers" : {
        "href" : null,
        "total" : 10
      },
      "genres" : [ "deep italo disco" ],
      "href" : "https://api.spotify.com/v1/artists/0s0NZvsaQ7FQbXTqnJ2Nh1",
      "id" : "0s0NZvsaQ7FQbXTqnJ2Nh1",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/ec19e46f456bb19f2b6d4e855eab8c278ffda4bd",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/11e73a1ac1830117c0de69165ecc0537b0a97cdd",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/c67bba64da27f89c6a1f79b1179c2c52ebea0c3f",
        "width" : 64
      } ],
      "name" : "Bata Drum",
      "popularity" : 1,
      "type" : "artist",
      "uri" : "spotify:artist:0s0NZvsaQ7FQbXTqnJ2Nh1"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/5X9mG9wM8tFJZdiOfWOtuA"
      },
      "followers" : {
        "href" : null,
        "total" : 4
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/5X9mG9wM8tFJZdiOfWOtuA",
      "id" : "5X9mG9wM8tFJZdiOfWOtuA",
      "images" : [ ],
      "name" : "Bongo Batà",
      "popularity" : 3,
      "type" : "artist",
      "uri" : "spotify:artist:5X9mG9wM8tFJZdiOfWOtuA"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/59pJRfymIwbM0vHXgRGtT2"
      },
      "followers" : {
        "href" : null,
        "total" : 57
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/59pJRfymIwbM0vHXgRGtT2",
      "id" : "59pJRfymIwbM0vHXgRGtT2",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/d50950fa5bd5b05bb8bc0d5b14e81b5c65d3be0b",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/d10dd57483552754ef1de00c824e8a08c64228a0",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/ab97c4da0ab7f041be294d3845f0aa9f2545c4ca",
        "width" : 64
      } ],
      "name" : "Bata Kouyaté",
      "popularity" : 1,
      "type" : "artist",
      "uri" : "spotify:artist:59pJRfymIwbM0vHXgRGtT2"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0id3Yt5ovVtIbPShRJ3p8Y"
      },
      "followers" : {
        "href" : null,
        "total" : 1
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/0id3Yt5ovVtIbPShRJ3p8Y",
      "id" : "0id3Yt5ovVtIbPShRJ3p8Y",
      "images" : [ ],
      "name" : "Bata Zivojinovic",
      "popularity" : 0,
      "type" : "artist",
      "uri" : "spotify:artist:0id3Yt5ovVtIbPShRJ3p8Y"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/7BviFgrRqWEVG8gWg85JuA"
      },
      "followers" : {
        "href" : null,
        "total" : 39
      },
      "genres" : [ "turbo folk" ],
      "href" : "https://api.spotify.com/v1/artists/7BviFgrRqWEVG8gWg85JuA",
      "id" : "7BviFgrRqWEVG8gWg85JuA",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/0c1c092a83e1a36ec5dc6c952603ec69101a0ebc",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/3aa0a80f77800ecb9148bc713b9e8c12d928da0c",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/0e88beed58a33949a37257242d9272f970613ed7",
        "width" : 64
      } ],
      "name" : "Bata Zdravkovic",
      "popularity" : 5,
      "type" : "artist",
      "uri" : "spotify:artist:7BviFgrRqWEVG8gWg85JuA"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0EvNLqfqyX5UhbLJAgr0zw"
      },
      "followers" : {
        "href" : null,
        "total" : 1
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/0EvNLqfqyX5UhbLJAgr0zw",
      "id" : "0EvNLqfqyX5UhbLJAgr0zw",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/d133ccf014f12ab2b59629c087f2a2ab063936f1",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/80b6ae3cc849c5fb37128819f29d175f90b265c8",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/bb357ae095dc83ad64936df2200c69debb595508",
        "width" : 64
      } ],
      "name" : "Lepi Bata",
      "popularity" : 0,
      "type" : "artist",
      "uri" : "spotify:artist:0EvNLqfqyX5UhbLJAgr0zw"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/6ATOMHptecYUWVufyqEAhe"
      },
      "followers" : {
        "href" : null,
        "total" : 3
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/6ATOMHptecYUWVufyqEAhe",
      "id" : "6ATOMHptecYUWVufyqEAhe",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/41b4db38e1ba52a021c9564c08bee1d2bd35a4ac",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/0df63dcec3170d0d8042bf88aad5fe84b26c900b",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/59ad0fbce1f234dcc260080245305eee2e011d16",
        "width" : 64
      } ],
      "name" : "Waleed Bata",
      "popularity" : 0,
      "type" : "artist",
      "uri" : "spotify:artist:6ATOMHptecYUWVufyqEAhe"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/57p0InbKcmZfTBZVXq87VT"
      },
      "followers" : {
        "href" : null,
        "total" : 1
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/57p0InbKcmZfTBZVXq87VT",
      "id" : "57p0InbKcmZfTBZVXq87VT",
      "images" : [ ],
      "name" : "Fool Bata",
      "popularity" : 0,
      "type" : "artist",
      "uri" : "spotify:artist:57p0InbKcmZfTBZVXq87VT"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/1DehWuLQLDVOOwJ7EpITZr"
      },
      "followers" : {
        "href" : null,
        "total" : 16
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/1DehWuLQLDVOOwJ7EpITZr",
      "id" : "1DehWuLQLDVOOwJ7EpITZr",
      "images" : [ ],
      "name" : "Bata Ketu",
      "popularity" : 0,
      "type" : "artist",
      "uri" : "spotify:artist:1DehWuLQLDVOOwJ7EpITZr"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/61NM0gVdvnshtgi5T9lHCe"
      },
      "followers" : {
        "href" : null,
        "total" : 26
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/61NM0gVdvnshtgi5T9lHCe",
      "id" : "61NM0gVdvnshtgi5T9lHCe",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/46192d8a3b8d0897d0ec66584de45e3770bf77e1",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/ec139edfb3db76391106218f2e00879dcf18f267",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/559a59e25b6c1687db89c1641d9721282f2b9bfb",
        "width" : 64
      } ],
      "name" : "Son Bata",
      "popularity" : 0,
      "type" : "artist",
      "uri" : "spotify:artist:61NM0gVdvnshtgi5T9lHCe"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/6EcVR8CHptxjne1mpCeUsh"
      },
      "followers" : {
        "href" : null,
        "total" : 12
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/6EcVR8CHptxjne1mpCeUsh",
      "id" : "6EcVR8CHptxjne1mpCeUsh",
      "images" : [ {
        "height" : 600,
        "url" : "https://i.scdn.co/image/32846480abc4991be4c1e669c13fde3340792a91",
        "width" : 600
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/7944768321f501307ee491db04952c1c134ce3a6",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/40e9f9a9bec8387dfff6d924bd230c5db02d04ba",
        "width" : 64
      } ],
      "name" : "Bata Barata",
      "popularity" : 0,
      "type" : "artist",
      "uri" : "spotify:artist:6EcVR8CHptxjne1mpCeUsh"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/4mEVM7FpPhMFZx7pfRKKNQ"
      },
      "followers" : {
        "href" : null,
        "total" : 3
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/4mEVM7FpPhMFZx7pfRKKNQ",
      "id" : "4mEVM7FpPhMFZx7pfRKKNQ",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/ccccbb8a17d76961d2e34198a238b58d92c6f35d",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/1a1e135937bd75251883c416136d0f8621ea5708",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/e913e9c127520717f942cfbce37cf0a9a1f6ec31",
        "width" : 64
      } ],
      "name" : "Bata Band",
      "popularity" : 0,
      "type" : "artist",
      "uri" : "spotify:artist:4mEVM7FpPhMFZx7pfRKKNQ"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/5abVrVyplBijmdEaKk1iZX"
      },
      "followers" : {
        "href" : null,
        "total" : 1
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/5abVrVyplBijmdEaKk1iZX",
      "id" : "5abVrVyplBijmdEaKk1iZX",
      "images" : [ ],
      "name" : "Bata Raki",
      "popularity" : 0,
      "type" : "artist",
      "uri" : "spotify:artist:5abVrVyplBijmdEaKk1iZX"
    } ],
    "limit" : 20,
    "next" : "https://api.spotify.com/v1/search?query=bata&type=artist&market=US&offset=20&limit=20",
    "offset" : 0,
    "previous" : null,
    "total" : 54
  }
};
                            



         constructor() {}

        searchMusic(str:string,type="artist"):Observable<any>{
              return Observable.of(this.serchResultOriginal);

          }

             getArtist(id:string):Observable<any>{     
               return Observable.of(this.artist);

              }

               getAlbums(artistId:string):Observable<any>{     
                return Observable.of(this.albums);

              }
               getAlbum(albumId:string):Observable<any>{     
                return Observable.of(this.album);

              }



   serchResult = [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/3t0NEKDuENLcoDV4la0pG4"
      },
      "followers" : {
        "href" : null,
        "total" : 112
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/3t0NEKDuENLcoDV4la0pG4",
      "id" : "3t0NEKDuENLcoDV4la0pG4",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/b7ca6b52e0b4f4c110573e6a9a7b1a636c8ba6b0",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/9b4ed645cf8e442d8af61a99208b07e1c3710494",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/6260c13e700fdf4efd7d67bc45b008880264a02b",
        "width" : 64
      } ],
      "name" : "Batà",
      "popularity" : 6,
      "type" : "artist",
      "uri" : "spotify:artist:3t0NEKDuENLcoDV4la0pG4"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/7x8uj5JgTgmsAFoh8vHfzK"
      },
      "followers" : {
        "href" : null,
        "total" : 36
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/7x8uj5JgTgmsAFoh8vHfzK",
      "id" : "7x8uj5JgTgmsAFoh8vHfzK",
      "images" : [ ],
      "name" : "Dj Bata Boy",
      "popularity" : 26,
      "type" : "artist",
      "uri" : "spotify:artist:7x8uj5JgTgmsAFoh8vHfzK"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/1VMT2ELGIuxbMa5WcdVCS1"
      },
      "followers" : {
        "href" : null,
        "total" : 65
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/1VMT2ELGIuxbMa5WcdVCS1",
      "id" : "1VMT2ELGIuxbMa5WcdVCS1",
      "images" : [ ],
      "name" : "Tambores Bata",
      "popularity" : 9,
      "type" : "artist",
      "uri" : "spotify:artist:1VMT2ELGIuxbMa5WcdVCS1"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/4LaL7eRBrAXVj5MyRQ7TW1"
      },
      "followers" : {
        "href" : null,
        "total" : 859
      },
      "genres" : [ "schlager", "volksmusik" ],
      "href" : "https://api.spotify.com/v1/artists/4LaL7eRBrAXVj5MyRQ7TW1",
      "id" : "4LaL7eRBrAXVj5MyRQ7TW1",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/00f50e498efe9418e876b765e0f7069ab54f7a19",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/8f83ca8a0e44041348a28cf0ea4408b23e283e01",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/9acb4e21479719d1794106c89bd417c19a8ae3b9",
        "width" : 64
      } ],
      "name" : "Bata Illic",
      "popularity" : 28,
      "type" : "artist",
      "uri" : "spotify:artist:4LaL7eRBrAXVj5MyRQ7TW1"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0febJFKLfkMudI8cpqezzX"
      },
      "followers" : {
        "href" : null,
        "total" : 25
      },
      "genres" : [ "steelpan" ],
      "href" : "https://api.spotify.com/v1/artists/0febJFKLfkMudI8cpqezzX",
      "id" : "0febJFKLfkMudI8cpqezzX",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/b0eded59fc9638e7f79c9af2433131b7bfee9b31",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/85d9d1ee058d13ef0802e19c09ea4ec68f24248d",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/3f8aab348490bc326edfc30df9d4052cfef14a20",
        "width" : 64
      } ],
      "name" : "Bakra Bata",
      "popularity" : 0,
      "type" : "artist",
      "uri" : "spotify:artist:0febJFKLfkMudI8cpqezzX"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/7BotcsKnmi44lppAQ79Kog"
      },
      "followers" : {
        "href" : null,
        "total" : 2
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/7BotcsKnmi44lppAQ79Kog",
      "id" : "7BotcsKnmi44lppAQ79Kog",
      "images" : [ ],
      "name" : "Bata Ensemble",
      "popularity" : 0,
      "type" : "artist",
      "uri" : "spotify:artist:7BotcsKnmi44lppAQ79Kog"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/32vP53DCcpsHYhsPjoXEdq"
      },
      "followers" : {
        "href" : null,
        "total" : 20
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/32vP53DCcpsHYhsPjoXEdq",
      "id" : "32vP53DCcpsHYhsPjoXEdq",
      "images" : [ ],
      "name" : "Batá trio",
      "popularity" : 1,
      "type" : "artist",
      "uri" : "spotify:artist:32vP53DCcpsHYhsPjoXEdq"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0s0NZvsaQ7FQbXTqnJ2Nh1"
      },
      "followers" : {
        "href" : null,
        "total" : 10
      },
      "genres" : [ "deep italo disco" ],
      "href" : "https://api.spotify.com/v1/artists/0s0NZvsaQ7FQbXTqnJ2Nh1",
      "id" : "0s0NZvsaQ7FQbXTqnJ2Nh1",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/ec19e46f456bb19f2b6d4e855eab8c278ffda4bd",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/11e73a1ac1830117c0de69165ecc0537b0a97cdd",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/c67bba64da27f89c6a1f79b1179c2c52ebea0c3f",
        "width" : 64
      } ],
      "name" : "Bata Drum",
      "popularity" : 1,
      "type" : "artist",
      "uri" : "spotify:artist:0s0NZvsaQ7FQbXTqnJ2Nh1"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/5X9mG9wM8tFJZdiOfWOtuA"
      },
      "followers" : {
        "href" : null,
        "total" : 4
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/5X9mG9wM8tFJZdiOfWOtuA",
      "id" : "5X9mG9wM8tFJZdiOfWOtuA",
      "images" : [ ],
      "name" : "Bongo Batà",
      "popularity" : 3,
      "type" : "artist",
      "uri" : "spotify:artist:5X9mG9wM8tFJZdiOfWOtuA"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/59pJRfymIwbM0vHXgRGtT2"
      },
      "followers" : {
        "href" : null,
        "total" : 57
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/59pJRfymIwbM0vHXgRGtT2",
      "id" : "59pJRfymIwbM0vHXgRGtT2",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/d50950fa5bd5b05bb8bc0d5b14e81b5c65d3be0b",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/d10dd57483552754ef1de00c824e8a08c64228a0",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/ab97c4da0ab7f041be294d3845f0aa9f2545c4ca",
        "width" : 64
      } ],
      "name" : "Bata Kouyaté",
      "popularity" : 1,
      "type" : "artist",
      "uri" : "spotify:artist:59pJRfymIwbM0vHXgRGtT2"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0id3Yt5ovVtIbPShRJ3p8Y"
      },
      "followers" : {
        "href" : null,
        "total" : 1
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/0id3Yt5ovVtIbPShRJ3p8Y",
      "id" : "0id3Yt5ovVtIbPShRJ3p8Y",
      "images" : [ ],
      "name" : "Bata Zivojinovic",
      "popularity" : 0,
      "type" : "artist",
      "uri" : "spotify:artist:0id3Yt5ovVtIbPShRJ3p8Y"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/7BviFgrRqWEVG8gWg85JuA"
      },
      "followers" : {
        "href" : null,
        "total" : 39
      },
      "genres" : [ "turbo folk" ],
      "href" : "https://api.spotify.com/v1/artists/7BviFgrRqWEVG8gWg85JuA",
      "id" : "7BviFgrRqWEVG8gWg85JuA",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/0c1c092a83e1a36ec5dc6c952603ec69101a0ebc",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/3aa0a80f77800ecb9148bc713b9e8c12d928da0c",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/0e88beed58a33949a37257242d9272f970613ed7",
        "width" : 64
      } ],
      "name" : "Bata Zdravkovic",
      "popularity" : 5,
      "type" : "artist",
      "uri" : "spotify:artist:7BviFgrRqWEVG8gWg85JuA"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0EvNLqfqyX5UhbLJAgr0zw"
      },
      "followers" : {
        "href" : null,
        "total" : 1
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/0EvNLqfqyX5UhbLJAgr0zw",
      "id" : "0EvNLqfqyX5UhbLJAgr0zw",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/d133ccf014f12ab2b59629c087f2a2ab063936f1",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/80b6ae3cc849c5fb37128819f29d175f90b265c8",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/bb357ae095dc83ad64936df2200c69debb595508",
        "width" : 64
      } ],
      "name" : "Lepi Bata",
      "popularity" : 0,
      "type" : "artist",
      "uri" : "spotify:artist:0EvNLqfqyX5UhbLJAgr0zw"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/6ATOMHptecYUWVufyqEAhe"
      },
      "followers" : {
        "href" : null,
        "total" : 3
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/6ATOMHptecYUWVufyqEAhe",
      "id" : "6ATOMHptecYUWVufyqEAhe",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/41b4db38e1ba52a021c9564c08bee1d2bd35a4ac",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/0df63dcec3170d0d8042bf88aad5fe84b26c900b",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/59ad0fbce1f234dcc260080245305eee2e011d16",
        "width" : 64
      } ],
      "name" : "Waleed Bata",
      "popularity" : 0,
      "type" : "artist",
      "uri" : "spotify:artist:6ATOMHptecYUWVufyqEAhe"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/57p0InbKcmZfTBZVXq87VT"
      },
      "followers" : {
        "href" : null,
        "total" : 1
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/57p0InbKcmZfTBZVXq87VT",
      "id" : "57p0InbKcmZfTBZVXq87VT",
      "images" : [ ],
      "name" : "Fool Bata",
      "popularity" : 0,
      "type" : "artist",
      "uri" : "spotify:artist:57p0InbKcmZfTBZVXq87VT"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/1DehWuLQLDVOOwJ7EpITZr"
      },
      "followers" : {
        "href" : null,
        "total" : 16
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/1DehWuLQLDVOOwJ7EpITZr",
      "id" : "1DehWuLQLDVOOwJ7EpITZr",
      "images" : [ ],
      "name" : "Bata Ketu",
      "popularity" : 0,
      "type" : "artist",
      "uri" : "spotify:artist:1DehWuLQLDVOOwJ7EpITZr"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/61NM0gVdvnshtgi5T9lHCe"
      },
      "followers" : {
        "href" : null,
        "total" : 26
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/61NM0gVdvnshtgi5T9lHCe",
      "id" : "61NM0gVdvnshtgi5T9lHCe",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/46192d8a3b8d0897d0ec66584de45e3770bf77e1",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/ec139edfb3db76391106218f2e00879dcf18f267",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/559a59e25b6c1687db89c1641d9721282f2b9bfb",
        "width" : 64
      } ],
      "name" : "Son Bata",
      "popularity" : 0,
      "type" : "artist",
      "uri" : "spotify:artist:61NM0gVdvnshtgi5T9lHCe"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/6EcVR8CHptxjne1mpCeUsh"
      },
      "followers" : {
        "href" : null,
        "total" : 12
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/6EcVR8CHptxjne1mpCeUsh",
      "id" : "6EcVR8CHptxjne1mpCeUsh",
      "images" : [ {
        "height" : 600,
        "url" : "https://i.scdn.co/image/32846480abc4991be4c1e669c13fde3340792a91",
        "width" : 600
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/7944768321f501307ee491db04952c1c134ce3a6",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/40e9f9a9bec8387dfff6d924bd230c5db02d04ba",
        "width" : 64
      } ],
      "name" : "Bata Barata",
      "popularity" : 0,
      "type" : "artist",
      "uri" : "spotify:artist:6EcVR8CHptxjne1mpCeUsh"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/4mEVM7FpPhMFZx7pfRKKNQ"
      },
      "followers" : {
        "href" : null,
        "total" : 3
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/4mEVM7FpPhMFZx7pfRKKNQ",
      "id" : "4mEVM7FpPhMFZx7pfRKKNQ",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/ccccbb8a17d76961d2e34198a238b58d92c6f35d",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/1a1e135937bd75251883c416136d0f8621ea5708",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/e913e9c127520717f942cfbce37cf0a9a1f6ec31",
        "width" : 64
      } ],
      "name" : "Bata Band",
      "popularity" : 0,
      "type" : "artist",
      "uri" : "spotify:artist:4mEVM7FpPhMFZx7pfRKKNQ"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/5abVrVyplBijmdEaKk1iZX"
      },
      "followers" : {
        "href" : null,
        "total" : 1
      },
      "genres" : [ ],
      "href" : "https://api.spotify.com/v1/artists/5abVrVyplBijmdEaKk1iZX",
      "id" : "5abVrVyplBijmdEaKk1iZX",
      "images" : [ ],
      "name" : "Bata Raki",
      "popularity" : 0,
      "type" : "artist",
      "uri" : "spotify:artist:5abVrVyplBijmdEaKk1iZX"
    } ];





              

      }



