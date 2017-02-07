var roundPerson=[];
var surprising=[
    {name:'最香鸡屎奖',pic:'img/gift/timg.jpg'},
    {name:'蓝瘦香菇奖',pic:'img/gift/notebook.jpg'},
    {name:'超级馅饼奖',pic:'img/gift/phonecard.jpg'},
    {name:'神秘大奖',pic:'img/gift/notebook.jpg'}

]
var mask=[
    {portrait:'img/face/为什么.png'},
    {portrait:'img/face/可怜.png'},
    {portrait:'img/face/大笑.png'},
    {portrait:'img/face/害羞.png'},
    {portrait:'img/face/微笑.png'},

    {portrait:'img/face/无语.png'},
    {portrait:'img/face/生气.png'},
    {portrait:'img/face/呕吐.png'},
    {portrait:'img/face/嘚瑟.png'},
    {portrait:'img/face/嘲笑.png'},

    {portrait:'img/face/大哭.png'},
    {portrait:'img/face/示爱.png'},
    {portrait:'img/face/糗大了.png'},
    {portrait:'img/face/衰.png'},
    {portrait:'img/face/阴险.png'},

    {portrait:'img/face/震惊.png'},
    {portrait:'img/face/为什么.png'},
    {portrait:'img/face/可怜.png'},
    {portrait:'img/face/呕吐.png'},
    {portrait:'img/face/嘚瑟.png'},

    {portrait:'img/face/嘲笑.png'},
    {portrait:'img/face/大哭.png'},
    {portrait:'img/face/大笑.png'},
    {portrait:'img/face/害羞.png'},
    {portrait:'img/face/为什么.png'},

    {portrait:'img/face/可怜.png'},
    {portrait:'img/face/呕吐.png'},
    {portrait:'img/face/嘚瑟.png'},
    {portrait:'img/face/嘲笑.png'},
    {portrait:'img/face/大哭.png'},

    {portrait:'img/face/微笑.png'},
    {portrait:'img/face/无语.png'},
    {portrait:'img/face/生气.png'},
    {portrait:'img/face/示爱.png'},
    {portrait:'img/face/糗大了.png'},

    {portrait:'img/face/衰.png'},
    {portrait:'img/face/阴险.png'},
    {portrait:'img/face/震惊.png'},
    {portrait:'img/face/大笑.png'},
    {portrait:'img/face/害羞.png'},

    {portrait:'img/face/微笑.png'},
    {portrait:'img/face/衰.png'},
    {portrait:'img/face/阴险.png'},
    {portrait:'img/face/震惊.png'},
    {portrait:'img/face/为什么.png'},

    {portrait:'img/face/生气.png'},
    {portrait:'img/face/示爱.png'},
    {portrait:'img/face/糗大了.png'},
    {portrait:'img/face/可怜.png'},
    {portrait:'img/face/呕吐.png'},
]
var person=[
    {name:'大川',portrait:'img/photo/大川.jpg',select:false},
    {name:'二师兄',portrait:'img/photo/二师兄.jpg',select:false},
    {name:'杨可心',portrait:'img/photo/杨可心.jpg',select:false},
    {name:'张洁',portrait:'img/photo/张洁.jpg',select:false},
    {name:'小米',portrait:'img/photo/小米.png',select:false},

    {name:'小倩',portrait:'img/photo/小倩.jpg',select:false},
    {name:'卓玛',portrait:'img/photo/卓玛.jpg',select:false},
    {name:'欢欢',portrait:'img/photo/欢欢.jpg',select:false},
    {name:'小雪',portrait:'img/photo/小雪.jpg',select:false},
    {name:'阿珠',portrait:'img/photo/阿珠.jpg',select:false},

    {name:'王华军',portrait:'img/photo/李建.jpg',select:false},
    {name:'琉璃',portrait:'img/photo/琉璃.jpg',select:false},
    {name:'满仓',portrait:'img/photo/满仓.png',select:false},
    {name:'石头',portrait:'img/photo/石头.jpg',select:false},
    {name:'阿甘',portrait:'img/photo/阿甘.jpg',select:false},

    {name:'阿呆',portrait:'img/photo/阿呆.jpg',select:false},
    {name:'阿亮',portrait:'img/photo/阿亮.jpg',select:false},
    {name:'阿眸',portrait:'img/photo/阿眸.jpg',select:false},
    {name:'宝云',portrait:'img/photo/宝云.jpg',select:false},
    {name:'大白',portrait:'img/photo/大白.jpg',select:false},

    {name:'大车',portrait:'img/photo/大车.jpg',select:false},
    {name:'飞飞',portrait:'img/photo/飞飞.jpg',select:false},
    {name:'金宝',portrait:'img/photo/金宝.jpg',select:false},
    {name:'孔文',portrait:'img/photo/孔文.jpg',select:false},
    {name:'李龙',portrait:'img/photo/李龙.jpg',select:false},

    {name:'刘洪广',portrait:'img/photo/刘洪广.jpg',select:false},
    {name:'刘欢',portrait:'img/photo/刘欢.jpg',select:false},
    {name:'卢成',portrait:'img/photo/卢成.jpg',select:false},
    {name:'芦洋',portrait:'img/photo/芦洋.jpg',select:false},
    {name:'木子',portrait:'img/photo/木子.jpg',select:false},

    {name:'佩恩',portrait:'img/photo/佩恩.jpg',select:false},
    {name:'千珏',portrait:'img/photo/千珏.jpg',select:false},
    {name:'沙狐',portrait:'img/photo/沙狐.jpg',select:false},
    {name:'汶岩',portrait:'img/photo/汶岩.jpg',select:false},

    {name:'小胖',portrait:'img/photo/小胖.jpg',select:false},
    {name:'云雀',portrait:'img/photo/云雀.jpg',select:false},
    {name:'伊森',portrait:'img/photo/张宝军.jpg',select:false},
    {name:'张海',portrait:'img/photo/张海.jpg',select:false},
    {name:'晨儿',portrait:'img/photo/晨儿.jpg',select:false},

    {name:'小六',portrait:'img/photo/小六.jpg',select:false},
    {name:'凯瑞',portrait:'img/photo/凯瑞.jpg',select:false},
    {name:'小黑',portrait:'img/photo/小黑.jpg',select:false},
    {name:'小呸',portrait:'img/photo/小佩.jpg',select:false},
    {name:'一辉',portrait:'img/photo/王辉.jpg',select:false},

    {name:'伊伊',portrait:'img/photo/一一.jpg',select:false},
    {name:'主任',portrait:'img/photo/主任.jpg',select:false},
    {name:'大力',portrait:'img/photo/大力.jpg',select:false},
    {name:'豆汁',portrait:'img/photo/豆汁.jpg',select:false},
    {name:'张硕',portrait:'img/photo/张硕.jpg',select:false},
    {name:'鲍总',portrait:'img/photo/鲍总.png',select:false}
];

