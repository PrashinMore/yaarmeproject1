function showMore(event) {
    event.preventDefault()
    event.target.previousSibling.previousSibling.classList.remove('post-para')
}

function likes() {
    i = document.getElementsByClassName('likes-counter')[0]   
    i.innerHTML = Number(i.innerHTML) + 1
}

function follow(event) {
    event.target.innerHTML = "Following"
}