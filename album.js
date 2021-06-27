window.onload = function() {
    let sessionValue = sessionStorage.getItem("sessionValue");
    let sessionImage = sessionStorage.getItem("sessionImage");
    let sessionArtist = sessionStorage.getItem("sessionArtist");
    console.log(sessionArtist);
    //console.log(jsonData.data[0].title)
    let albumImage = document.getElementsByClassName('album-image')[0]
    albumImage.setAttribute('src', sessionImage)

    let albumTitle = document.getElementsByClassName('album-title')[0]
    albumTitle.innerText = sessionValue

    let artistName = document.getElementById('album-artist')
    artistName.innerHTML = sessionArtist

    artistName.addEventListener('click', function() {
        location.href = 'artists.html'
    })
}