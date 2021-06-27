window.onload = function() {
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "b721fb7cb7mshc145aec713358ffp15a997jsneacfc76db713",
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
            }
        })
        .then((response) => response.json())
        .then(jsonData => {
            console.log(jsonData.data);

            let albumName = document.getElementsByClassName('api-class1')
            for (let i = 0; i < albumName.length; i++) {
                albumName[i].innerHTML = jsonData.data[i].album.title
            }
            let albumContent = document.getElementsByClassName('api-class')
            for (let i = 0; i < albumName.length; i++) {
                albumContent[i].innerHTML = jsonData.data[i].title_short
            }
            let imageContent = document.getElementsByClassName('card-img-top')
            for (let i = 0; i < imageContent.length; i++) {
                imageContent[i].setAttribute('src', jsonData.data[i].album.cover_medium)
            }
            /* let albumButton = document.getElementsByClassName('album-class')[0]
             albumButton.addEventListener('click', function() {
                 let textArea = document.getElementsByTagName('textarea')[0]
                 for (let i = 0; i < jsonData.data.length; i++) {
                     textArea.innerHTML += jsonData.data[i].album.title
                 }
             })*/
            let sessionValue = ''
            let sessionImage = ''
            let selectedCard = document.getElementsByClassName('card-class')
            for (let i = 0; i < selectedCard.length; i++) {
                selectedCard[i].addEventListener('click', function() {
                    sessionValue = jsonData.data[i].album.title
                    sessionImage = jsonData.data[i].album.cover_medium
                        //console.log(sessionValue)
                    sessionStorage.setItem("sessionValue", sessionValue);
                    sessionStorage.setItem("sessionImage", sessionImage);
                    location.href = 'album.html'
                })
            }


            /*sessionStorage.setItem("selectedCard", selectedCard)
                //selectedCard.setAttribute('onclick', "location.href='album.html'")
            selectedCard.addEventListener('click', function() {
                location.href = 'album.html'
            })*/

        })
        .catch(err => {
            console.error(err);
        });
}

/*function getAlbum() {
    let albumImage = document.getElementsByClassName('album-image')[0]
    albumImage.setAttribute('src', jsonData.data[0].album.cover_medium)
}*/