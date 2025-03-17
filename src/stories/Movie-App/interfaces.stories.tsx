import type { Meta, StoryObj } from '@storybook/react';

import Interfaces from './interfaces';

const meta = {
  component: Interfaces,
} satisfies Meta<typeof Interfaces>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};