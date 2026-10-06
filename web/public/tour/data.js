var APP_DATA = {
  "scenes": [
    {
      "id": "0-aula-tiny",
      "name": "Aula Tiny",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 1.9677960240284706,
        "pitch": 0.085212500951382,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 1.9055480257652713,
          "pitch": 0.054281147876530156,
          "rotation": 0,
          "target": "1-melponario-nahua"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-melponario-nahua",
      "name": "Melponario Nahua",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.14360179634930148,
        "pitch": 0.005088522015711305,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 1.796821342566373,
          "pitch": 0.011650984207896897,
          "rotation": 0,
          "target": "0-aula-tiny"
        },
        {
          "yaw": -2.0320872122115023,
          "pitch": 0.061053501972974544,
          "rotation": 0,
          "target": "2-tratamiento-de-agua"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.23462542266828024,
          "pitch": 0.15911436594428707,
          "title": "Melponario",
          "text": "Text"
        }
      ]
    },
    {
      "id": "2-tratamiento-de-agua",
      "name": "Tratamiento de agua",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.5681224810063128,
        "pitch": -0.04326916189008756,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 1.9460352710670925,
          "pitch": 0.06876238895962317,
          "rotation": 0,
          "target": "1-melponario-nahua"
        },
        {
          "yaw": -1.5482784544982806,
          "pitch": 0.0017392429218965333,
          "rotation": 0,
          "target": "3-esparcimiento"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-esparcimiento",
      "name": "Esparcimiento",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.7093414619940894,
        "pitch": 0.05852360412457891,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 1.7635392902809768,
          "pitch": -0.0037143218678785672,
          "rotation": 0,
          "target": "2-tratamiento-de-agua"
        },
        {
          "yaw": -2.156490333538434,
          "pitch": 0.02044283201899333,
          "rotation": 0,
          "target": "4-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-cocina",
      "name": "Cocina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.12466637514243573,
        "pitch": -0.18827531458133429,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 2.343920478397351,
          "pitch": 0.05414186609378291,
          "rotation": 0,
          "target": "3-esparcimiento"
        },
        {
          "yaw": 1.4674512425085702,
          "pitch": 0.029583199809831484,
          "rotation": 0,
          "target": "5-horno"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-horno",
      "name": "Horno",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 3.058030375946343,
        "pitch": 0.010127312630736185,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 1.4520341876564675,
          "pitch": 0.006713748312868972,
          "rotation": 0,
          "target": "4-cocina"
        },
        {
          "yaw": -2.4157788177805983,
          "pitch": 0.04469636642463648,
          "rotation": 0,
          "target": "6-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-entrada",
      "name": "Entrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 2.502010868580168,
        "pitch": -0.013317841743692327,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 1.5151990499840053,
          "pitch": 0.029232722179287407,
          "rotation": 0,
          "target": "7-invernadero-1"
        },
        {
          "yaw": 0.6930493456493068,
          "pitch": -0.02480642096464436,
          "rotation": 0,
          "target": "5-horno"
        },
        {
          "yaw": -2.765251793990144,
          "pitch": 0.05759393586150274,
          "rotation": 0,
          "target": "10-arboetum"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-invernadero-1",
      "name": "Invernadero 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 2.6321107659557352,
        "pitch": 0.0043055041218398316,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -1.302414734238674,
          "pitch": 0.05284590868090078,
          "rotation": 0,
          "target": "6-entrada"
        },
        {
          "yaw": -3.0564964040134033,
          "pitch": 0.09267313853268,
          "rotation": 0,
          "target": "8-invernadero-2"
        },
        {
          "yaw": 1.6672028365630345,
          "pitch": 0.02710740332414474,
          "rotation": 0,
          "target": "9-laguna"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.056249055578589946,
          "pitch": 0.06265707410649846,
          "title": "Invernadero",
          "text": "Text"
        }
      ]
    },
    {
      "id": "8-invernadero-2",
      "name": "Invernadero 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.14676085605717581,
          "pitch": 0.03774710436719175,
          "rotation": 0,
          "target": "7-invernadero-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-laguna",
      "name": "Laguna",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 2.720524210295599,
        "pitch": 0.10102286075014177,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.2017702095202445,
          "pitch": -0.032685867154828685,
          "rotation": 0,
          "target": "7-invernadero-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.7356891575041127,
          "pitch": 0.40859033940796685,
          "title": "Laguna",
          "text": "Text"
        }
      ]
    },
    {
      "id": "10-arboetum",
      "name": "Arboetum",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.269346021004928,
          "pitch": 0.04442327646194144,
          "rotation": 0,
          "target": "11-pt1"
        },
        {
          "yaw": 2.3984396372575816,
          "pitch": 0.12849018275090174,
          "rotation": 0,
          "target": "6-entrada"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.030740999133744396,
          "pitch": 0.1022186357962056,
          "title": "Arboretum",
          "text": "Text"
        }
      ]
    },
    {
      "id": "11-pt1",
      "name": "Pt1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.817455231291234,
        "pitch": -0.10432160691662062,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -2.4914819944043334,
          "pitch": 0.0980252322806816,
          "rotation": 0,
          "target": "10-arboetum"
        },
        {
          "yaw": 0.44164235647301275,
          "pitch": 0.03451845220637395,
          "rotation": 0,
          "target": "12-pt2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-pt2",
      "name": "Pt2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.1905614591463234,
        "pitch": -0.06360652519639132,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 2.99556504132247,
          "pitch": 0.13526562012163446,
          "rotation": 0,
          "target": "11-pt1"
        },
        {
          "yaw": -0.09839562441585059,
          "pitch": 0.08132412873460027,
          "rotation": 0,
          "target": "13-pt3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-pt3",
      "name": "Pt3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.774927468180092,
          "pitch": 0.17338325426339907,
          "rotation": 0,
          "target": "12-pt2"
        },
        {
          "yaw": 0.17793601258123815,
          "pitch": 0.10367734465900469,
          "rotation": 0,
          "target": "14-pt4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-pt4",
      "name": "Pt4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7719540262607048,
          "pitch": 0.10176893082357275,
          "rotation": 0,
          "target": "15-pt5"
        },
        {
          "yaw": 1.2303766346259728,
          "pitch": 0.14176684960559527,
          "rotation": 0,
          "target": "13-pt3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-pt5",
      "name": "Pt5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.6838867247421003,
        "pitch": -0.0966856464777699,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -1.5408545381804686,
          "pitch": 0.10098220635818933,
          "rotation": 0,
          "target": "16-pt6"
        },
        {
          "yaw": 1.7791311643141778,
          "pitch": 0.1051192559156533,
          "rotation": 0,
          "target": "14-pt4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-pt6",
      "name": "Pt6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 2.6279555283057867,
        "pitch": -0.08010737904739429,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.05465382150432774,
          "pitch": 0.09517239977448533,
          "rotation": 0,
          "target": "15-pt5"
        },
        {
          "yaw": 2.703747237212875,
          "pitch": 0.11464079011791739,
          "rotation": 0,
          "target": "17-pt7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-pt7",
      "name": "Pt7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 3.0502667716592677,
        "pitch": -0.00941830095471019,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 3.045110300259914,
          "pitch": 0.14830771760313155,
          "rotation": 0,
          "target": "18-pt8"
        },
        {
          "yaw": -0.5757966571881141,
          "pitch": 0.18211025668424163,
          "rotation": 0,
          "target": "16-pt6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-pt8",
      "name": "Pt8",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.875888788793443,
        "pitch": 0.1425247326857324,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -2.875888788793443,
          "pitch": 0.1425247326857324,
          "rotation": 0,
          "target": "19-pt9"
        },
        {
          "yaw": -0.9005427348081518,
          "pitch": 0.10047673917772748,
          "rotation": 0,
          "target": "17-pt7"
        },
        {
          "yaw": 0.3226072256848994,
          "pitch": 0.12,
          "rotation": 0,
          "target": "46-pt36"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-pt9",
      "name": "Pt9",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.732733632214133,
          "pitch": 0.17532597236178304,
          "rotation": 0,
          "target": "18-pt8"
        },
        {
          "yaw": -0.2460187114464123,
          "pitch": 0.12993166556352342,
          "rotation": 0,
          "target": "20-pt10"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-pt10",
      "name": "Pt10",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.841167185171006,
        "pitch": 0.00395821204312341,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 0.2280896244718349,
          "pitch": 0.08193842702208087,
          "rotation": 0,
          "target": "19-pt9"
        },
        {
          "yaw": -3.014404881551023,
          "pitch": 0.18907827111955022,
          "rotation": 0,
          "target": "21-pt11"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-pt11",
      "name": "Pt11",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.592219614496285,
        "pitch": -0.0683635035209047,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -3.123540595701442,
          "pitch": 0.19424327777942274,
          "rotation": 0,
          "target": "20-pt10"
        },
        {
          "yaw": -0.6533752308831815,
          "pitch": 0.10701714528562078,
          "rotation": 0,
          "target": "22-pt12"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-pt12",
      "name": "Pt12",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0595880535484365,
          "pitch": 0.16974743793669234,
          "rotation": 0,
          "target": "21-pt11"
        },
        {
          "yaw": -0.3245884299510937,
          "pitch": 0.08994175054822229,
          "rotation": 0,
          "target": "23-pt13"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-pt13",
      "name": "Pt13",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.4431957765081886,
        "pitch": 0.0648754827850162,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 0.32104299831130234,
          "pitch": 0.11578466499976336,
          "rotation": 0,
          "target": "22-pt12"
        },
        {
          "yaw": -2.433214937812643,
          "pitch": 0.15063310322456758,
          "rotation": 0,
          "target": "24-pt14"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-pt14",
      "name": "Pt14",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -1.8236909735124343,
        "pitch": 0.030531132094267832,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 2.811380610287327,
          "pitch": 0.14961227197412263,
          "rotation": 0,
          "target": "23-pt13"
        },
        {
          "yaw": -1.7586868556360464,
          "pitch": 0.16875759276134517,
          "rotation": 0,
          "target": "25-pt15"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-pt15",
      "name": "Pt15",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -3.002851373830522,
        "pitch": -0.0014471340775035202,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.12184304665629675,
          "pitch": 0.04904616491713654,
          "rotation": 0,
          "target": "24-pt14"
        },
        {
          "yaw": -3.0206716210299547,
          "pitch": 0.1976370513506147,
          "rotation": 0,
          "target": "26-pt16"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-pt16",
      "name": "Pt16",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.3831600129423869,
        "pitch": 0.028624712144342368,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 2.8913926059961987,
          "pitch": 0.13694202134320932,
          "rotation": 0,
          "target": "25-pt15"
        },
        {
          "yaw": -0.5442081321094925,
          "pitch": 0.14822118464518041,
          "rotation": 0,
          "target": "27-pt17"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-pt17",
      "name": "Pt17",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -3.0534350047497405,
        "pitch": -0.07555869708560436,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.352493803158449,
          "pitch": 0.1168990253679496,
          "rotation": 0,
          "target": "26-pt16"
        },
        {
          "yaw": -3.1155365880125867,
          "pitch": 0.20080577060202742,
          "rotation": 0,
          "target": "28-pt18"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-pt18",
      "name": "Pt18",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -3.129411035732261,
        "pitch": -0.0561656459121167,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 0.13330840876633232,
          "pitch": 0.1555401431956689,
          "rotation": 0,
          "target": "27-pt17"
        },
        {
          "yaw": -3.1385639257003426,
          "pitch": 0.15507113488197177,
          "rotation": 0,
          "target": "29-pt19"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-pt19",
      "name": "Pt19",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 2.77649318409493,
        "pitch": 0.08640536087026618,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.01491100579394633,
          "pitch": 0.09241818580902006,
          "rotation": 0,
          "target": "28-pt18"
        },
        {
          "yaw": 2.828004196202378,
          "pitch": 0.11477981106082069,
          "rotation": 0,
          "target": "30-pt20"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-pt20",
      "name": "Pt20",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.9170924795379616,
        "pitch": 0.05540349746590678,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.8511176269874845,
          "pitch": 0.1406426136041432,
          "rotation": 0,
          "target": "31-pt21"
        },
        {
          "yaw": 1.5571463349458545,
          "pitch": 0.08682485197038758,
          "rotation": 0,
          "target": "29-pt19"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-pt21",
      "name": "Pt21",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.6991583164685977,
          "pitch": 0.15669873680736757,
          "rotation": 0,
          "target": "30-pt20"
        },
        {
          "yaw": -0.3541190721257994,
          "pitch": 0.10427394298626957,
          "rotation": 0,
          "target": "32-pt22"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-pt22",
      "name": "Pt22",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 2.757001114685286,
        "pitch": 0.10541602599549371,
        "fov": 0.7881502416490269
      },
      "linkHotspots": [
        {
          "yaw": -2.084976102827559,
          "pitch": 0.08142636583147933,
          "rotation": 0,
          "target": "31-pt21"
        },
        {
          "yaw": 0.10241043288819718,
          "pitch": 0.11503102476075355,
          "rotation": 0,
          "target": "33-pt23"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.1134545100208193,
          "pitch": 0.12694521275077264,
          "title": "Guacimo Molenillo",
          "text": "Text"
        }
      ]
    },
    {
      "id": "33-pt23",
      "name": "Pt23",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 2.038669698713659,
        "pitch": 0.07868444635897909,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 1.074235904104368,
          "pitch": 0.10606628973914844,
          "rotation": 0,
          "target": "32-pt22"
        },
        {
          "yaw": 2.8848501438860668,
          "pitch": 0.1259908049700158,
          "rotation": 0,
          "target": "34-pt24"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-pt24",
      "name": "Pt24",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.937229709271776,
        "pitch": 0.10144768111770475,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 0.4017270456302633,
          "pitch": 0.15352688963931094,
          "rotation": 0,
          "target": "33-pt23"
        },
        {
          "yaw": -2.8615348011721444,
          "pitch": 0.18492460033645486,
          "rotation": 0,
          "target": "35-pt25"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "35-pt25",
      "name": "Pt25",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.14465498923805598,
        "pitch": 0.07832440687216646,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -3.0054789686722856,
          "pitch": 0.1588439726600619,
          "rotation": 0,
          "target": "34-pt24"
        },
        {
          "yaw": 0.3177197797713518,
          "pitch": 0.08972812019912801,
          "rotation": 0,
          "target": "36-pt26"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "36-pt26",
      "name": "Pt26",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.1211269499727354,
        "pitch": 0.04282751639538063,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 1.1589725655371073,
          "pitch": 0.11444238192808065,
          "rotation": 0,
          "target": "35-pt25"
        },
        {
          "yaw": -1.5058675031413458,
          "pitch": 0.11147579074631686,
          "rotation": 0,
          "target": "37-pt27"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.9431314769526544,
          "pitch": 0.1081128273383456,
          "title": "Corteza de Chivo",
          "text": "Text"
        }
      ]
    },
    {
      "id": "37-pt27",
      "name": "Pt27",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 2.8759920634994938,
        "pitch": -0.03188276626828923,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 1.095042293120473,
          "pitch": 0.07563115992494573,
          "rotation": 0,
          "target": "36-pt26"
        },
        {
          "yaw": 2.9507045299379673,
          "pitch": 0.15854547582466694,
          "rotation": 0,
          "target": "38-pt28"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "38-pt28",
      "name": "Pt28",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.6015313931853807,
        "pitch": -0.012511319657971143,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 1.395007349301002,
          "pitch": 0.10922474397398751,
          "rotation": 0,
          "target": "37-pt27"
        },
        {
          "yaw": 0.10691444354033841,
          "pitch": 0.11698917363598937,
          "rotation": 0,
          "target": "39-pt29"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "39-pt29",
      "name": "Pt29",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 1.7554416937242632,
        "pitch": -0.018968656512418747,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -1.204937983608712,
          "pitch": 0.1203356744615185,
          "rotation": 0,
          "target": "38-pt28"
        },
        {
          "yaw": 1.5765232864339342,
          "pitch": 0.09698144081877658,
          "rotation": 0,
          "target": "40-pt30"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "40-pt30",
      "name": "Pt30",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.8851423845053823,
        "pitch": -0.09921029186445729,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -3.1266257134653923,
          "pitch": 0.13602949979167533,
          "rotation": 0,
          "target": "39-pt29"
        },
        {
          "yaw": 0.2642744975861113,
          "pitch": 0.07955162917626879,
          "rotation": 0,
          "target": "41-pt31"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "41-pt31",
      "name": "Pt31",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.638872457175217,
          "pitch": 0.11788322016669639,
          "rotation": 0,
          "target": "40-pt30"
        },
        {
          "yaw": -0.18147696460854412,
          "pitch": 0.11381141155714403,
          "rotation": 0,
          "target": "42-pt32"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "42-pt32",
      "name": "Pt32",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.848624710836341,
          "pitch": 0.15307024035740113,
          "rotation": 0,
          "target": "41-pt31"
        },
        {
          "yaw": -0.23388774762905484,
          "pitch": 0.15834804375124278,
          "rotation": 0,
          "target": "43-pt33"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "43-pt33",
      "name": "Pt33",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.4098198372356663,
        "pitch": 0.09365221872698193,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 0.3594188418006219,
          "pitch": 0.11226555560755713,
          "rotation": 0,
          "target": "42-pt32"
        },
        {
          "yaw": -1.9028946175981218,
          "pitch": 0.1256010364725313,
          "rotation": 0,
          "target": "44-pt34"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "44-pt34",
      "name": "Pt34",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.463222735037034,
        "pitch": -0.0305497213570618,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.010484744082363662,
          "pitch": 0.08047815047600615,
          "rotation": 0,
          "target": "43-pt33"
        },
        {
          "yaw": -2.6816677506073336,
          "pitch": 0.11959142327946459,
          "rotation": 0,
          "target": "45-pt35"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "45-pt35",
      "name": "Pt35",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 3.002192300507886,
        "pitch": 0.24846709964807445,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.054570375056645304,
          "pitch": 0.10254867786627742,
          "rotation": 0,
          "target": "44-pt34"
        },
        {
          "yaw": 3.1338359861649954,
          "pitch": 0.2691793586368654,
          "rotation": 0,
          "target": "46-pt36"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "46-pt36",
      "name": "Pt36",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.6819308170234457,
        "pitch": 0.09151132334708834,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -2.588551692327412,
          "pitch": 0.16787536289984573,
          "rotation": 0,
          "target": "45-pt35"
        },
        {
          "yaw": 0.3819308170234457,
          "pitch": 0.12,
          "rotation": 0,
          "target": "18-pt8"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Recorrido Los Matapalos",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
