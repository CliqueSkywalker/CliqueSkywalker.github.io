const ap = new APlayer({
    container: document.getElementById('aplayer'),
    mini: false,
    autoplay: false,
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: 90,
    lrcType: 3,
    fixed: true,
    audio: [
        {
            name: 'Street Light',
            artist: 'John Maus',
            url: 'http://music.163.com/song/media/outer/url?id=18660923.mp3',
            cover: 'http://p1.music.126.net/3IkEMofxhZro1rNA48avqA==/109951163391614956.jpg',
            lrc: ''
        },
        {
            name: 'Auto Pilot',
            artist: 'さユり',
            url: 'http://music.163.com/song/media/outer/url?id=27052547.mp3',
            cover: 'http://p2.music.126.net/4ArkEOBnFNTUI14apkg_2A==/2536573325526461.jpg',
            lrc: ''
        },
    ]
});