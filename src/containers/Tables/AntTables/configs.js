import React from 'react';
import clone from 'clone';
import IntlMessages from '@iso/components/utility/intlMessages';
import {
  DateCell,
  ImageCell,
  LinkCell,
  TextCell,
} from '@iso/components/Tables/HelperCells';

const renderCell = (object, type, key) => {
  const value = object[key];
  switch (type) {
    case 'ImageCell':
      return ImageCell(value);
    case 'DateCell':
      return DateCell(value);
    case 'LinkCell':
      return LinkCell(value);
    default:
      return TextCell(value);
  }
};

const columns = [
  {
    title: <IntlMessages id="antTable.title.image" />,
    key: 'avatar',
    width: '1%',
    className: 'isoImageCell',
    render: object => renderCell(object, 'ImageCell', 'avatar'),
  },
  {
    title: <IntlMessages id="antTable.title.firstName" />,
    key: 'firstName',
    width: 100,
    render: object => renderCell(object, 'TextCell', 'firstName'),
  },
  {
    title: <IntlMessages id="antTable.title.lastName" />,
    key: 'lastName',
    width: 100,
    render: object => renderCell(object, 'TextCell', 'lastName'),
  },
  {
    title: <IntlMessages id="antTable.title.city" />,
    key: 'city',
    width: 200,
    render: object => renderCell(object, 'TextCell', 'city'),
  },
  {
    title: <IntlMessages id="antTable.title.street" />,
    key: 'street',
    width: 200,
    render: object => renderCell(object, 'TextCell', 'street'),
  },
  {
    title: <IntlMessages id="antTable.title.email" />,
    key: 'email',
    width: 200,
    render: object => renderCell(object, 'LinkCell', 'email'),
  },
  {
    title: <IntlMessages id="antTable.title.dob" />,
    key: 'date',
    width: 200,
    render: object => renderCell(object, 'DateCell', 'date'),
  },
];

const sortColumns = [
  { ...columns[1], sorter: true },
  { ...columns[2], sorter: true },
  { ...columns[3], sorter: true },
  { ...columns[4], sorter: true },
];
const editColumns = [
  { ...columns[1], width: 300 },
  { ...columns[2], width: 300 },
  columns[3],
  columns[4],
];

const tableinfos = [
  {
    title: 'Sortable Table',
    value: 'sortView',
    columns: clone(sortColumns),
  },
  {
    title: 'Editable View',
    value: 'editView',
    columns: clone(editColumns),
  },
];
export { columns, tableinfos };