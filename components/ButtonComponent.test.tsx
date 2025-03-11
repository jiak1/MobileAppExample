import { ButtonComponent } from './ButtonComponent'
import { render } from '@testing-library/react-native'

it('should render a title', () => {
	const { getByText } = render(
		<ButtonComponent title="Click me" onPress={() => {}} />
	)
	expect(getByText('jack')).toBeTruthy()
})
