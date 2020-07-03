const dp1 = new DPlayer({
    container: document.getElementById('dplayer1'),
    autoplay: false,
    theme: '#FADFA3',
    loop: true,
    lang: 'zh-cn',
    screenshot: true,
    hotkey: true,
    preload: 'auto',
    logo: 'https://eatrice.top/img/favcion.png',
    volume: 0.7,
    mutex: true,
    video: {
        url: 'https://csrc.vcloud.dogecdn.com/vcloud/17/v/20190424/1556036075_818c4125ec9c8cbc7a7a8a7cc1601512/1037/7d515b22c4958598c0fbd1e6290a5ca5.mp4?vkey=05FB74FAAD8C33595306B6E31C00241E1BB55312E211CFDDA41714290A22DC4322DAD26722AA37FFE9B74F6395E13BEBC15A74867C20BD84B9C011CBA7C471D3D89A5D6FA42FF04AAF27416790596DB9556D0A628CD8AED4FDA43391B53B9859EAE612BD186563A33E8C8DFD57D4E68D63CF85CB7904D5AE772A91828F36CDB0F1CE9F64F18CB9716C2A74C35271857B149C01EB88DCAD41676945F249C19895&tkey=1593784202f89e2b40d4&auth_key=1593798602-3vv3S1iS4N7wHvsR-0-f2579ca6d919bd6df09ddaafc36e43ff',//视频文件
        //pic: '1.png',//视频封面
        //thumbnails: 'thumbnails.jpg',//视频缩略图
        type: 'auto',
    }
    // subtitle: {
    //     url: '动态图标宣传视频',
    //     type: 'webvtt',
    //     fontSize: '25px',
    //     bottom: '10%',
    //     color: '#b7daff',
    // }
});

const dp2 = new DPlayer({
    container: document.getElementById('dplayer2'),
    autoplay: false,
    theme: '#FADFA3',
    loop: true,
    lang: 'zh-cn',
    screenshot: true,
    hotkey: true,
    preload: 'auto',
    logo: 'https://eatrice.top/img/favcion.png',
    volume: 0.7,
    mutex: true,
    video: {
        url: 'https://csrc.vcloud.dogecdn.com/vcloud/17/v/20190424/1556036075_818c4125ec9c8cbc7a7a8a7cc1601512/1037/7d515b22c4958598c0fbd1e6290a5ca5.mp4?vkey=05FB74FAAD8C33595306B6E31C00241E1BB55312E211CFDDA41714290A22DC4322DAD26722AA37FFE9B74F6395E13BEBC15A74867C20BD84B9C011CBA7C471D3D89A5D6FA42FF04AAF27416790596DB9556D0A628CD8AED4FDA43391B53B9859EAE612BD186563A33E8C8DFD57D4E68D63CF85CB7904D5AE772A91828F36CDB0F1CE9F64F18CB9716C2A74C35271857B149C01EB88DCAD41676945F249C19895&tkey=1593784202f89e2b40d4&auth_key=1593798602-3vv3S1iS4N7wHvsR-0-f2579ca6d919bd6df09ddaafc36e43ff',//视频文件
        //pic: '1.png',//视频封面
        //thumbnails: 'thumbnails.jpg',//视频缩略图
        type: 'auto',
    }
    // subtitle: {
    //     url: '动态图标宣传视频',
    //     type: 'webvtt',
    //     fontSize: '25px',
    //     bottom: '10%',
    //     color: '#b7daff',
    // }
});