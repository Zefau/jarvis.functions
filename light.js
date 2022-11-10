
export const icon = "lightbulb-on";
export const config = {
	"_any": {
	},
	"on": {
		"ignore": true,
		"substitute": true,
		"bodyElement": null,
		"actionElement": "SwitchAction",
		
		"icon": {
			"true": "lightbulb-on",
			"false": "lightbulb-off-outline"
		}
	},
	"power": { // SAME AS ON
		"bodyElement": null,
		"actionElement": "SwitchAction",
		
		"icon": {
			"true": "lightbulb-on",
			"false": "lightbulb-off-outline"
		}
	},
	"state": { // SAME AS ON
		"ignore": true,
		"bodyElement": null,
		"actionElement": "SwitchAction",

		"icon": {
			"true": "lightbulb-on",
			"false": "lightbulb-off-outline"
		}
	},
	"relay0": { // SAME AS ON
		"ignore": true,
		"bodyElement": null,
		"actionElement": "SwitchAction",
		
		"icon": {
			"true": "lightbulb-on",
			"false": "lightbulb-off-outline"
		}
	},
	"relay1": { // SAME AS ON
		"ignore": true,
		"bodyElement": null,
		"actionElement": "SwitchAction",
		
		"icon": {
			"true": "lightbulb-on",
			"false": "lightbulb-off-outline"
		}
	},
	"dimmer": {
		"ignore": true,
		"bodyElement": "LevelBody",
		"actionElement": null,
		
		"value": val => val > 0 && val <= 1 ? val * 100 : val,
		"unit": val => val > 0 ? " %" : null,
		"stateStyle": {
			"default": {},
			"0": {
				"color": "#999"
			}
		},
		"icon": {
			"default": "lightbulb-on",
			"0": "lightbulb-off-outline"
		},
		"display": {
			"0": "light#level#off"
		}
	},
	"brightness": { // SAME AS DIMMER
		"ignore": true,
		"bodyElement": "LevelBody",
		"actionElement": null,
		
		"value": val => val > 0 && val <= 1 ? val * 100 : val,
		"unit": val => val > 0 ? " %" : null,
		"stateStyle": {
			"default": {},
			"0": {
				"color": "#999"
			}
		},
		"icon": {
			"default": "lightbulb-on",
			"0": "lightbulb-off-outline"
		},
		"display": {
			"0": "light#level#off"
		}
	},
	"level": { // SAME AS DIMMER
		"substitute": true,
		"bodyElement": "LevelBody",
		"actionElement": null,
		
		"value": val => val > 0 && val <= 1 ? val * 100 : val,
		"unit": val => val > 0 ? " %" : null,
		"stateStyle": {
			"default": {},
			"0": {
				"color": "#999"
			}
		},
		"icon": {
			"default": "lightbulb-on",
			"0": "lightbulb-off-outline"
		},
		"display": {
			"0": "light#level#off"
		}
	},
	"ct": {
		"substitute": true,
		"bodyElement": "LevelBody",
		"actionElement": null,
		"properties": {
			"min": 2000,
			"max": 6500
		},
		
		"icon": {
			"default": "thermometer"
		},
		"unit": " °K"
	},
	"colortemp": {
		"ignore": true,
		"bodyElement": "LevelBody",
		"actionElement": null,
		"properties": {
			"min": 2000,
			"max": 6500
		},
		
		"icon": {
			"default": "thermometer"
		},
		"unit": " °K"
	},
	"colortemperature": {
		"ignore": true,
		"bodyElement": "LevelBody",
		"actionElement": null,
		"properties": {
			"min": 2000,
			"max": 6500
		},
		
		"icon": {
			"default": "thermometer"
		},
		"unit": " °K"
	},
	"hue": {
		"bodyElement": "LightHueBody",
		"actionElement": "LightColorState",
		
		"icon": {
			"default": "palette"
		},
		"unit": " °"
	},
	"rgb": {
		"bodyElement": "LightColorBody",
		"actionElement": "LightColorState",
		
		"icon": {
			"default": "palette"
		}
	},
	"hsv": {
		"substitute": true,
		"bodyElement": "LightColorBody",
		"actionElement": "LightColorState",
		
		"icon": {
			"default": "palette"
		}
	},
	"hex": {
		"bodyElement": "LightColorBody",
		"actionElement": "LightColorState",
		
		"icon": {
			"default": "palette"
		}
	}
}
