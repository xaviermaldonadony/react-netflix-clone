import { useContext, useState, useEffect } from 'react';
import Fuse from 'fuse.js';

import { SelectProfileContainer } from './profiles';
import { FirebaseContext } from '../context/firebase';
import { Card, Header, Loading, Player } from '../components/';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import { FooterContainer } from './footer';

export function BrowseContainer({ slides }) {
	const [category, setCategory] = useState('series');
	const [searchTerm, setSearchTerm] = useState('');
	const [profile, setProfile] = useState({});
	const [loading, setLoading] = useState(true);
	const [slideRows, setSlideRows] = useState([]);

	const { firebase } = useContext(FirebaseContext);
	const user = firebase.auth().currentUser || {};

	// give loading effect
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, [profile.displayName]);

	// set a category by default series
	useEffect(() => {
		setSlideRows(slides[category]);
	}, [slides, category]);

	// if the searchTerm changes we want to do a search
	useEffect(() => {
		const fuse = new Fuse(slideRows, {
			keys: ['data.description', 'data.title', 'data.genre'],
		});
		const results = fuse.search(searchTerm).map(({ item }) => item);

		if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
			setSlideRows(results);
		} else {
			setSlideRows(slides[category]);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchTerm]);

	return profile.displayName ? (
		<>
			{loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
			<Header src='joker1' dontShowOnSmallViewPort>
				<Header.Frame>
					<Header.Group>
						<Header.Logo to={ROUTES.HOME} src={logo} alt='Netflix' />
						<Header.TextLink
							active={category === 'series' ? 'true' : 'false'}
							onClick={() => setCategory('series')}
						>
							Series
						</Header.TextLink>
						<Header.TextLink
							active={category === 'films' ? 'true' : 'false'}
							onClick={() => setCategory('films')}
						>
							Films
						</Header.TextLink>
					</Header.Group>
					<Header.Group>
						<Header.Search
							searchTerm={searchTerm}
							setSearchTerm={setSearchTerm}
						/>
						<Header.Profile>
							<Header.Picture src={user.photoURL} />
							<Header.Dropdown>
								<Header.Group>
									<Header.Picture src={user.photoURL} />
									<Header.TextLink>{user.displayName}</Header.TextLink>
								</Header.Group>
								<Header.Group>
									<Header.TextLink onClick={() => firebase.auth().signOut()}>
										Sign out
									</Header.TextLink>
								</Header.Group>
							</Header.Dropdown>
						</Header.Profile>
					</Header.Group>
				</Header.Frame>
				<Header.Feature>
					<Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
					<Header.Text>
						“Do I really look like a guy with a plan? You know what I am? I'm a
						dog chasing cars. I wouldn't know what to do with one if I caught
						it! You know, I just... *do* things."
					</Header.Text>
					<Header.PlayButton>Play</Header.PlayButton>
				</Header.Feature>
			</Header>
			{/* maps the data */}
			<Card.Group>
				{slideRows.map((slideItem) => (
					<Card key={`${category}-${slideItem.title.toLowerCase()}`}>
						<Card.Title>{slideItem.title}</Card.Title>
						<Card.Entities>
							{slideItem.data.map((item) => (
								<Card.Item key={item.docId} item={item}>
									<Card.Image
										src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
									/>
									<Card.Meta>
										<Card.SubTitle>{item.title}</Card.SubTitle>
										<Card.Text>{item.description}</Card.Text>
									</Card.Meta>
								</Card.Item>
							))}
						</Card.Entities>
						<Card.Feature category={category}>
							<Player>
								<Player.Button />
								<Player.Video src='/videos/bunny.mp4' />
							</Player>
						</Card.Feature>
					</Card>
				))}
			</Card.Group>
			<FooterContainer />
		</>
	) : (
		<SelectProfileContainer user={user} setProfile={setProfile} />
	);
}
