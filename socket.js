
export const icon = "power-socket-eu";
export const config = {
	"_any": {
	},
	"power": {
		"bodyElement": null,
		"actionElement": "SwitchAction"
	},
	"consumption": {
		"bodyElement": null,
		"actionElement": null,
		
		"unit": " W",
		"icon": {
			"default": "mdi-power-plug-off-outline",
			">0": "mdi-power-plug"
		}
	},
	"meter": {
		"bodyElement": null,
		"actionElement": null,
		
		"unit": " W",
		"icon": {
			"default": "mdi-power-plug-off-outline",
			">0": "mdi-power-plug"
		}
	}
}
