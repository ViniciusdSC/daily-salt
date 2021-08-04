import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import MUIDataTable, { MUIDataTableColumnDef } from 'mui-datatables';

import { useHistory } from 'react-router-dom';
import { useDeleteRecipeType, useRecipeTypes } from 'recipe-type/hooks';
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

const RecipeTypeHome: React.FC<Props> = () => {
  const models = useRecipeTypes();
  const history = useHistory();
  const deleteRecipeType = useDeleteRecipeType();

  useSetBreadcrumbs([], 'Recipe Type');

  const RecipeTypeActions = (
    <Tooltip title="New Recipe type">
      <IconButton
        color="inherit"
        onClick={() => history.push('/recipe-type/create')}
      >
        <AddIcon />
      </IconButton>
    </Tooltip>
  );

  return (
    <MUIDataTable
      title="Recipe type List"
      columns={columns}
      data={models.map((model) => ({
        id: model.id,
        name: model.name,
      }))}
      options={{
        serverSide: true,
        filter: false,
        search: false,
        customToolbar: () => RecipeTypeActions,
        customToolbarSelect: ({ data }, displayData, setSelectedRows) => (
          <AppToolbarSelect
            setSelectedRows={setSelectedRows}
            displayData={displayData}
            data={data}
            onDelete={async (ids) => {
              ids.forEach((_id) => {
                deleteRecipeType(_id);
              });
            }}
            onEdit={async (_id) => {
              history.push(`/recipe-type/edit/${_id}`);
            }}
          />
        ),
      }}
    />
  );
};

export default RecipeTypeHome;
