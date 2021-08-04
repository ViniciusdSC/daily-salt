import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import MUIDataTable, { MUIDataTableColumnDef } from 'mui-datatables';

import { useHistory } from 'react-router-dom';
import { useDeleteSpentType, useSpentTypes } from 'spent-type/hooks';
import AppToolbarSelect from 'app/components/datatable/toolbar-select';
import { useSetBreadcrumbs } from 'app/components/breadcrumbs/hooks';

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
];

const SpentTypeHome: React.FC<Props> = () => {
  const models = useSpentTypes();
  const history = useHistory();
  const deleteSpentType = useDeleteSpentType();

  useSetBreadcrumbs([], 'Spent Type');

  const SpentTypeActions = (
    <Tooltip title="New Spent Type">
      <IconButton
        color="inherit"
        onClick={() => history.push('/spent-type/create')}
      >
        <AddIcon />
      </IconButton>
    </Tooltip>
  );

  return (
    <MUIDataTable
      title="Spent Type List"
      columns={columns}
      data={models.map((model) => ({
        id: model.id,
        name: model.name,
      }))}
      options={{
        serverSide: true,
        filter: false,
        search: false,
        customToolbar: () => SpentTypeActions,
        customToolbarSelect: ({ data }, displayData, setSelectedRows) => (
          <AppToolbarSelect
            setSelectedRows={setSelectedRows}
            displayData={displayData}
            data={data}
            onDelete={async (ids) => {
              ids.forEach((_id) => {
                deleteSpentType(_id);
              });
            }}
            onEdit={async (_id) => {
              history.push(`/spent-type/edit/${_id}`);
            }}
          />
        ),
      }}
    />
  );
};

export default SpentTypeHome;
