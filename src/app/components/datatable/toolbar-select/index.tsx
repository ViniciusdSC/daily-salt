import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { DisplayData } from 'mui-datatables';

interface Props {
  displayData: DisplayData;
  data: Array<{
    index: number;
    dataIndex: number;
  }>;
  setSelectedRows(rows: number[]): void;
  onEdit?(id: string): Promise<void>;
  onDelete?(ids: string[]): Promise<void>;
}

const AppToolbarSelect: React.FC<Props> = ({
  displayData, data, onDelete, onEdit, setSelectedRows,
}) => {
  function handleEdit() {
    const row = displayData.find((_data) => _data.dataIndex === data[0].dataIndex);

    if (row && onEdit) {
      const [id] = row.data;

      setSelectedRows([]);

      onEdit(id);
    }
  }

  function handleDelete() {
    const rows = displayData.filter((_data) => (
      data.map((_d) => _d.dataIndex).includes(_data.dataIndex)
    ));

    if (rows && onDelete) {
      onDelete(rows.map((_row) => _row.data[0]));

      setSelectedRows([]);
    }
  }

  return (
    <div>
      {data.length === 1 && onEdit && (
        <IconButton
          color="inherit"
          onClick={handleEdit}
        >
          <EditIcon />
        </IconButton>
      )}
      {onDelete && (
        <IconButton
          color="inherit"
          onClick={handleDelete}
        >
          <DeleteIcon />
        </IconButton>
      )}
    </div>
  );
};

export default AppToolbarSelect;
