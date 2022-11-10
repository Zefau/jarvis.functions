
export const icon = "home-circle-outline";
export const config = {
	"_any": {
		"bodyElement": "LastChangeBody",
		//"value": val => val !== null ? val.toString() : null,
		//stateStyle
		//unit
		//icon
		//iconStyle
		"display": {
			"false": "defaults#off",
			"true": "defaults#on"
		},
		"stateStyle": {
			"true": {
				"color": "#090",
				"fontWeight": "bold"
			},
			"false": {
				"color": "#999"
			}
		}
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
	"firmware": {
		"display": {
			"true": "defaults#firmware#true",
			"false": "defaults#firmware#false"
		},
		"icon": {
			"true": "mdi-cog-refresh",
			"false": "mdi-cog-outline"
		}
	},
	"frost": {
		"icon": {
			"default": "mdi-snowflake"
		}
	},
	"humidity": {
		"unit": " %",
		"icon": "water-percent"
	},
	"illuminance": {
		"unit": " lux"
	},
	"level": {
		"unit": " %"
	},
	"lowbattery": {
		"icon": {
			"true": "battery-alert-variant-outline",
			"false": "battery-high"
		},
		"display": {
			"true": "defaults#low",
			"false": "defaults#full"
		},
		"stateStyle": {
			"true": {
				"color": "#900",
				"fontWeight": "bold"
			},
			"false": {
				"color": "#999"
			}
		}
	},
	"position": {
		"icon": "map-marker"
	},
	"power": {
		"icon": "power"
	},
	"config": {
		"icon": {
			"default": "mdi-cog"
		}
	},
	"connectivity": {
		"icon": {
			"default": "mdi-wifi-arrow-left-right"
		}
	},
	"available": {
		"icon": {
			"true": "lan-connect",
			"false": "lan-disconnect"
		},
		"display": {
			"true": "defaults#reachable",
			"false": "defaults#notreachable"
		},
		"stateStyle": {
			"true": {
				"color": "#090"
			},
			"false": {
				"color": "#900",
				"fontWeight": "bold"
			}
		}
	},
	"reachability": {
		"icon": {
			"true": "lan-connect",
			"false": "lan-disconnect"
		},
		"display": {
			"true": "defaults#reachable",
			"false": "defaults#notreachable"
		},
		"stateStyle": {
			"true": {
				"color": "#090"
			},
			"false": {
				"color": "#900",
				"fontWeight": "bold"
			}
		}
	},
	"rssi": {
		"icon": {
			"default": "mdi-antenna"
		}
	},
	"temperature": {
		"unit": " °C",
		"icon": "thermometer"
	},
	"trigger": {
		"icon": "power"
	},
	"unreach": {
		"icon": {
			"true": "lan-disconnect",
			"false": "lan-connect"
		},
		"display": {
			"true": "defaults#notreachable",
			"false": "defaults#reachable"
		},
		"stateStyle": {
			"true": {
				"color": "#900",
				"fontWeight": "bold"
			},
			"false": {
				"color": "#090"
			}
		}
	},
	"wind": {
		"unit": " km/h",
		"icon": "weather-windy"
	}
}
