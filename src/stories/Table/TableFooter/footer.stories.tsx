import type { Meta, StoryObj } from '@storybook/react';
import Table from '../Table'; // Adjust the import path based on your file structure
import TableFooter from './TableFooter';
import React from 'react';


// Define metadata for the stories
const meta: Meta = {
  title: 'Example/TableFooter',
  component: TableFooter,
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
        <TableFooter>Row Cell 1</TableFooter>
        <TableFooter>Row Cell 2</TableFooter>
      </>
    ),
  },
};

export const Highlighted: TableStory = {
  args: {
    className: 'highlighted-table-row-class',
    children: (
      <>
        <TableFooter>Highlighted Row Cell 1</TableFooter>
        <TableFooter>Highlighted Row Cell 2</TableFooter>
      </>
    ),
  },
};
