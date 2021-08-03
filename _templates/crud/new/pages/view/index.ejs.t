---
to: src/<%= h.changeCase.paramCase(name) %>/pages/view/index.tsx
---


import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useHistory, useParams } from 'react-router-dom';

import { useDelete<%= h.changeCase.pascalCase(name) %>, use<%= h.changeCase.pascalCase(name) %>ById } from '<%= h.changeCase.paramCase(name) %>/hooks';
import AppPaper from 'app/components/paper';
import useStyles from './styles';

interface Props {}

const <%= h.changeCase.pascalCase(name) %>View: React.FC<Props> = () => {
  const classes = useStyles();
  const delete<%= h.changeCase.pascalCase(name) %> = useDelete<%= h.changeCase.pascalCase(name) %>();
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const model = use<%= h.changeCase.pascalCase(name) %>ById(id);

  async function handleDelete() {
    history.push('/<%= h.changeCase.paramCase(name) %>');
    await delete<%= h.changeCase.pascalCase(name) %>(model.id);
  }

  const Actions = (
    <div>
      <Tooltip title="Delete <%= h.changeCase.sentenceCase(name) %>">
        <Button
          startIcon={<DeleteIcon />}
          variant="outlined"
          color="primary"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </Tooltip>
      <Tooltip title="Edit <%= h.changeCase.sentenceCase(name) %>">
        <Button
          startIcon={<EditIcon />}
          variant="outlined"
          color="primary"
          onClick={() => {
            history.push(`/<%= h.changeCase.paramCase(name) %>/edit/${model.id}`);
          }}
        >
          Edit
        </Button>
      </Tooltip>
    </div>
  );

  return (
    <AppPaper title={model.name} actions={Actions}>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        <ListItem key={id}>
          <ListItemText
            primary={<h4 className={classes.listTitle}><%= h.changeCase.sentenceCase(name) %> Name</h4>}
            secondary={model.name}
          />
        </ListItem>
      </List>
    </AppPaper>
  );
};

export default <%= h.changeCase.pascalCase(name) %>View;
