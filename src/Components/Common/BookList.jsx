import React from 'react'
import styled from 'styled-components';
import { AgGridReact } from 'ag-grid-react';
import BookImageTitleWrapper from './BookImageTitleWrapper';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const Title = styled.div`
  font-weight: bold;
  font-size: 14px;
  color: #8F8F8F;
  height: 100px;
  display: flex;
  align-items: center;
`;

const TitleRender = (props) => <Title>{props.value}</Title>;


const rightalign = { textAlign: 'right' };
const staticstyle = { border: 'none' };

const rowHeight = 120;
const makeSortable = true;

var deskTopColumn = [
  {
    headerName: 'Book title & Author',
    field: 'title',
    width: 440,
    suppressSizeToFit: true,
    sortable: makeSortable,
    cellStyle: staticstyle,
    unSortIcon: true,
    cellRendererFramework: BookImageTitleWrapper
  },
  {
    headerName: 'Genre',
    field: 'category',
    width: 320,
    suppressSizeToFit: true,
    sortable: makeSortable,
    unSortIcon: true,
    cellRendererFramework: TitleRender
  },
  {
    headerName: 'Reading Progress',
    field: 'percentage',
    width: 310,
    suppressSizeToFit: true,
    sortable: makeSortable,
    unSortIcon: true,
    cellRendererFramework: TitleRender
  },
  {
    headerName: 'Last Opened',
    field: 'lastOpened',
    width: 315,
    suppressSizeToFit: true,
    sortable: makeSortable,
    sort: 'asc',
    cellRendererFramework: TitleRender
  }
];

var phoneColumn = [
  {
    headerName: 'Book title & Author',
    field: 'title',
    width: 300,
    suppressSizeToFit: true,
    sortable: makeSortable,
    cellRendererFramework: BookImageTitleWrapper
  },
  {
    headerName: 'Reading Progress',
    field: 'percentage',
    width: 200,
    sortable: makeSortable,
    cellStyle: rightalign,
    cellRendererFramework: TitleRender
  },
];

function BookList({ books, darkMode, openBookDetail, setOpenBookDetail }) {

  return (
    <div className="ag-theme-alpine" style={{ width: '100%', height: '80vh' }}>
      <AgGridReact
        onRowClicked={(e) => setOpenBookDetail(e.data)}
        rowData={books}
        rowHeight={rowHeight}
        animateRows="true"
        columnDefs={window.innerWidth < 600 ? phoneColumn : deskTopColumn}
      >
      </AgGridReact>
    </div>
  )
}

export default BookList;