import type { Meta, StoryObj } from '@storybook/react';

import { showDetails } from './utils';

const meta = {
  component: showDetails,
} satisfies Meta<typeof showDetails>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};