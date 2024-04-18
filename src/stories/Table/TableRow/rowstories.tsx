import type { Meta, StoryObj } from '@storybook/react';
import Table from '../Table'; // Adjust the import path based on your file structure
import TableRow from '../TableRow/TableRow';
import React from 'react';



// Define metadata for the stories
const meta: Meta = {
  title: 'Example/TableRow',
  component: TableRow,
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
        <TableRow>Row Cell 1</TableRow>
        <TableRow>Row Cell 2</TableRow>
      </>
    ),
  },
};

export const Highlighted: TableStory = {
  args: {
    className: 'highlighted-table-row-class',
    children: (
      <>
        <TableRow>Highlighted Row Cell 1</TableRow>
        <TableRow>Highlighted Row Cell 2</TableRow>
      </>
    ),
  },
};
