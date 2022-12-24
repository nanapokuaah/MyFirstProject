document.addEventListener("DOMContentLoaded", ()=> {
    const dropdown = document.querySelector("#genre")
    const songDiv = document.querySelector('#display-song')
    const bgimg = document.querySelector('#bg-img')
    const searchBar = document.querySelector("#search-bar")

    fetch("http://localhost:3000/music")
    .then((response) => response.json())
    .then((data) => {
       const musicArray = data
    //})
        // musicArray.forEach(artistObj => {
        //     const img = document.createElement('img')
        //     img.style.width = "400px";
        //     img.style.height = "400px";
        //     img.src = artistObj.image
        //     songDiv.append(img)
        // })
        
        const searchResultContainer = document.querySelector('#searchResultContainer')
        searchBar.addEventListener('submit',(e) => {
            e.preventDefault();
            searchResultContainer.textContent=''
            const searchInput = e.target.search.value;
            if(searchInput ===""){
                window.alert("Input is blank")
            }
            const filteredArray = musicArray.filter(eachObj => {
                return eachObj.song.toLowerCase() == searchInput.toLowerCase()
            })
            const searchResult = document.createElement('p')
            console.log(`${filteredArray[0].album} | ${filteredArray[0].year}`)
            searchResult.textContent = `${filteredArray[0].album} | ${filteredArray[0].year}`
           searchResultContainer.append(searchResult)

        })
        dropdown.addEventListener('change', function handleChange(e) {
            songDiv.textContent = ''
            const target = e.target.value
            // console.log(e.target.value); //  get selected VALUE
            const addSong = document.createElement('p')
            // musicArray.forEach(song =>{
                const finder = musicArray.find((song) => song.genre ===target)
                //console.log(finder)
                if(e.target.value == finder.genre){
                    bgimg.src = finder.image
                    addSong.textContent = finder.hyperlink
                    bgimg.addEventListener('click', () =>{
                        songDiv.textContent = ''
                        const artistName = document.createElement('p')
                        artistName.textContent = `${finder.artist} | ${finder.song}`
                        songDiv.append(artistName)
                    })
                    songDiv.append(addSong)
                }
        })
 
    })      
            })
        
