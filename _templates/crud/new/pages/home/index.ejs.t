---
to: src/<%= h.changeCase.paramCase(name) %>/pages/home/index.tsx
---

import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import MUIDataTable, { MUIDataTableColumnDef } from 'mui-datatables';

import { useHistory } from 'react-router-dom';
import { useDelete<%= h.changeCase.pascalCase(name) %>, use<%= h.changeCase.pascalCase(name) %>s } from '<%= h.changeCase.paramCase(name) %>/hooks';
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
];

const <%= h.changeCase.pascalCase(name) %>Home: React.FC<Props> = () => {
  const models = use<%= h.changeCase.pascalCase(name) %>s();
  const history = useHistory();
  const delete<%= h.changeCase.pascalCase(name) %> = useDelete<%= h.changeCase.pascalCase(name) %>();

  const <%= h.changeCase.pascalCase(name) %>Actions = (
    <Tooltip title="New <%= h.changeCase.sentenceCase(name) %>">
      <IconButton
        color="inherit"
        onClick={() => history.push('/<%= h.changeCase.paramCase(name) %>/create')}
      >
        <AddIcon />
      </IconButton>
    </Tooltip>
  );

  return (
    <MUIDataTable
      title="<%= h.changeCase.sentenceCase(name) %> List"
      columns={columns}
      data={models.map((model) => ({
        id: model.id,
        name: model.name,
      }))}
      options={{
        serverSide: true,
        filter: false,
        search: false,
        customToolbar: () => <%= h.changeCase.pascalCase(name) %>Actions,
        customToolbarSelect: ({ data }, displayData, setSelectedRows) => (
          <AppToolbarSelect
            setSelectedRows={setSelectedRows}
            displayData={displayData}
            data={data}
            onDelete={async (ids) => {
              ids.forEach((_id) => {
                delete<%= h.changeCase.pascalCase(name) %>(_id);
              });
            }}
            onEdit={async (_id) => {
              history.push(`/<%= h.changeCase.paramCase(name) %>/edit/${_id}`);
            }}
          />
        ),
      }}
    />
  );
};

export default <%= h.changeCase.pascalCase(name) %>Home;
