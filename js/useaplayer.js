const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false,
    theme: '#FADFA3',
    loop: 'all',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: true,
    listMaxHeight: 90,
    fixed: true,
    lrcType: 3,
    audio: [
        {
            name: 'Femenine',
            artist: 'Julius Eastman',
            url: 'http://CliqueSkywalker.github.io/music/Julius Eastman - Femenine.mp3',
            cover: 'http://CliqueSkywalker.github.io/music/Julius Eastman - Femenine Cover.jpg',
            lrc: ''
        },
    ]
});