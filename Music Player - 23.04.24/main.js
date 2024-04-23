const songTitle = document.getElementById("song-title");
const songArtist = document.getElementById("song-artist");
const songAlbum = document.getElementById("song-album");
const currentTime = document.getElementById("current-time");
const finishTime = document.getElementById("finish-time");
const songList = document.getElementById("song-list");

// controls
const repeat = document.getElementById("repeat-btn");
const skipPrev = document.getElementById("skip-prev-btn");
const playStop = document.getElementById("play-btn");
const skipNext = document.getElementById("skip-next-btn");
const shuffle = document.getElementById("shuffle-btn");

// song list
const songs = [
    {
        img: 'https://www.artgroup.com/assets/img/products/ACPPR48080',
        title: 'Back in Black',
        artist: 'AC-DC',
        runTime: '4:15'
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/en/2/28/Bob_Dylan_-_Knockin_on_Heavens_Door.jpg',
        title: 'Heavens Door',
        artist: 'Bob Dylan',
        runTime: '2:32'
    },
    {
        img: 'https://i1.sndcdn.com/artworks-rKlenullQoHU-0-t500x500.jpg',
        title: 'Huuricane',
        artist: 'Luke Combs',
        runTime: '3:43'
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNLq9DRAkaOZlcj1HN71dzG4mMXGEOLjQEWLbYUgZUKA&s',
        title: "Must've Have Never Met You",
        artist: 'Luke Combs',
        runTime: '3:19'
    }
];

// add the songs to the song list in the dom 
songs.forEach(song => {

    const songListItem = document.createElement("div");
    songListItem.classList.add('flex');

    songListItem.innerHTML = `
        <h3 class="song-list-title">${song.title}</h3>
        <p class="song-list-time ml-auto">${song.runTime}</p>
    `;

    songList.appendChild(songListItem);

    // loop through the songs
    const loopThroughList = () => {
        const nextSong = () => {

        }

        skipNext.addEventListener('click', nextSong);
    }
});

