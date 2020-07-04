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
        url: 'https://csrc.vcloud.dogecdn.com/vcloud/17/v/20190424/1556036075_818c4125ec9c8cbc7a7a8a7cc1601512/1037/7d515b22c4958598c0fbd1e6290a5ca5.mp4?vkey=AE2B2FED2453B7C00E48328020B04307C8221051159815830320AEFDD81A34D049DEBF8CB0CF9552B96EFF18E7826590656B0FC8D02600A78EB64130EB4D632BDD0D66A749C43D3886AE9F080F9C7BFDC314BB8D0D4AE7C4480D81534F9810CBC3F88FBA39EF5948ECDBA8AE5D38EAF07A297DBBF8D5E23F3FC49BFAD67A2558CCFE54292535ED9D9EAD6718AECAD4ED&tkey=1593822474c24239adae&auth_key=1593836874-WtlWRHiPfPJH2NpB-0-08966719663ab5dacdd40f79085f0184',//视频文件
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
        url: 'https://csrc.vcloud.dogecdn.com/vcloud/17/v/20190424/1556036075_818c4125ec9c8cbc7a7a8a7cc1601512/1037/7d515b22c4958598c0fbd1e6290a5ca5.mp4?vkey=AE2B2FED2453B7C00E48328020B04307C8221051159815830320AEFDD81A34D049DEBF8CB0CF9552B96EFF18E7826590656B0FC8D02600A78EB64130EB4D632BDD0D66A749C43D3886AE9F080F9C7BFDC314BB8D0D4AE7C4480D81534F9810CBC3F88FBA39EF5948ECDBA8AE5D38EAF07A297DBBF8D5E23F3FC49BFAD67A2558CCFE54292535ED9D9EAD6718AECAD4ED&tkey=1593822474c24239adae&auth_key=1593836874-WtlWRHiPfPJH2NpB-0-08966719663ab5dacdd40f79085f0184',//视频文件
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