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
                    content: "Technical Specifications",
                    color: "grey",
                    dialogContent: { // 打开弹框
                        title: "Technical Specifications",
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
        name: "Laser Welding",
        desc: "文案2 商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述",
        pic: "https://img1.wsimg.com/isteam/ip/8adb8788-1ab0-4ee0-85df-8b44a5701e35/%E7%84%8A%E6%8E%A5%E5%A4%B4-1%20(1).webp/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:984,h:984",
        path: "product",
        detail: {
            type: "product",
            sections: [
                {
                    type: "image",
                    style: { width: 300, height: 240 },
                    content: "https://img1.wsimg.com/isteam/ip/8adb8788-1ab0-4ee0-85df-8b44a5701e35/1-2-2%20-%20%E5%89%AF%E6%9C%AC.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:800,cg:true"
                },
                {
                    type: "centerTitle",
                    content: "Handheld Laser Welding",
                },
                {
                    type: "centerSubTitle",
                    content: "Suitable For Thin Metal",
                },
                {
                    type: "model",
                    content: [
                        {
                            name: "CY-1000",
                            price: "$12000",
                            desc: "",
                            attrs: [
                                {
                                    name: "Laser Power", value: "1000W",
                                    nameStyle: {}, valueStyle: {}
                                },
                                { name: "Welding Thickness", value: "3mm" },
                            ],
                        },
                        {
                            name: "CY-1500",
                            price: "$16000",
                            desc: "",
                            attrs: [
                                { name: "Laser Power", value: "1500W" },
                                { name: "Welding Thickness", value: "4mm" },
                            ],
                        },
                        {
                            name: "CY-2000",
                            price: "$20000",
                            desc: "",
                            attrs: [
                                { name: "Laser Power", value: "2000W" },
                                { name: "Welding Thickness", value: "5mm" },
                            ],
                        }
                    ]
                },

                {
                    type: "button",
                    content: "Technical Specifications",
                    color: "grey",
                    dialogContent: { // 打开弹框
                        title: "Technical Specifications",
                        sections: [
                            {
                                type: "attrs",
                                models: ["CY-1000","CY-1500","CY-2000"],
                                attrs: [
                                    {
                                        name: "Laser power",
                                        values: ["1000W","1500W","2000W"]
                                    },
                                    {
                                        name: "Laser wavelength",
                                        values: ["1070nm","1070nm","1070nm"]
                                    },
                                    {
                                        name: "Fiber core diameter",
                                        values: ['50μm','50μm','50μm']
                                    },
                                    {
                                        name: "Maximum power consumption",
                                        values: ['5KW','8KW','10KW']
                                    },
                                    {
                                        name: "Cooling mode",
                                        values: ['water-cooling','water-cooling','water-cooling']
                                    },
                                    {
                                        name: "Aiming and positioning",
                                        values: ['Red light indication','Red light indication','Red light indication']
                                    },
                                    {
                                        name: "Welding speed range",
                                        values: ['0-30mm/s','0-40mm/s','0-50mm/s']
                                    },
                                    {
                                        name: "Wire feed diameter",
                                        values: ['0.8-1.6mm','0.8-1.6mm','0.8-1.6mm']
                                    },
                                    {
                                        name: "Main Motro",
                                        values: ['2KW','3KW','5.5KW']
                                    },
                                    {
                                        name: "Overall dimension",
                                        values: ['1300*650*1250mm','1300*650*1250mm','1300*650*1250mm']
                                    },
                                ]
                            },
                        ]
                    }
                },

                {type: "gap"},
                {
                    type: "image",
                    style: { width: 300, height: 240 },
                    content: "https://img1.wsimg.com/isteam/ip/8adb8788-1ab0-4ee0-85df-8b44a5701e35/%E6%9C%AA%E6%A0%87%E9%A2%98-4.jpg/:/cr=t:12.41%25,l:0%25,w:100%25,h:75.19%25/rs=w:400,h:301,cg:true/qt=q:30"
                },
                {
                    type: "text",
                    style: {paddingLeft: 12,paddingTop: 10, paddingBottom: 15},
                    content: "Hand-held laser welding machines can be widely used in complex and irregular welding processes in cabinets, kitchens, stairs, elevators, racks, ovens, stainless steel door and window guardrails, power distribution boxes, stainless steel homes and other industries."
                },

                {
                    type: "button",
                    content: "User Manual",
                    color: "grey",
                    dialogContent: { // 打开弹框
                        title: "How to use it?",
                        sections: [
                            {
                                type: "pdf",
                                content: "https://img1.wsimg.com/blobby/go/8adb8788-1ab0-4ee0-85df-8b44a5701e35/downloads/tranyond-laserwelding.pdf"
                            }
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
        id: "3",
        name: "Powerful Tools",
        pic: "https://img1.wsimg.com/isteam/ip/8adb8788-1ab0-4ee0-85df-8b44a5701e35/DSC00289.JPG/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1800,cg:true",
        desc: "文案3  商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述",
        path: "product",
        detail: {
            type: "shop",
            sections: [
                {
                    type: "image",
                    style: { width: 300, height: 240 },
                    content: "https://img1.wsimg.com/isteam/ip/8adb8788-1ab0-4ee0-85df-8b44a5701e35/%E4%BA%A7%E5%93%818.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:900,cg:true"
                },
                {
                    type: "centerTitle",
                    content: "Magnetic squaring arm for press brake",
                },
                {
                    type: "centerSubTitle",
                    content: "The magnetic square arm allows you to square the sheet and also obtain the desired angle. Ideal for small parts.",
                },
                {
                    type: "button",
                    content: "BUY IT",
                    color: "primary",
                    link:"https://tranyond.shop/products/magnetic-squaring-arm-for-press-brake"
                },
                {type: "gap"},

                {
                    type: "image",
                    style: { width: 300, height: 240 },
                    content: "https://img1.wsimg.com/isteam/ip/8adb8788-1ab0-4ee0-85df-8b44a5701e35/%E6%8A%A0%E5%9B%BE1.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1080,cg:true"
                },
                {
                    type: "centerTitle",
                    content: "modularization markfree press brake die V-bending markless mold",
                },
                {
                    type: "centerSubTitle",
                    content: "Designed for markfree bending.",
                },
                {
                    type: "centerSubTitle",
                    content: "Just put it on the V mold(20-32mm)",
                },
                {
                    type: "button",
                    content: "BUY IT",
                    color: "primary",
                    link:"https://tranyond.shop/products/magnetic-squaring-arm-for-press-brake"
                },
                {type: "gap"},

                {
                    type: "image",
                    style: { width: 300, height: 240 },
                    content: "https://img1.wsimg.com/isteam/ip/8adb8788-1ab0-4ee0-85df-8b44a5701e35/02b315222cf69859df8b90799a5aa3c.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:900,cg:true"
                },
                {
                    type: "centerTitle",
                    content: "Magnetic hand lifter for metal parts",
                },
                {
                    type: "centerSubTitle",
                    content: "Maxium Lifting force：30KG",
                },
                {
                    type: "centerSubTitle",
                    content: "High temperature resistance",
                },
                {
                    type: "button",
                    content: "BUY IT",
                    color: "primary",
                    link:"https://tranyond.shop/products/magnetic-squaring-arm-for-press-brake"
                },
                {type: "gap"},
            ]
        }
    }
]

export default prodoucts