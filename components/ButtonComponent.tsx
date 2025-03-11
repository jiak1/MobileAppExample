import { Button } from 'react-native'

export const ButtonComponent = ({
	title,
	onPress,
}: {
	title: string
	onPress: any
}) => {
	return <Button title={title} onPress={onPress} />
}
