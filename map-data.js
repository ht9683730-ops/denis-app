const locations = [
    {
        id: 1,
        name: "Локация 1",
        lat: 44.943497,
        lng: 34.131935,
        panorama: "images/20251025_174449.jpg",
        startYaw: 185,
        startPitch: -5,
        tour: false
    },
    {
        id: 2,
        name: "Локация 2",
        lat: 44.942701,
        lng: 34.133177,
        panorama: "images/20251025_174700.jpg",
        startYaw: 65,
        startPitch: 0,
        tour: false
    },
    {
        id: 3,
        name: "Локация 3",
        lat: 44.940474,
        lng: 34.132877,
        panorama: "images/20251025_175223.jpg",
        startYaw: -62,
        startPitch: -7,
        tour: false
    },
    {
        id: 4,
        name: "Локация 4",
        lat: 44.941136,
        lng: 34.130990,
        panorama: "images/20251025_172412.jpg",
        startYaw: 212,
        startPitch: 0,
        tour: false
    },
    {
        id: 5,
        name: "Локация 5",
        lat: 44.940201,
        lng: 34.131802,
        panorama: "images/20251025_172641.jpg",
        startYaw: 100,
        startPitch: 10,
        tour: false
    },
    {
        id: 6,
        name: "Локация 6",
        lat: 44.939483,
        lng: 34.131181,
        panorama: "images/20251025_172954.jpg",
        startYaw: 84,
        startPitch: 5,
        tour: false
    },
    {
        id: 7,
        name: "Локация 7",
        lat: 44.941729,
        lng: 34.129317,
        panorama: "images/20251025_173321.jpg",
        startYaw: 135,
        startPitch: -20,
        tour: false
    },
    {
        id: 8,
        name: "Локация 8",
        lat: 44.943169,
        lng: 34.127996,
        panorama: "images/20251025_173559.jpg",
        startYaw: 185,
        startPitch: -5,
        tour: false
    },
    {
        id: 9,
        name: "Локация 9",
        lat: 44.942671,
        lng: 34.128951,
        panorama: "images/20251025_173711.jpg",
        startYaw: 122,
        startPitch: 0,
        tour: false
    },
    {
        id: 10,
        name: "Локация 10",
        lat: 44.942855,
        lng: 34.127903,
        panorama: "images/20251025_173824.jpg",
        startYaw: 70,
        startPitch: -5,
        tour: true
    },
    {
        id: 11,
        name: "Локация 11",
        lat: 44.944415,
        lng: 34.129350,
        panorama: "images/20251025_171146.jpg",
        startYaw: 185,
        startPitch: -5,
        tour: false
    },
    {
        id: 12,
        name: "Локация 12",
        lat: 44.943433,
        lng: 34.128517,
        panorama: "images/20251025_171400.jpg",
        startYaw: 185,
        startPitch: -5,
        tour: false
    },
    {
        id: 13,
        name: "Локация 13",
        lat: 44.943344,
        lng: 34.130595,
        panorama: "images/20251025_171748.jpg",
        startYaw: 185,
        startPitch: -5,
        tour: false
    },
    {
        id: 14,
        name: "Локация 14",
        lat: 44.942570,
        lng: 34.130498,
        panorama: "images/20251025_172018.jpg",
        startYaw: 185,
        startPitch: -5,
        tour: false
    },
    {
        id: 15,
        name: "Локация 15",
        lat: 44.942079,
        lng: 34.130205,
        panorama: "images/20251025_172137.jpg",
        startYaw: 185,
        startPitch: 0,
        tour: false
    },
    {
        id: 16,
        name: "Локация 16",
        lat: 44.945576,
        lng: 34.126911,
        panorama: "images/20251220_121524.jpg",
        startYaw: 185,
        startPitch: 0,
        tour: true
    },
    {
        id: 17,
        name: "Локация 17",
        lat: 44.941039,
        lng: 34.129470,
        panorama: "images/20251220_124612.jpg",
        startYaw: 185,
        startPitch: 0,
        tour: true
    },
    {
        id: 18,
        name: "Локация 18",
        lat: 44.938100,
        lng: 34.132327,
        panorama: "images/20251220_124038.jpg",
        startYaw: 185,
        startPitch: 0,
        tour: true
    },
    {
        id: 19,
        name: "Локация 19",
        lat: 44.942619,
        lng: 34.134222,
        panorama: "images/20251220_122910.jpg",
        startYaw: 185,
        startPitch: 0,
        tour: true
    },
    {
        id: 20,
        name: "Локация 20",
        lat: 44.944531,
        lng: 34.131617,
        panorama: "images/20251220_122047.jpg",
        startYaw: 185,
        startPitch: 0,
        tour: true
    },
    {
        id: 21,
        name: "Локация 21",
        lat: 44.944790,
        lng: 34.130254,
        panorama: "images/20251220_121924.jpg",
        startYaw: 185,
        startPitch: 0,
        tour: false
    },
    {
        id: 22,
        name: "Локация 22",
        lat: 44.943784,
        lng: 34.132016,
        panorama: "images/20251220_122613.jpg",
        startYaw: 185,
        startPitch: 0,
        tour: false
    },
    {
        id: 23,
        name: "Локация 23",
        lat: 44.939274,
        lng: 34.134010,
        panorama: "images/20251220_123113.jpg",
        startYaw: 185,
        startPitch: 0,
        tour: true
    },
    {
        id: 24,
        name: "Локация 24",
        lat: 44.938561,
        lng: 34.133534,
        panorama: "images/20251220_123259.jpg",
        startYaw: 185,
        startPitch: 0,
        tour: false
    },
    {
        id: 25,
        name: "Локация 25",
        lat: 44.939048,
        lng: 34.133333,
        panorama: "images/20251220_123552.jpg",
        startYaw: 185,
        startPitch: 0,
        tour: false
    },
    {
        id: 26,
        name: "Локация 26",
        lat: 44.939854,
        lng: 34.130879,
        panorama: "images/20251220_124334.jpg",
        startYaw: 185,
        startPitch: 0,
        tour: false
    },
    {
        id: 27,
        name: "Локация 27",
        lat: 44.941901,
        lng: 34.129252,
        panorama: "images/20251220_124946.jpg",
        startYaw: 185,
        startPitch: 0,
        tour: false
    },
    {
        id: 28,
        name: "Локация 28",
        lat: 44.944247,
        lng: 34.131590,
        panorama: "images/20251220_122220.jpg",
        startYaw: 185,
        startPitch: 0,
        tour: false
    }
];

const entrance = {
    lat: 44.9428,
    lng: 34.1278,
    text: "ВХОД"
};
