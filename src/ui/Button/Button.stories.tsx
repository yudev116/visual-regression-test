import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';

const meta: Meta<typeof Button> = {
	title: 'ui/Button',
	component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Normal: Story = {
	args: {
		children: 'Example',
		disabled: false,
	},
};
export const Disable: Story = {
	args: {
		children: 'Example',
		disabled: true,
	},
};
