import React from 'react';
import s from './Dialogs.module.css';
import MessageItem from './MessageItem/MessageItem';
import DialogItem from './DialogItem/DialogItem';
import { Field, reduxForm } from 'redux-form';
import { FormInput } from '../common/FormInputs/FormInputs';
import { required, maxLengthCreater } from '../../utilities/validators';

import { Box, Grid, Avatar, Typography, makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	bgLightGreen: {
		backgroundColor: 'rgba(104, 179, 107, 0.3)',
		borderColor: 'rgba(104, 179, 107, 0.3)',
	},
}));



const maxLengt15 = maxLengthCreater(15);

let DialogForm = (props) => {

	return (
		<form onSubmit={props.handleSubmit}>
			<Box>
				<Field name="message" placeholder="New message" component={FormInput} />
			</Box>
			<Box pt={2}>
				<Button type='submit' variant="contained" color="primary">Send</Button>
			</Box>
		</form>
	)
}

DialogForm = reduxForm({
	form: 'dialogForm'
})(DialogForm);

export default function Dialogs(props) {

	const classes = useStyles();

	const submit = (formData, dialogId) => {
		props.addMessage(formData.message, dialogId);
	}

	let dialogId = !props.match.params.dialogId ? 1 : props.match.params.dialogId;
	return (
		// <div className={s.dialogs}>
		//     <div className={s.dialogItems}>
		//         <h2>Dialogs</h2>
		//         {props.dialogsPage.dialogs.map((dialog) => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />)}
		//     </div>
		//     <div className={s.messages}>
		//         {props.dialogsPage.messages.map((message) => <MessageItem key={message.id} message={message.message} name={message.name} />)}
		//         <DialogForm onSubmit={submit} />
		//     </div>
		// </div>
		<Box pl={{ md: 3 }}>
			<Grid container>
				<Grid item>
					<Box borderRight={1} borderColor="grey.500" pr={2}>
						{props.dialogsPage.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />)}
					</Box>
				</Grid>
				<Grid item>
					<Box pl={2}>
						<Box mb={2}
							className={classes.bgLightGreen}
							border={2} borderRadius={12}>
							<Grid container justifyContent='center'>
								<Box p={1}>
									<Typography variant='h6'>{props.dialogsPage.dialogs?.[dialogId - 1].name}</Typography>
								</Box>
							</Grid>
						</Box>
						{props.dialogsPage.messages.filter(message => message.dialog_id == dialogId)
							.map(message => <MessageItem key={message.id} message={message} />)}

						<DialogForm onSubmit={(formData) => { submit(formData, dialogId) }} />
					</Box>
				</Grid>
			</Grid>
		</Box>
	)
}