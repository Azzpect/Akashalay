const queryString = window.location.search
const urlParam = new URLSearchParams(queryString)
const planetName = urlParam.get('name')
const planet_img = document.querySelector('.planet-img')

planet_img.src = `/public/images/${planetName}.png`
if(planetName == "saturn")
    planet_img.style.width = "550px"
if(planetName == "sun")
    planet_img.style.width = "550px"
document.querySelector('title').innerHTML = `Akashalay - ${planetName.toUpperCase()}`

imgAnimation()
fetchPlanetData(planetName)






async function fetchPlanetData(planetName) {
    const res = await fetch(`/get-planet-desc`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
            "planetName": planetName
        }
    })
    const data = await res.json()
    document.getElementById("planet-name").innerHTML = planetName.toUpperCase()
    document.querySelector(".intro>.short-desc").innerHTML = data.ShortDesc
    document.querySelector(".full-desc").innerHTML = data.FullDesc
} 
function imgAnimation() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting)
                entry.target.classList.add("show-img") 
        })
    })
    const element = document.querySelector(".planet-img")
    observer.observe(element)
}