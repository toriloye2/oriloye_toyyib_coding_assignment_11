import type { Meta, StoryObj } from '@storybook/react';
import Table from './Table'; // Adjust the import path based on your file structure
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import TableCell from './TableCell';
import TableFooter from './TableFooter';

// Define metadata for the stories
const meta: Meta = {
  title: 'Example/Table',
  component: Table,
};

export default meta;

// Define the type for the story
type TableStory = StoryObj<typeof Table>;

// Define individual stories for different variants of the Table component
export const Default: TableStory = {
  args: {
    className: 'custom-table-class',
    children: (
      <>
        <TableHeader>
          <TableRow>
            <TableCell>Header Cell 1</TableCell>
            <TableCell>Header Cell 2</TableCell>
          </TableRow>
        </TableHeader>
        <tbody>
          <TableRow>
            <TableCell>Row 1, Cell 1</TableCell>
            <TableCell>Row 1, Cell 2</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Row 2, Cell 1</TableCell>
            <TableCell>Row 2, Cell 2</TableCell>
          </TableRow>
        </tbody>
        <TableFooter>
          <TableRow>
            <TableCell>Footer Cell 1</TableCell>
            <TableCell>Footer Cell 2</TableCell>
          </TableRow>
        </TableFooter>
      </>
    ),
  },
};
