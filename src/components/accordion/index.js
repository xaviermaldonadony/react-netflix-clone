import { useState, useContext, createContext } from 'react';
import {
	Container,
	Frame,
	Title,
	Item,
	Inner,
	Header,
	Body,
} from './styles/accordion';

const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
	return (
		<Container {...restProps}>
			<Inner> {children}</Inner>
		</Container>
	);
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
	return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
	const [toggleShow, setToggleShow] = useState(false);
	return (
		<ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
			<Item {...restProps}>{children}</Item>
		</ToggleContext.Provider>
	);
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
	const { toggleShow, setToggleShow } = useContext(ToggleContext);

	return (
		// why not setToggleShow(!toggleShow)
		// somethimes depending on how much you have, react will batch this
		// so we might not have the latest value
		// if we (toggleShow)	=> !toggle, we are taking the previous state
		<Header
			// onClick={() => setToggleShow(!toggleShow)}
			onClick={() => setToggleShow((toggleShow) => !toggleShow)}
			{...restProps}
		>
			{children}
			{/* would tell us sthe state */}
			{/* <pre>{JSON.stringify(toggleShow, null, 2)}</pre> */}
			{toggleShow ? (
				<img src='./images/icons/close-slim.png' alt='Close' />
			) : (
				<img src='./images/icons/add.png' alt='Open' />
			)}
		</Header>
	);
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
	const { toggleShow } = useContext(ToggleContext);

	return toggleShow ? (
		<Body {...restProps}>
			<span>{children}</span>
		</Body>
	) : null;
};
