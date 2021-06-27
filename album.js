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
            let sessionValue = sessionStorage.getItem("sessionValue");
            let sessionImage = sessionStorage.getItem("sessionImage");
            console.log(sessionValue);
            //console.log(jsonData.data[0].title)
            let albumImage = document.getElementsByClassName('album-image')[0]
            albumImage.setAttribute('src', sessionImage)

            let albumTitle = document.getElementsByClassName('album-title')[0]
            albumTitle.innerText = sessionValue
        })
}