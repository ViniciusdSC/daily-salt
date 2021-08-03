import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import MUIDataTable, { MUIDataTableColumnDef } from 'mui-datatables';

import { useHistory } from 'react-router-dom';
import { useDeleteSpent, useSpents } from 'spent/hooks';
import AppToolbarSelect from 'app/components/datatable/toolbar-select';

interface Props { }

const columns: MUIDataTableColumnDef[] = [
  {
    name: 'id',
    options: {
      display: 'excluded',
    },
  },
  {
    name: 'name',
    label: 'Name',
  },
  {
    name: 'value',
    label: 'Value',
  },
  {
    name: 'repeat',
    label: 'Repeat',
  },
];

const SpentHome: React.FC<Props> = () => {
  const models = useSpents();
  const history = useHistory();
  const deleteSpent = useDeleteSpent();

  const SpentActions = (
    <Tooltip title="New Spent">
      <IconButton
        color="inherit"
        onClick={() => history.push('/spent/create')}
      >
        <AddIcon />
      </IconButton>
    </Tooltip>
  );

  return (
    <MUIDataTable
      title="Spent List"
      columns={columns}
      data={models.map((model) => ({
        id: model.id,
        name: model.name,
        value: model.value,
        repeat: model.repeat ? 'Sim' : 'Não',
      }))}
      options={{
        serverSide: true,
        filter: false,
        search: false,
        customToolbar: () => SpentActions,
        customToolbarSelect: ({ data }, displayData, setSelectedRows) => (
          <AppToolbarSelect
            setSelectedRows={setSelectedRows}
            displayData={displayData}
            data={data}
            onDelete={async (ids) => {
              ids.forEach((_id) => {
                deleteSpent(_id);
              });
            }}
            onEdit={async (_id) => {
              history.push(`/spent/edit/${_id}`);
            }}
          />
        ),
      }}
    />
  );
};

export default SpentHome;
