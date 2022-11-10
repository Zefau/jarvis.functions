
export const icon = "mdi-thermometer";
export const config = {
	"_any": {
	},
	"temperature": {
		"value": val => val.toFixed(1),
		"unit": " °C",
		"icon": "mdi-thermometer"
	},
	"humidity": {
		"unit": " %"
	},
	"battery": {
		"unit": " %",
		"icon": {
			">80": "battery-high",
			"<=80": "battery-medium",
			"<=30": "battery-low",
			"<=10": "battery-outline blink",
			"<=5": "battery-alert-variant-outline blink"
		},
		"iconStyle": {
			"<=10": {
				"color": "#900"
			}
		}
	},
	"illumination": {
		"unit": " lux",
		"icon": "mdi-brightness-7"
	},
	"pressure": {
		"unit": " hPa",
		"icon": "mdi-air-purifier"
	}
}
