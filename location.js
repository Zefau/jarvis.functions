
export const icon = "map-marker";
export const config = {
	"_any": {
	},
	"position": {
		"bodyElement": null,
		"actionElement": null,
		
		"icon": "map-marker"
	},
	"presence": {
		"bodyElement": null,
		"actionElement": null,
		
		"icon": {
			"true": "map-marker-radius",
			"false": "map-marker-remove-outline"
		},
		"display": {
			"true": "location#presence#true",
			"false": "location#presence#false"
		}
	},
	"users": {
		"bodyElement": null,
		"actionElement": null,
		
		"icon": {
			"": "account-group-outline",
			"default": "account-group"
		},
		"display": {
			"": "location#users#empty"
		}
	}
}
