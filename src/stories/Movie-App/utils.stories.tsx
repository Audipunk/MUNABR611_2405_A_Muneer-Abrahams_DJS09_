import type { Meta, StoryObj } from '@storybook/react';

import { showReviewTotal } from './utils';

const meta = {
  component: showReviewTotal,
} satisfies Meta<typeof showReviewTotal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};