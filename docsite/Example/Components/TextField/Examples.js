import React from 'react';
import { CodeExample } from '@evg-b/evg-ui';
import Snippets from './snippets'
import TextFieldBase from './TextFieldBase'
import TextFieldColor from './TextFieldColor'
import TextFieldError from './TextFieldError'
import TextFieldFullWidth from './TextFieldFullWidth'
import TextFieldHelperText from './TextFieldHelperText'
import TextFieldIcon from './TextFieldIcon'
import TextFieldMaxCount from './TextFieldMaxCount'
import TextFieldMultiline from './TextFieldMultiline'
import TextFieldOutlined from './TextFieldOutlined'
import TextFieldPlaceholderAndLabelText from './TextFieldPlaceholderAndLabelText'
import TextFieldRound from './TextFieldRound'


const TextFieldBaseExample = () => {
	return (
		<CodeExample
			title='Base'
			demo={<TextFieldBase />}
			snippet={Snippets.TextFieldBase}
		/>
	)
}

const TextFieldColorExample = () => {
	return (
		<CodeExample
			title='Color'
			demo={<TextFieldColor />}
			snippet={Snippets.TextFieldColor}
		/>
	)
}

const TextFieldErrorExample = () => {
	return (
		<CodeExample
			title='Error'
			demo={<TextFieldError />}
			snippet={Snippets.TextFieldError}
		/>
	)
}

const TextFieldFullWidthExample = () => {
	return (
		<CodeExample
			title='FullWidth'
			demo={<TextFieldFullWidth />}
			snippet={Snippets.TextFieldFullWidth}
		/>
	)
}

const TextFieldHelperTextExample = () => {
	return (
		<CodeExample
			title='HelperText'
			demo={<TextFieldHelperText />}
			snippet={Snippets.TextFieldHelperText}
		/>
	)
}

const TextFieldIconExample = () => {
	return (
		<CodeExample
			title='Icon'
			demo={<TextFieldIcon />}
			snippet={Snippets.TextFieldIcon}
		/>
	)
}

const TextFieldMaxCountExample = () => {
	return (
		<CodeExample
			title='MaxCount'
			demo={<TextFieldMaxCount />}
			snippet={Snippets.TextFieldMaxCount}
		/>
	)
}

const TextFieldMultilineExample = () => {
	return (
		<CodeExample
			title='Multiline'
			demo={<TextFieldMultiline />}
			snippet={Snippets.TextFieldMultiline}
		/>
	)
}

const TextFieldOutlinedExample = () => {
	return (
		<CodeExample
			title='Outlined'
			demo={<TextFieldOutlined />}
			snippet={Snippets.TextFieldOutlined}
		/>
	)
}

const TextFieldPlaceholderAndLabelTextExample = () => {
	return (
		<CodeExample
			title='PlaceholderAndLabelText'
			demo={<TextFieldPlaceholderAndLabelText />}
			snippet={Snippets.TextFieldPlaceholderAndLabelText}
		/>
	)
}

const TextFieldRoundExample = () => {
	return (
		<CodeExample
			title='Round'
			demo={<TextFieldRound />}
			snippet={Snippets.TextFieldRound}
		/>
	)
}

export { 
	TextFieldBaseExample,
TextFieldColorExample,
TextFieldErrorExample,
TextFieldFullWidthExample,
TextFieldHelperTextExample,
TextFieldIconExample,
TextFieldMaxCountExample,
TextFieldMultilineExample,
TextFieldOutlinedExample,
TextFieldPlaceholderAndLabelTextExample,
TextFieldRoundExample,

}
