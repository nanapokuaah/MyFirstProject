document.addEventListener("DOMContentLoaded", ()=> {
    const dropdown = document.querySelector("#genre")
    const songDiv = document.querySelector('#display-song')
    const bgimg = document.querySelector('#bg-img')
    const searchBar = document.querySelector("#search-bar")

    fetch("http://localhost:3000/music")
    .then((response) => response.json())
    .then((data) => {
       const musicArray = data
        console.log(musicArray)

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
            
            // console.log(e.target.value); //  get selected VALUE
            const addSong = document.createElement('p')

            // musicArray.forEach(song =>{
                
                if(e.target.value == "Country"){
                    bgimg.src = musicArray[0].image
                    addSong.textContent = musicArray[0].link
                    bgimg.addEventListener('click', () =>{
                        songDiv.textContent = ''
                        const artistName = document.createElement('p')
                        artistName.textContent = `${musicArray[0].artist} | ${musicArray[0].song}`
                        songDiv.append(artistName)
                    })
                    songDiv.append(addSong)
                }
                else if(e.target.value == "Rock Classics"){
                    bgimg.src = musicArray[1].image
                    addSong.textContent = musicArray[1].link
                    bgimg.addEventListener('click', () =>{
                        songDiv.textContent = ''
                        const artistName = document.createElement('p')
                        artistName.textContent = `${musicArray[1].artist} | ${musicArray[1].song}`
                        songDiv.append(artistName)
                    })
                    songDiv.append(addSong)
                }
                else if(e.target.value == "Afro-Beats"){
                    bgimg.src = musicArray[2].image
                    addSong.textContent = musicArray[2].link
                    bgimg.addEventListener('click', () =>{
                        songDiv.textContent = ''
                        const artistName = document.createElement('p')
                        artistName.textContent = `${musicArray[2].artist} | ${musicArray[2].song}`
                        songDiv.append(artistName)
                    })
                    songDiv.append(addSong)
                }
               
                else if(e.target.value == "Hip-Pop"){
                    bgimg.src = musicArray[3].image
                    addSong.textContent = musicArray[3].link
                    bgimg.addEventListener('click', () =>{
                        songDiv.textContent = ''
                        const artistName = document.createElement('p')
                        artistName.textContent = `${musicArray[3].artist} | ${musicArray[3].song}`
                        songDiv.append(artistName)
                    })
                    songDiv.append(addSong)
                }
                else if(e.target.value == "Classical"){
                    bgimg.src = musicArray[4].image
                    addSong.textContent = musicArray[4].link
                    bgimg.addEventListener('click', () =>{
                        songDiv.textContent = ''
                        const artistName = document.createElement('p')
                        artistName.textContent = `${musicArray[4].artist} | ${musicArray[4].song}`
                        songDiv.append(artistName)
                    })
                    songDiv.append(addSong)
                }
            

            

        })
    })
})
