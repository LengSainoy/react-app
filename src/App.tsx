import { useState } from 'react'
import Alert from './components/Alert'
import Button from './components/Button/Button'

// if you only supply the folder without the filename
// this import will looking for ../ListGroup/index by default
import ListGroup from './components/ListGroup'
import Like from './components/Like/Like'
import Form from './components/Form/Form'

function App() {
	let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris']
	const handleSelectItem = (item: string) => {
		console.log(item)
	}
	const [alertVisible, setAlertVisibility] = useState(false)
  const [buttonColor, setButtonColor] = useState('secondary')

	return (
		<div>
			<ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem} />
			{alertVisible && (
				<Alert onClose={() => setAlertVisibility(false)}>
					The button is <strong>clicked!!</strong>
				</Alert>
			)}
			<Button
        color={buttonColor}
				onClick={() => {
					setAlertVisibility(!alertVisible)
          setButtonColor(alertVisible ? 'primary' : 'secondary')
					console.log('Alert is displayed')
				}}
			>
				My Button
			</Button>
      <Like onClick={() => console.log('clicked')}></Like>
      <Form ></Form>
		</div>
	)
}

export default App
