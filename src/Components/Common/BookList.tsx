import styled from 'styled-components';
import { AgGridReact } from 'ag-grid-react';
import BookImageTitleWrapper from './BookImageTitleWrapper';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

interface IProps {
  books: any,
  setOpenBookDetail: any
}

const Title = styled.div`
  font-weight: bold;
  font-size: 14px;
  // color: #8F8F8F;
  opacity: 0.5;
  height: 100px;
  display: flex;
  cursor: pointer;
  align-items: center;
`;

const TitleRender = (props: any) => <Title>{props.value}</Title>;

const rightalign = { justifyContent: 'center', display: 'flex', border: 'none' };
const staticstyle = { border: 'none' };

const rowHeight = 120;
const makeSortable = true;

var deskTopColumn = [
  {
    width: 430,
    field: 'title',
    unSortIcon: true,
    sortable: makeSortable,
    cellStyle: staticstyle,
    suppressSizeToFit: true,
    headerName: 'Book title & Author',
    cellRendererFramework: BookImageTitleWrapper
  }, {
    width: 310,
    unSortIcon: true,
    field: 'category',
    headerName: 'Genre',
    sortable: makeSortable,
    cellStyle: staticstyle,
    suppressSizeToFit: true,
    cellRendererFramework: TitleRender
  }, {
    width: 300,
    unSortIcon: true,
    field: 'percentage',
    cellStyle: staticstyle,
    sortable: makeSortable,
    suppressSizeToFit: true,
    headerName: 'Reading Progress',
    cellRendererFramework: TitleRender
  }, {
    width: 215,
    sort: 'asc',
    field: 'lastOpened',
    sortable: makeSortable,
    cellStyle: staticstyle,
    suppressSizeToFit: true,
    headerName: 'Last Opened',
    cellRendererFramework: TitleRender
  }
];

var phoneColumn = [
  {
    width: 180,
    field: 'title',
    sortable: makeSortable,
    suppressSizeToFit: true,
    headerName: 'Book title & Author',
    cellRendererFramework: BookImageTitleWrapper
  },{
    width: 140,
    field: 'percentage',
    cellStyle: rightalign,
    sortable: makeSortable,
    headerName: 'Reading Progress',
    cellRendererFramework: TitleRender
  }
];

function BookList(props: IProps) {
  const animateRows: boolean = true

  return (
    <div className="ag-theme-alpine" style={{ width: '100%', height: '80vh' }}>
      <AgGridReact
        onRowClicked={(e) => props.setOpenBookDetail(e.data)}
        rowData={props.books}
        rowHeight={rowHeight}
        animateRows={animateRows}
        columnDefs={window.innerWidth < 600 ? phoneColumn : deskTopColumn}
      >
      </AgGridReact>
    </div>
  )
}

export default BookList;
