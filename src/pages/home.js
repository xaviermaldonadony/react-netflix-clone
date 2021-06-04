import { JumbotronContainer } from '../containers/jumbotron';
import { Feature, OptForm } from '../components';
import { FooterContainer } from '../containers/footer';
import { FaqsContainer } from '../containers/faqs';
import { HeaderContainer } from '../containers/header';

export default function Home() {
	return (
		<>
			<HeaderContainer>
				<Feature>
					<Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
					<Feature.SubTitle>
						Watch anywhere. Cancel at any time
					</Feature.SubTitle>

					<OptForm>
						<OptForm.Text>
							Ready to watch? Enter your email to create or restart your
							membership.
						</OptForm.Text>
						<OptForm.Input placeholder='Email address' />
						<OptForm.Button>Get Started</OptForm.Button>
						<OptForm.Break />
					</OptForm>
				</Feature>
			</HeaderContainer>

			<JumbotronContainer />
			<FaqsContainer />
			<FooterContainer />
		</>
	);
}
