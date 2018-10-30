import firebase from 'nativescript-plugin-firebase'
import store from '../store';
import uuid from 'vue-uuid';

export default class BreweryService {
    getCurrentUser() {
        firebase.getCurrentUser().then(
          function (user) {
            console.log("getting user")
            var path = "/Users/" + user.uid + "/Breweries";
            var onValueEvent = function (result) {
              if (result.error) {
                console.log(result.error)
              } else {
                if (result.value == null) {
                  console.log("no breweries!");
                } else {
                  const obj = result.value;
                  const breweries = Object.keys(obj || {}).map(key => ({
                    id: key,
                    BreweryName: obj[key].BreweryName
                  }));
                  console.log(breweries);
                  store.commit('setBreweries', breweries);
                }
              }
            };
    
            firebase.addValueEventListener(onValueEvent, path).then(
              function (result) {
                that._listenerWrapper = result;
                console.log("firebase.addValueEventListener added");
              },
              function (error) {
                console.log("firebase.addValueEventListener error: " + error);
              }
            );
          }
        );
    }

    addBrewery(brewery) {
        const path = "/Users/" + store.user.uid + "/Breweries";

        firebase.push(
            path,
            {
                'uid': uuid.v4(),
                'name': brewery.name,
                'address': brewery.address,
                'coordinates': {
                    'lng': brewery.coords.lng, 
                    'lat': brewery.coords.lat
                },
                'beers': brewery.beers
            }
        ).then(
            function(result) {
                store.commit("pushBrewery", brewery);
                console.log("New Brewery Added: " + result.key);
            },
            error => {
              console.log("firebase.push error: " + error);
            }
        );
    }

    removeBrewery(brewery) {
        const path = "/Users/" + store.user.uid + "/Breweries/" + brewery.uid;

        firebase.remove(path)
        .then(
            function(result) {
                console.log("Removed Brewery: " + result.key);
            },
            error => {
                console.log("firebase.remove error: " + error);
            }
        )
    }

    addBeer(brewery, beer) {
        const path = "/Users/" + store.user.uid + "/Breweries/" + brewery.uid;

        firebase.push(
            path,
            {
                'uid': uuid.v4(),
                'name': beer.name,
                'type': beer.type,
                'ibu': beer.ibu,
                'alcohol': beer.alcohol,
                'rating': beer.rating,
                'image': beer.image
            }
        ).then(
            function(result) {
                console.log("New Beer Added: " + result.key);
                store.commit('pushBeer', brewery, beer);
            },
            error => {
              console.log("firebase.push error: " + error);
            }
        );
    }

    removeBeer(brewery, beer) {
        const path = "/Users/" + store.user.uid + "/Breweries/" + brewery.uid + "/Beers/" + beer.uid; 

        firebase.remove(path)
        .then(
            function(result) {
                console.log("Removed Beer: " + result.key);
            },
            error => {
                console.log("firebase.remove error: " + error);
            }
        )
    }
}