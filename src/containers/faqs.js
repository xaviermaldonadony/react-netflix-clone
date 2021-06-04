import { Accordion } from '../components';
import { OptForm } from '../components';
import faqsData from '../fixtures/faqs';

export function FaqsContainer() {
	const testProps = { item: 2, testItem: 'test props' };
	return (
		<Accordion>
			<Accordion.Title>Frequently Asked Questions</Accordion.Title>
			{faqsData.map((item) => (
				<Accordion.Item key={item.id} {...testProps}>
					<Accordion.Header>{item.header}</Accordion.Header>
					<Accordion.Body>{item.body}</Accordion.Body>
				</Accordion.Item>
			))}
			{/* <Accordion.Item /> */}

			<OptForm>
				<OptForm.Text>
					Ready to watch? Enter your email to create or restart your membership.
				</OptForm.Text>
				<OptForm.Input placeholder='Email address' />
				<OptForm.Button>Get Started</OptForm.Button>
				<OptForm.Break />
			</OptForm>
		</Accordion>
	);
}
