import type { Meta, StoryObj } from '@storybook/react';
import Table from '../Table'; // Adjust the import path based on your file structure
import TableHeader from './TableHeader';
import React from 'react';



// Define metadata for the stories
const meta: Meta = {
  title: 'Example/TableHeader',
  component: TableHeader,
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
        <TableHeader>Row Cell 1</TableHeader>
        <TableHeader>Row Cell 2</TableHeader>
      </>
    ),
  },
};

export const Highlighted: TableStory = {
  args: {
    className: 'highlighted-table-row-class',
    children: (
      <>
        <TableHeader>Highlighted Row Cell 1</TableHeader>
        <TableHeader>Highlighted Row Cell 2</TableHeader>
      </>
    ),
  },
};
