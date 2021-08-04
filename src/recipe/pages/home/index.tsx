import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import MUIDataTable, { MUIDataTableColumnDef } from 'mui-datatables';

import { useHistory } from 'react-router-dom';
import { useDeleteRecipe, useRecipes } from 'recipe/hooks';
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
  {
    name: 'value',
    label: 'Value',
  },
  {
    name: 'repeat',
    label: 'Repeat',
  },
];

const RecipeHome: React.FC<Props> = () => {
  const models = useRecipes();
  const history = useHistory();
  const deleteRecipe = useDeleteRecipe();

  useSetBreadcrumbs([], 'Recipe');

  const RecipeActions = (
    <Tooltip title="New Recipe">
      <IconButton
        color="inherit"
        onClick={() => history.push('/recipe/create')}
      >
        <AddIcon />
      </IconButton>
    </Tooltip>
  );

  return (
    <MUIDataTable
      title="Recipe List"
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
        customToolbar: () => RecipeActions,
        customToolbarSelect: ({ data }, displayData, setSelectedRows) => (
          <AppToolbarSelect
            setSelectedRows={setSelectedRows}
            displayData={displayData}
            data={data}
            onDelete={async (ids) => {
              ids.forEach((_id) => {
                deleteRecipe(_id);
              });
            }}
            onEdit={async (_id) => {
              history.push(`/recipe/edit/${_id}`);
            }}
          />
        ),
      }}
    />
  );
};

export default RecipeHome;
