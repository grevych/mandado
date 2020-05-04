import React from 'react';
import { Grid, Button } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux';

import { selectSection, createDraft, cancelDraft, selectDraft } from './actions'
import Menu from './components/menu'
import './App.css'


function Header({ activeItem }) {
	const selectedSection = useSelector(store => store.selectedSection)
	const dispatch = useDispatch();
	const handleDraftCreation = (draft) => createDraft(dispatch);

	return (
		<Grid className='app-header'>
			<Grid.Column
				mobile={8}
				tablet={8}
				computer={8}
			>
				<Menu
					activeItem={selectedSection}
					onItemClick={(section) => {
						// Change section
						selectSection(section, dispatch);
						// Clean draft
						selectDraft(null, dispatch);
					}}
				/>
			</Grid.Column>
			<Grid.Column mobile={8} tablet={8} computer={8}>
				<Button
					style={{ background: 'white', float: 'right', borderRadius: '2px'}}
					onClick={() => {handleDraftCreation(); selectSection('drafts', dispatch); }}
				>
					<i className='plus icon' style={{ color: '#5a6497', margin: 0 }}/>
				</Button>
			</Grid.Column>
		</Grid>
	)
}

export default Header;
