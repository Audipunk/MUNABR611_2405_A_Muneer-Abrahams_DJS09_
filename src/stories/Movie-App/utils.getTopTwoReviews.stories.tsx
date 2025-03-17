import type { Meta, StoryObj } from '@storybook/react';

import { getTopTwoReviews } from './utils';

const meta = {
  component: getTopTwoReviews,
} satisfies Meta<typeof getTopTwoReviews>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};