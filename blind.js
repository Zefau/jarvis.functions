
export const icon = "window-shutter";
export const config = {
	"_any": {
	},
	"level": {
		"bodyElement": "LevelBody",
		"actionElement": "BlindLevelAction",
		
		"value": val => Math.round(val),
		"unit": " %",
		"icon": {
			"default": "window-shutter-open",
			">90": "window-shutter-open",
			"<=90": "window-shutter"
		}
	},
	"level2": {
		"ignore": true,
		"bodyElement": "LevelBody",
		"actionElement": "BlindLevelAction",
		
		"value": val => Math.round(val),
		"unit": " %",
		"icon": {
			"default": "window-shutter-open",
			">90": "window-shutter-open",
			"<=90": "window-shutter"
		}
	},
	"activity": {
		"bodyElement": null,
		"actionElement": null,
		
		"icon": {
			"true": "pan-vertical",
			"false": "dots-vertical"
		},
		"display": {
			"true": "blind#activity#true",
			"false": "blind#activity#false"
		}
	},
	"stop": {
		"bodyElement": null,
		"actionElement": "IconButtonAction",
		
		"icon": {
			"default": "mdi-stop-circle"
		}
	}
}
