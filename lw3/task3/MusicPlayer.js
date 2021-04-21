var MusicPlayer = {
  trackList: [
    { trackName: 'song1.mp3', trackTime: '01:00', },
    { trackName: 'song2.mp3', trackTime: '01:30', },
    { trackName: 'song3.mp3', trackTime: '02:00', },
  ],
  currentTrack: 'song1.mp3',
  currentTime: '00:00',
  status: 'pause',
  display: function () {
    return 'Track: ' + this.currentTrack + ', Status: ' + this.status + ', Time: ' + this.currentTime;
  },
  play: function () {
    this.status = 'play';
    this.startTimer();
  },
  pause: function () {
    this.stopTimer();
    this.status = 'pause';
  },
  next: function () {
    var trackNameArray = this.trackList.map(track => track.trackName);
    var currentTrackIndex = trackNameArray.indexOf(this.currentTrack, 0) + 1;
    if (currentTrackIndex === trackNameArray.length) {
      currentTrackIndex = 0;
    }
    this.currentTrack = trackNameArray[currentTrackIndex];
    this.restartTimer();
  },
  prev: function () {
    if (this.currentTime >= '00:10') {
      this.restartTimer();
    } else {
      var trackNameArray = this.trackList.map(track => track.trackName);
      var currentTrackIndex = trackNameArray.indexOf(this.currentTrack, 0);
      if (this.currentTrack === trackNameArray[0]) {
        currentTrackIndex = trackNameArray.length - 1;
        this.currentTrack = trackNameArray[currentTrackIndex];
      } else {
        currentTrackIndex--;
        this.currentTrack = trackNameArray[currentTrackIndex];
      }
      this.restartTimer();
    }
  },
  showTracks: function () {
    var trackNameArray = this.trackList.map(track => track.trackName);
    for (var i = 0; i < trackNameArray.length; i++) {
      if (trackNameArray[i] === this.currentTrack) {
        console.log([i + 1] + '. ' + trackNameArray[i] + ' - ' + this.currentTime + ' - играет сейчас');
      } else {
        console.log([i + 1] + '. ' + trackNameArray[i]);
      }
    }
  },
  timer: 0,
  startTimer: function () {
    clearInterval(this.timer);
    var trackNameArray = this.trackList.map(track => track.trackName);
    var trackTimeArray = this.trackList.map(track => track.trackTime);
    var minute = +(this.currentTime[0] + this.currentTime[1]);
    var second = +(this.currentTime[3] + this.currentTime[4]);
    this.timer = setInterval(() => {
      if (second > 59) {
        second = 0;
        minute++;
      }
      if (minute < 10 && second < 10) {
        this.currentTime = '0' + minute + ':0' + second;
      } else if (minute < 10 && second >= 10) {
        this.currentTime = '0' + minute + ':' + second;
      } else if (minute >= 10 && second < 10) {
        this.currentTime = minute + ':0' + second;
      } else {
        this.currentTime = minute + ':' + second;
      }
      second++;
      var currentTrackIndex = trackNameArray.indexOf(this.currentTrack, 0);
      if (this.currentTime >= trackTimeArray[currentTrackIndex] && currentTrackIndex === trackNameArray.length - 1) {
        this.pause();
        this.next();
      } else if (this.currentTime >= trackTimeArray[currentTrackIndex]) {
        this.next();
      }
    }, 1000);
  },
  stopTimer: function () {
    clearInterval(this.timer);
  },
  restartTimer: function () {
    this.stopTimer();
    this.currentTime = '00:00';
    if (this.status === 'play') {
      setTimeout(() => {
        this.startTimer();
      }, 100);
    }
  },
};