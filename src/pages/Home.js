import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { useEffect, useState, useRef } from 'react';
import { getEmployeeList } from '../utils';
import { Button } from '@mui/material';
import ButtonCellRenderer from '../components/ButtonCellRenderer';
import CellEditor from '../components/CellEditor'
import ActionsRenderer from '../components/ActionsRenderer';

function Home() {
    const [tableData, setTableData] = useState([])
    const [editableCell, setEditableCell] = useState(false)
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const gridRef = useRef(null);

    const onGridReady = (params) => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);

        const fetchEmployeeList = async () => {
            const data = await getEmployeeList()
            setTableData(data)
        }
        fetchEmployeeList()
    };

    const columnDef = [
        { headerName: 'First Name', field: 'firstName', cellEditor:'cellEditor' },
        { headerName: 'Last Name', field: 'lastName', cellEditor:'cellEditor' },
        { headerName: 'Email', field: 'email', cellEditor:'cellEditor' },
        { headerName: 'Number', field: 'number', cellEditor:'cellEditor' },
        { headerName: 'Gender',field: 'gender', cellEditor:'cellEditor' },
        { headerName: '', cellRenderer: 'actionsRenderer', editable: false}
    ];

    const defaultColDef = {
        editable: true,
        resizable: true,
        suppressKeyboardEvent: params => params.editing
      };

      const frameworkComponents = {
        cellEditor: CellEditor,
        actionsRenderer: ActionsRenderer,
        
      };
    return (
        <div className='App'>
            <header className='App-header'>
                <div className='ag-theme-alpine' style={{ height: 600, width: 1200 }}>
                    <AgGridReact
                        columnDefs={columnDef}
                        defaultColDef={defaultColDef}
                        rowData={tableData}
                        getRowNodeId={data => data.id}
                        onGridReady={onGridReady}
                        frameworkComponents={frameworkComponents}
                        editType="fullRow"
                        suppressClickEdit
                        statusBar={{
                            statusPanels: [{ statusPanel: "addRowStatusBar" }]
                        }}
                    />
                </div>
            </header>
        </div>
    );
}

export default Home;
