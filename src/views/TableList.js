import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'productName', headerName: 'Product Name', width: 200 },
  { field: 'category', headerName: 'Category', width: 130 },
  {
    field: 'quantity',
    headerName: 'Quantity',
    type: 'number',
    width: 120,
  },
  {
    field: 'unitPrice',
    headerName: 'Unit Price',
    type: 'number',
    width: 120,
  },
  {
    field: 'totalValue',
    headerName: 'Total Value',
    type: 'number',
    width: 150,
    valueGetter: (params) => params.row.quantity * params.row.unitPrice,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    sortable: false,
    width: 200,
    renderCell: (params) => (
      <>
        <button onClick={() => handleEdit(params.row.id)}><i className='tim-icons icon-pencil'></i></button>
        <button onClick={() => handleView(params.row.id)}><i className='tim-icons icon-tv-2'></i></button>
        <button onClick={() => handleDelete(params.row.id)}><i className='tim-icons icon-trash-simple'></i></button>
      </>
    ),
  },
];

const rows = [
  { id: 1, productName: 'Laptop', category: 'Electronics', quantity: 15, unitPrice: 800 },
  { id: 2, productName: 'Desk Chair', category: 'Furniture', quantity: 20, unitPrice: 100 },
  { id: 3, productName: 'Printer', category: 'Electronics', quantity: 8, unitPrice: 200 },
  { id: 4, productName: 'Office Desk', category: 'Furniture', quantity: 10, unitPrice: 300 },
  { id: 5, productName: 'Barcode Scanner', category: 'Electronics', quantity: 5, unitPrice: 150 },
  { id: 6, productName: 'Storage Cabinet', category: 'Furniture', quantity: 12, unitPrice: 250 },
  { id: 7, productName: 'Label Printer', category: 'Electronics', quantity: 6, unitPrice: 180 },
  { id: 8, productName: 'Bookshelf', category: 'Furniture', quantity: 18, unitPrice: 120 },
  { id: 9, productName: 'Office Supplies Kit', category: 'Stationery', quantity: 25, unitPrice: 50 },
];

const handleEdit = (productId) => {
  // Implement your edit logic here
  console.log(`Edit product with ID ${productId}`);
};

const handleView = (productId) => {
  // Implement your view logic here
  console.log(`View product with ID ${productId}`);
};

const handleDelete = (productId) => {
  // Implement your delete logic here
  console.log(`Delete product with ID ${productId}`);
};

function TableList() {

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card style={{width:'75%'}}>
              <CardHeader>
                <CardTitle tag="h4">Inventory Management</CardTitle>
              </CardHeader>
              <CardBody>
                <div style={{width:'100%'}}>
                  <DataGrid
                    rows={rows}
                    columns={columns}
                    style={{ color: 'white' }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default TableList;
