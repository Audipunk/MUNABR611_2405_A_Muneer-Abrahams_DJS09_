import type { Meta, StoryObj } from '@storybook/react';

import { makeMultiple } from './utils';

const meta = {
  component: makeMultiple,
} satisfies Meta<typeof makeMultiple>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};