import React from "react";
import {
	Button,
	Dialog,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Input,
	Checkbox,
	DialogHeader,
	DialogBody,
	DialogFooter,
	Textarea,
} from "@material-tailwind/react";

export default function Example() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen((cur) => !cur);

	return (
		<React.Fragment>
			<Button variant="gradient">
				Open Dialog
			</Button>
			
		</React.Fragment>
	);
}
