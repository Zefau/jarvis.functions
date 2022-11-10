
// components
import IconState, { OPTIONS as IconStateOptions } from './components/IconState.vue';
import State from './components/State.vue';
import SecondaryStates from './components/SecondaryStates.vue';
import Title from './components/Title.vue';

// body
import LastChangeBody, { OPTIONS as LastChangeBodyOptions } from './components/LastChangeBody.vue';
import LevelBody, { OPTIONS as LevelBodyOptions } from './components/LevelBody.vue';
import CustomTextBody, { OPTIONS as CustomTextBodyOptions } from './components/CustomTextBody.vue';
import DatePickerBody, { OPTIONS as DatePickerBodyOptions } from './components/DatePickerBody.vue';
import TimePickerBody, { OPTIONS as TimePickerBodyOptions } from './components/TimePickerBody.vue';

// action
import SwitchAction, { OPTIONS as SwitchActionOptions } from './components/SwitchAction.vue';
import CheckboxAction, { OPTIONS as CheckboxActionOptions } from './components/CheckboxAction.vue';
import InputAction, { OPTIONS as InputActionOptions } from './components/InputAction.vue';
import ButtonAction, { OPTIONS as ButtonActionOptions } from './components/ButtonAction.vue';
import ButtonGroupAction, { OPTIONS as ButtonGroupActionOptions } from './components/ButtonGroupAction.vue';
import IconButtonAction, { OPTIONS as IconButtonActionOptions } from './components/IconButtonAction.vue';
import DropdownAction, { OPTIONS as DropdownActionOptions } from './components/DropdownAction.vue';
import DatePickerAction, { OPTIONS as DatePickerActionOptions } from './components/DatePickerAction.vue';
import TimePickerAction, { OPTIONS as TimePickerActionOptions } from './components/TimePickerAction.vue';

export default {
	'_options': {
		'IconState': IconStateOptions,
		
		'LastChangeBody': LastChangeBodyOptions,
		'LevelBody': LevelBodyOptions,
		'CustomTextBody': CustomTextBodyOptions,
		'DatePickerBody': DatePickerBodyOptions,
		'TimePickerBody': TimePickerBodyOptions,
		
		'SwitchAction': SwitchActionOptions,
		'CheckboxAction': CheckboxActionOptions,
		'InputAction': InputActionOptions,
		'ButtonAction': ButtonActionOptions,
		'ButtonGroupAction': ButtonGroupActionOptions,
		'IconButtonAction': IconButtonActionOptions,
		'DropdownAction': DropdownActionOptions,
		'DatePickerAction': DatePickerActionOptions,
		'TimePickerAction': TimePickerActionOptions
	},
	'components': {
		State,
		SecondaryStates,
		Title
	},
	'body': {
		LastChangeBody,
		LevelBody,
		CustomTextBody,
		DatePickerBody,
		TimePickerBody
	},
	'action': {
		IconState,
		SwitchAction,
		CheckboxAction,
		InputAction,
		ButtonAction,
		ButtonGroupAction,
		IconButtonAction,
		DropdownAction,
		DatePickerAction,
		TimePickerAction
	}
}
