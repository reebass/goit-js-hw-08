
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';



const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle((data) => {
        localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(data.seconds))
       }, 1000));

const timeView = localStorage.getItem('videoplayer-current-time')

player.setCurrentTime(timeView).then(function() {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});



