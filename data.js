var APP_DATA = {
  "scenes": [
    {
      "id": "0-wohnzimmer",
      "name": "Wohnzimmer",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.5640135918179876,
        "pitch": -0.008187583557903721,
        "fov": 1.3268945324871384
      },
      "linkHotspots": [
        {
          "yaw": -0.11564180143497893,
          "pitch": -0.0270687697811951,
          "rotation": 0,
          "target": "1-flur"
        },
        {
          "yaw": -0.5895942409319463,
          "pitch": -0.013329595244659487,
          "rotation": 0,
          "target": "2-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-flur",
      "name": "Flur",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.151924542829464,
          "pitch": -0.08349430158738969,
          "rotation": 0,
          "target": "0-wohnzimmer"
        },
        {
          "yaw": -2.1520203050075217,
          "pitch": 0.005561238205137542,
          "rotation": 0,
          "target": "9-badezimmer-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-hall",
      "name": "Hall",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "0-wohnzimmer"
        },
        {
          "yaw": -3.1315054354724623,
          "pitch": 0.022959690614854367,
          "rotation": 0,
          "target": "3-schlafzimmer"
        },
        {
          "yaw": -2.78070053281453,
          "pitch": 0.022331285099006948,
          "rotation": 0,
          "target": "5-badezimmer-2"
        },
        {
          "yaw": -0.9178932737578762,
          "pitch": -0.08849465945767143,
          "rotation": 0,
          "target": "6-fitness"
        },
        {
          "yaw": 2.1380335615915556,
          "pitch": 0.04828323412020019,
          "rotation": 0,
          "target": "7-gastzimmer-1"
        },
        {
          "yaw": 2.8065735358405366,
          "pitch": -0.02433169635187582,
          "rotation": 0,
          "target": "8-gastzimmer-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-schlafzimmer",
      "name": "Schlafzimmer",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -3.1261428220093244,
        "pitch": -0.035135141310098206,
        "fov": 1.3268945324871384
      },
      "linkHotspots": [
        {
          "yaw": 1.8324324547247617,
          "pitch": -0.09328730988172218,
          "rotation": 0,
          "target": "2-hall"
        },
        {
          "yaw": 1.5981864810878426,
          "pitch": -0.10503301966094725,
          "rotation": 0,
          "target": "4-badezimmer-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-badezimmer-1",
      "name": "Badezimmer-1",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9578780127303048,
          "pitch": -0.05821492064366218,
          "rotation": 0,
          "target": "3-schlafzimmer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-badezimmer-2",
      "name": "Badezimmer-2",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.140884233710951,
          "pitch": 0.060998767247596675,
          "rotation": 0,
          "target": "2-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-fitness",
      "name": "Fitness",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9892269408643983,
          "pitch": 0.07414925171635289,
          "rotation": 0,
          "target": "2-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-gastzimmer-1",
      "name": "Gastzimmer-1",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.89040550716115,
          "pitch": 0.02922930538621138,
          "rotation": 0,
          "target": "2-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-gastzimmer-2",
      "name": "Gastzimmer-2",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.573293987661236,
          "pitch": 0.000521771959656192,
          "rotation": 0,
          "target": "2-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-badezimmer-3",
      "name": "Badezimmer-3",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.570950513064238,
          "pitch": -0.14589782441404608,
          "rotation": 0,
          "target": "1-flur"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Villa_2",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
