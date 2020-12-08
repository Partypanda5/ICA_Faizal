const beginBtn = document.querySelector('#btn-begin');
const iframeOne = document.querySelector('#video1');
const iframeTwo = document.querySelector('#video2');
const switchControl = document.querySelector('#switchControl');
const title = document.querySelector('#title');
var playerOne = new Vimeo.Player(iframeOne);
var playerTwo = new Vimeo.Player(iframeTwo);

var playVideoOne = true;
var playVideoTwo = false;

beginBtn.addEventListener('click', () => {
    overlay.style.opacity = 0;
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 1000);
    playerOne.play();
    playerTwo.play();
    playerOne.setVolume(1);
    playerTwo.setVolume(0);
});

switchControl.addEventListener("click", () => 
{
    if (playVideoOne === true)
    {
        iframeOne.style.display = "none";
        iframeTwo.style.display = "block";
        playVideoOne = false;
        playVideoTwo = true;
    }

    else if (playVideoTwo === true)
    {
        iframeOne.style.display = "block";
        iframeTwo.style.display = "none";
        playVideoOne = true;
        playVideoTwo = false;
    }
});

var currentPos = "";
vdo_play = setInterval(function ()
{
    playerOne.on('timeupdate', function (getAll)
    {
        currentPos = getAll.seconds; //get currentime
       console.log('currentPos: ' + currentPos);
    });

    if (currentPos > 104)
    {
        iframeOne.style.display = "none";
        iframeTwo.style.display = "block";
        playVideoOne = false;
        playVideoTwo = true;
        switchControl.style.display = "none";
        title.style.display = "block";

        console.log('switched');
    }

}, 1000);