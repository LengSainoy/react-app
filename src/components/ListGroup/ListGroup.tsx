import { MouseEvent, useState } from 'react'
import './ListGroup.css'

// prop is the input/args for the component, like parameter
// prop should be immutable / readonly
interface Props {
  items: string[]
  heading: string
  onSelectItem: (item:string) => void
}
function ListGroup({ items, heading, onSelectItem }: Props) {
	
	//let selectedIndex = -1  // local to this function component

  // Hook - state hook
  // tell react that component can have state that change overtime
  const [selectedIndex, setSelectedIndex] = useState(-1)
  // arr[0] // variable (selectedIndex)
  // arr[1] // updater function
  // example: 
  // const [name, setName] = useState(' ')

	// Event handler
	const handleClick = (event: MouseEvent) => console.log(event)
  
	return (
    // <> => shorthand for @react/Fragment
		// this will help eliminate the unused tag like <div> or <span>
		<>
			<h1>{heading}</h1>
			{items.length === 0 && <p>No item found</p>
    // Logical And Operator
    // true && '1' => '1'           if true, the value on the right side is returned
    // false && 'Leng' => false     if false, return false
      }
			<ul className='list-group'>
				{items.map((item, index) => (
					// class name from Bootstrap
					<li 
            className={ selectedIndex === index ? 
              'list-group-item active' : 
              'list-group-item'} 
            key={item} 
            onClick={() => {
              setSelectedIndex(index)
              onSelectItem(item)
            }}
          >
						{item}
					</li>
				))}
			</ul>
		</>
	)
}
export default ListGroup
