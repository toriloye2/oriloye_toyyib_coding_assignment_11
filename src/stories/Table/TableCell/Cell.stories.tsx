import type { Meta, StoryObj } from '@storybook/react';
import Table from '../Table'; // Adjust the import path based on your file structure
import TableCell from './TableCell';
import React from 'react';

// Define metadata for the stories
const meta: Meta = {
  title: 'Example/TableCell',
  component: TableCell,
};

export default meta;

// Define the type for the story
type TableStory = StoryObj<typeof Table>;

// Define individual stories for different variants of the TableRow component
export const Default: TableStory = {
  args: {
    className: 'custom-table-row-class',
    backgroundColor: 'yellow',
    children: (
      <>
        <TableCell>Row Cell 1</TableCell>
        <TableCell>Row Cell 2</TableCell>
      </>
    ),
  },
};

export const Highlighted: TableStory = {
  args: {
    className: 'highlighted-table-row-class',
    children: (
      <>
        <TableCell>Highlighted Row Cell 1</TableCell>
        <TableCell>Highlighted Row Cell 2</TableCell>
      </>
    ),
  },
};
