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
            artist: 'Queens of the Stone Age',
            url: 'http://music.163.com/song/media/outer/url?id=27052547.mp3',
            cover: 'http://p2.music.126.net/4ArkEOBnFNTUI14apkg_2A==/2536573325526461.jpg',
            lrc: ''
        },
        {
            name: 'Not the Sun',
            artist: 'Brand New',
            url: 'http://music.163.com/song/media/outer/url?id=16813476.mp3',
            cover: 'http://p2.music.126.net/6Ur8Mk5-BweGCZzZLVRc_A==/109951167637374655.jpg',
            lrc: 'https://redatom.top/lrc/Not the Sun.lrc'
        },
        {
            name: 'It\'s You',
            artist: 'Animal Collective',
            url: 'http://music.163.com/song/media/outer/url?id=16493900.mp3',
            cover: 'http://p2.music.126.net/muuLitiDCJdAEVnbfSBCaQ==/109951165166485770.jpg',
            lrc: ''https://redatom.top/lrc/It\'s You.lrc'
        },
        {
            name: '午後',
            artist: 'death\'s dynamic shroud',
            url: 'http://music.163.com/song/media/outer/url?id=1392514991.mp3',
            cover: 'http://p1.music.126.net/LOOWgydP-ZdCL5zWC0mn9w==/109951164379853882.jpg',
            lrc: ''
        },
        {
            name: 'The Other Side',
            artist: 'The Dismemberment Plan',
            url: 'http://music.163.com/song/media/outer/url?id=19416116.mp3',
            cover: 'http://p1.music.126.net/5FQJEAhf7vEkTrnYtrdzMA==/109951166350043916.jpg',
            lrc: 'https://redatom.top/lrc/The Other Side.lrc'
        },
        {
            name: 'Liberation Frequency',
            artist: 'Refused',
            url: 'http://music.163.com/song/media/outer/url?id=18751260.mp3',
            cover: 'http://p2.music.126.net/LDjG47cLPkMG41txhOHW8w==/109951164497608984.jpg',
            lrc: 'https://redatom.top/lrc/Liberation Frequency.lrc'
        },
        {
            name: '2:35 (Version 2)',
            artist: 'Spacemen 3',
            url: 'http://music.163.com/song/media/outer/url?id=3430981.mp3',
            cover: 'http://p2.music.126.net/ZXtenTd_P13JKQZ3YDlv6g==/1777910302120005.jpg',
            lrc: ''
        },
        {
            name: 'Call of the Wild',
            artist: 'SB The Moor',
            url: 'http://music.163.com/song/media/outer/url?id=1831494316.mp3',
            cover: 'http://p1.music.126.net/zgKJM7fZaANkRfS-oLHeOQ==/109951165825714963.jpg',
            lrc: ''
        },

    ]
});