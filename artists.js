window.onload = function() {
    let sessionArtist = sessionStorage.getItem("sessionArtist");
    let sessionXlImage = sessionStorage.getItem("sessionXlImage");

    let artistName = document.getElementsByClassName('artist-name')[0]
    artistName.innerHTML = sessionArtist

    //let bgImage = document.getElementsByClassName('img-fluid')[0]
    //bgImage.setAttribute('src', sessionXlImage)
}