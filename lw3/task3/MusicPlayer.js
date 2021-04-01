var MusicPlayer = {
  trackList: [
    { trackName: 'song1.mp3', trackTime: '01:00', },
    { trackName: 'song2.mp3', trackTime: '01:30', },
    { trackName: 'song3.mp3', trackTime: '02:00', },
  ],

  currentTrack: 'song1.mp3',

  currentTime: '00:00',

  status: 'pause',

  display: function() {
    return 'Track: ' + this.currentTrack + ', Status: ' + this.status + ', Time: ' + this.currentTime;
  },

  play: function() {
    this.status = 'play';
    this.startTimer();
  },

  pause: function() {
    this.status = 'pause';
    this.stopTimer();
  },

  next: function() {
    var trackNameArray = MusicPlayer.trackList.map(track => track.trackName);
    var indexOfCurrentTrack = trackNameArray.indexOf(this.currentTrack, 0);
    indexOfCurrentTrack++;
    if (indexOfCurrentTrack === trackNameArray.length) {
      indexOfCurrentTrack = 0;
    }
    this.currentTrack = trackNameArray[indexOfCurrentTrack];
    this.restartTimer();
  },

  prev: function() {
    if (this.currentTime >= '00:10') {
      this.restartTimer();
    }else {
      var trackNameArray = MusicPlayer.trackList.map(track => track.trackName);
      var indexOfCurrentTrack = trackNameArray.indexOf(this.currentTrack, 0);
      if (this.currentTrack === trackNameArray[0]) {
        indexOfCurrentTrack = trackNameArray.length - 1;
        this.currentTrack = trackNameArray[indexOfCurrentTrack];
      }else {
        indexOfCurrentTrack--;
        this.currentTrack = trackNameArray[indexOfCurrentTrack];
      }
      this.restartTimer();
    }
  },

  showTracks: function() {
    var trackNameArray = MusicPlayer.trackList.map(track => track.trackName);
    for (var i = 0; i < trackNameArray.length; i++) {
      if (trackNameArray[i] === this.currentTrack) {
        console.log([i+1] + '. ' + trackNameArray[i] + ' - ' + this.currentTime + ' - играет сейчас');
      }else {
        console.log([i+1] + '. ' + trackNameArray[i]);
      }
    }
  },

  timer: 0,

  startTimer: function () {
    clearInterval(MusicPlayer.timer);
    var trackNameArray = MusicPlayer.trackList.map(track => track.trackName);
    var trackTimeArray = MusicPlayer.trackList.map(track => track.trackTime);
    var minute = +(MusicPlayer.currentTime[0] + MusicPlayer.currentTime[1]);
    var second = +(MusicPlayer.currentTime[3] + MusicPlayer.currentTime[4]);
    this.timer = setInterval( function() {
      if (second > 59) {
        second = 0;
        minute++;
      }
      if (minute < 10) {
        if (second < 10) {
          MusicPlayer.currentTime = '0' + minute + ':0' + second;
        }else if (second >= 10) {
          MusicPlayer.currentTime = '0' + minute + ':' + second;
        }
      }else if (minute >= 10) {
        if (second < 10) {
          MusicPlayer.currentTime = minute + ':0' + second;
        }else if (second >= 10) {
          MusicPlayer.currentTime = minute + ':' + second;
        }
      }
      second++;
      var indexOfCurrentTrack = trackNameArray.indexOf(MusicPlayer.currentTrack, 0);
      if (MusicPlayer.currentTime >= trackTimeArray[indexOfCurrentTrack] &&
          indexOfCurrentTrack === trackNameArray.length - 1) {
            MusicPlayer.stopTimer();
            MusicPlayer.status = 'pause';
            MusicPlayer.next();
      }else if (MusicPlayer.currentTime >= trackTimeArray[indexOfCurrentTrack]) {
        MusicPlayer.next();
      }
    }, 1000);
  },

  stopTimer: function () {
    clearInterval(MusicPlayer.timer);
  },

  restartTimer: function () {
    clearInterval(MusicPlayer.timer);
    MusicPlayer.currentTime = '00:00';
    if (this.status === 'play') {
      setTimeout(function () {
        MusicPlayer.startTimer();
      }, 100);
    }
  },
};