const imgContainer = document.getElementById('dog-image-container')

fetch("https://dog.ceo/api/breeds/image/random/4")
.then(response => response.json())
.then(data => {
    data.message.forEach(eachImageLink => {
        const img = document.createElement('img')
        img.src = eachImageLink
        imgContainer.append(img)
    })
})

const ulContainer = document.getElementsByTagName('ul')

fetch("https://dog.ceo/api/breeds/list/all")
.then(r => r.json())
.then(data => {
    const dogBreedsData = data.message
    // console.log(dogBreedsData)
    dogBreedsData.forEach(eachBreedImg => {
        console.log(eachBreedImg)
        const li = document.createElement('li')
        li.innerText = eachBreedImg
        ulContainer.append(li)
    })
})
