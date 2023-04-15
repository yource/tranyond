var prodoucts = [
    {
        id: "1",
        name: "Mini Press",
        desc: "文案1 商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述",
        pic: "https://img1.wsimg.com/isteam/ip/8adb8788-1ab0-4ee0-85df-8b44a5701e35/%E6%8A%A0%E5%9B%BE3.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:1547",
        path: "product",
        detail: {
            type: "product",
            sections: [
                {
                    type: "image",
                    style: { width: 300, height: 240 },
                    content: "https://img1.wsimg.com/isteam/ip/8adb8788-1ab0-4ee0-85df-8b44a5701e35/%E6%9C%AA%E6%A0%87%E9%A2%98-1-21e7005.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25"
                },
                {
                    type: "images",
                    width: 300,
                    height: 240,
                    content: ["", ""]
                },
                {
                    type: "centerTitle",
                    content: "Mini Press",
                },
                {
                    type: "centerSubTitle",
                    content: "All electric servo cnc press brake",
                },

                {
                    type: "model",
                    content: [
                        {
                            name: "Mini Press",
                            price: "$12000",
                            desc: "3t-200mm",
                            attrs: [
                                {
                                    name: "Bending Force", value: "3T",
                                    nameStyle: {}, valueStyle: {}
                                },
                                { name: "Bending Length", value: "200mm" },
                            ],
                        },
                        {
                            name: "Mini Press Pro",
                            price: "$16000",
                            desc: "6t-400mm",
                            attrs: [
                                { name: "Bending Force", value: "6T" },
                                { name: "Bending Length", value: "400mm" },
                            ],
                        },
                        {
                            name: "Mini Press Ultra",
                            price: "$20000",
                            desc: "12t-600mm",
                            attrs: [
                                { name: "Bending Force", value: "12T" },
                                { name: "Bending Length", value: "600mm" },
                            ],
                        }
                    ]
                },
                {
                    type: "button",
                    content: "Technical Parameter",
                    color: "grey",
                    dialogContent: { // 打开弹框
                        title: "Technical Parameter",
                        sections: [
                            {
                                type: "attrs",
                                models: ["Mini Press","Mini Press Pro","Mini Press Ultra"],
                                attrs: [
                                    {
                                        name: "Bending Force",
                                        values: ["30KN","60KN","120KN"]
                                    },
                                    {
                                        name: "Bending Length",
                                        values: ["200mmN","400mm","600mm"]
                                    },
                                    {
                                        name: "Column Distance",
                                        values: ['300mm','370mm','450mm']
                                    },
                                    {
                                        name: "Stroke",
                                        values: ['120mm','120mm','120mm']
                                    },
                                    {
                                        name: "Open Height",
                                        values: ['420mm','420mm','420mm']
                                    },
                                    {
                                        name: "Aprroaching Speed",
                                        values: ['200mm/s','200mm/s','200mm/s']
                                    },
                                    {
                                        name: "Ram Speed",
                                        values: ['1-30mm/s','1-30mm/s','1-30mm/s']
                                    },
                                    {
                                        name: "Return Speed",
                                        values: ['200mm/s','200mm/s','200mm/s']
                                    },
                                    {
                                        name: "Main Motro",
                                        values: ['2KW','3KW','5.5KW']
                                    },
                                    {
                                        name: "Dimensions",
                                        values: ['700*700*1980mm','750*750*1980mm','850*850*2080mm']
                                    },
                                    {
                                        name: "Weight",
                                        values: ['320kg','560kg','760kg']
                                    },
                                ]
                            },
                        ]
                    }
                },
                {type: "gap"},
                {type: "gap"},
                {
                    type: "image",
                    style: { width: 300, height: 240 },
                    content: "https://img1.wsimg.com/isteam/ip/8adb8788-1ab0-4ee0-85df-8b44a5701e35/%E6%9C%AA%E6%A0%87%E9%A2%98-9.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1023,cg:true"
                },
                {
                    type: "centerTitle",
                    content: "Reliability & Productivity",
                    style: {lineHeight: 40}
                },
                {
                    type: "text",
                    style: {paddingLeft: 12,paddingTop: 10, paddingBottom: 15},
                    content: "The electric press-brakes will promptly reply to your production requirements distinguishing itself for high precision and for elevated performances. "
                },
                {
                    type: "button",
                    content: "User Manual",
                    color: "grey",
                    dialogContent: { // 打开弹框
                        title: "How to use it?",
                        sections: [
                            {
                                type: "video",
                                content: "https://sheetmetalpro.oss-us-east-1.aliyuncs.com/video/00700_480p.mp4"
                            },
                            {
                                type: "title",
                                content: "CNC Controller",
                            },
                            {
                                type: "text",
                                content: "The efficient algorithm optimizes the running cycle of bending, reduces the time required to set the work step, and makes bending more efficient."
                            },
                            {
                                type: "text",
                                content: "The efficient algorithm optimizes the running cycle of bending, reduces the time required to set the work step, and makes bending more efficient, especially for batch processing."
                            },
                            {
                                type: "image",
                                content: "https://img1.wsimg.com/isteam/ip/8adb8788-1ab0-4ee0-85df-8b44a5701e35/%E6%9C%AA%E6%A0%87%E9%A2%98-4-e3d0a93.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1023,cg:true",
                                style: {
                                    width: 300,
                                    height: 300
                                }
                            },
                            {
                                type: "text",
                                content: "The efficient algorithm optimizes the running cycle of bending, reduces the time required to set the work step, and makes bending more efficient, especially for batch processing, and makes bending more efficient, especially for batch processing."
                            },
                        ]
                    }
                },
                {type: "gap"},

                {
                    type: "centerTitle",
                    content: "Punches & Dies"
                },
                {
                    type: "text",
                    style: {paddingLeft: 12,paddingTop: 10, paddingBottom: 15},
                    content: "Press brake punches and dies will be one of the most important topics we discuss before you place the order. Any bending shape will be completed by a suitable set of punch and die. We can provide appropriate toolings according to different bending requirements of customers. "
                },
                {
                    type: "button",
                    content: "BUY IT",
                    color: "primary",
                    link:"https://tranyond.shop/products/magnetic-squaring-arm-for-press-brake"
                },
            ]
        }
    }, {
        id: "2",
        name: "Handheld Laser Welding",
        desc: "文案2 商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述",
        pic: "https://img1.wsimg.com/isteam/ip/8adb8788-1ab0-4ee0-85df-8b44a5701e35/%E7%84%8A%E6%8E%A5%E5%A4%B4-1%20(1).webp/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:984,h:984",
        path: "product",
        detail: {
            type: "product",
            sections: []
        }
    }, {
        id: "3",
        name: "Powerful tools",
        pic: "https://img1.baidu.com/it/u=2002225100,988332601&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=261",
        desc: "文案3  商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述",
        path: "product",
        detail: {
            type: "shop",
            sections: []
        }
    }
]

export default prodoucts