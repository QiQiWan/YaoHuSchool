const dp1 = new DPlayer({
    container: document.getElementById('dplayer1'),
    autoplay: false,
    theme: '#FADFA3',
    loop: true,
    lang: 'zh-cn',
    screenshot: true,
    hotkey: true,
    preload: 'auto',
    //logo: 'https://eatrice.top/img/favcion.png',
    volume: 0.7,
    mutex: true,
    video: {
        url: 'assets/video/eduTV.mp4', //视频文件
        pic: 'assets/video/eduCover.jpg', //视频封面
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
    //logo: 'https://eatrice.top/img/favcion.png',
    volume: 0.7,
    mutex: true,
    video: {
        url: 'assets/video/statement.mp4', //视频文件
        pic: 'assets/video/statementCover.jpg', //视频封面
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