import { config as window } from '../window';
import { config as blind } from '../blind';

export const icon = "window-closed";
export const config = {
	...window,
	...blind
};
