// variables

let index = 0;
let audioElement = new Audio("https://drive.google.com/file/d/1KRpOgpvEnxGZdJ_L2VaQ36-fyS7kLtvU/preview");
let masterPlay = document.getElementById('masterPlay');
let myProgress = document.getElementById('myProgress');
let gif = document.getElementById('gif');
let songMaster = document.getElementById('songMaster');


let songs = [
    { songName: "Kashh Tu Mila Hota", filePath: "https://drive.google.com/file/d/1KRpOgpvEnxGZdJ_L2VaQ36-fyS7kLtvU/preview", coverPath: "https://lh3.googleusercontent.com/pw/AM-JKLVXinnFD98GDBjflIp1Daw2qAH1p66Xa3DA86zMRMniPUFG3uXaIQMLQIaaAvxMMAUPRHmXWrCe9LA-awMYlCFmAxcoQQUu6QMPOXo446ZIFm3sCvTHGhSQk2oB_sOcTsebxNjbsIzf9zFt5I_JrEMD=w300-h168-no?authuser=0"},
    { songName: "Tum Mere Ho", filePath: "song/2.mp3", coverPath: "https://lh3.googleusercontent.com/pw/AM-JKLUmtTHZsI_F_HqRXeq-uLdGDGKpC7Heo6hQCoADaYW3NLUNgCfybtQHZc7zwZJ6cNjbNk8Ljck-qk9lJRg8RVXjckGKaq8GXF7o5yPWjqCJbo1Jkt06Q5tzBSR_7RYKzn1Bux-IQbDTMI3JPG586MjV=s225-no?authuser=0" },
    { songName: "Feeling", filePath: "song/3.mp3", coverPath: "https://lh3.googleusercontent.com/pw/AM-JKLVZBdncJyutGqD1QAvCktovikvxw3bTC7jAf8Oq9SIkO0JpYJ_TfdTer8MWRUAJmHntiOVvPe2eu50HVa5P1ZJy3bWuChaAPAGYnMXKQzOw5TgRGZh4E7w4H04S8E0O-aK1IO5VBJ13f6_AADyF8NU5=s225-no?authuser=0" },
    { songName: "Thoda Thoda Payrr Hua", filePath: "song/4.mp3", coverPath: "https://lh3.googleusercontent.com/pw/AM-JKLVK4JZzgxWUcduZ_IY0rmiQnJo0te8PeM-Y9dHxZKHMtU4hw2GtQLv1aCIZN5d86omzHf0etc7e2ypJUBqaXNYCYHwAn66nyWIhYfTcGEJ8zFXtSQL1laYaXsoXXAtM0Z7xPnvMpFCyAT8rWmu6oCH7=s225-no?authuser=0" },
    { songName: "Barshatt Ki Dhun", filePath: "song/5.mp3", coverPath: "https://lh3.googleusercontent.com/pw/AM-JKLXXMGbcG_8Ccj78X1KVATGI6PCb4ZhItmP-AR2ueoot01ErMdWnwBHjEIGF2ZAvcrCfzgfllhzDig04FR9lEgaGjzYxbM24BmZexoZMMbPupY9CPq5F586mKxyvJeSagOXQ1cyEpJooQlO7E5xQsQgk=w275-h183-no?authuser=0" },
    { songName: "Thodi Jagah", filePath: "song/6.mp3", coverPath: "https://lh3.googleusercontent.com/pw/AM-JKLWAEH8cNuApJU6iFAwqUxraJGy9BOPpIEXRDt1azTJ0wXQYL8j17oP11lBkgAc711ZcZGMw0ae1IbxNRLUhSwX1WRuAqKzwuL9INuU6ufO5rvJuzhyi4fqQNafLAuEU2vQi3_Rxi9x4KhD9VMMfBmgP=w300-h168-no?authuser=0" },

]





/*audioElement.play();*/

// handle play and pause

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

//Listen to events

audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgress.value = progress;
});

myProgress.addEventListener('change',()=>{
    audioElement.currentTime = myProgress.value * audioElement.duration/100;
});

const makeAllPlays = ()=>{
    
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=> {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

        })
}

Array.from(document.getElementsByClassName('songItem')).forEach((element)=> {
    element.addEventListener('click', (e)=>{
       makeAllPlays();
       index = parseInt(e.target.id);
       e.target.classList.remove('fa-play-circle');
       e.target.classList.add('fa-pause-circle');
       audioElement.src = `song/${index+1}.mp3`;
       songMaster.innerText = songs[index].songName;
       audioElement.currentTime = 0;
       audioElement.play();
       gif.style.opacity = 1;
       masterPlay.classList.remove('fa-play-circle');
       masterPlay.classList.add('fa-pause-circle');
       
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(index>=5){
        index = 0;
    }
    else{
        index += 1;
    }
    audioElement.src = `song/${index+1}.mp3`;
    songMaster.innerText = songs[index].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
       
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(index<=0){
        index = 0;
    }
    else{
        index -= 1;
    }
    audioElement.src = `song/${index+1}.mp3`;
    songMaster.innerText = songs[index].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
       
})



