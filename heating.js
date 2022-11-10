
export const icon = "thermometer";
export const config = {
	"_any": {
	},
	"temperature": {
		"bodyElement": null,
		"actionElement": null,
		
		"value": val => val.toFixed(1),
		"unit": " °C",
		"icon": "thermometer"
	},
	"setTemperature": {
		"bodyElement": "LevelBody",
		"actionElement": null,
		"properties": {
			"min": 0,
			"max": 35
		},
		
		"unit": " °C",
		"icon": "thermometer-chevron-up"
	},
	"humidity": {
		"bodyElement": null,
		"actionElement": null,
		
		"unit": " %"
	},
	"boost": {
		"bodyElement": null,
		"actionElement": "IconButtonAction",
		
		"icon": "radiator"
	},
	"boostTime": {
		"bodyElement": null,
		"actionElement": null,
		
		"unit": "min.",
		"icon": "clock-outline"
	},
	"boostState": {
	},
	"frost": {
	},
	"windowState": {
	},
	"partyMode": {
	},
	"modeAuto": {
		"bodyElement": null,
		"actionElement": "IconButtonAction",
		
		"icon": "brightness-auto"
	},
	"modeManu": {
	},
	"modeCurrent": {
	},
	"modeLowering": {
	},
	"modeControl": {
		"icon": "list-status"
	},
	"valve": {
		"unit": "%",
		"icon": "valve"
	},
	"valvePosition": {
	},
	"valveState": {
	}
}
