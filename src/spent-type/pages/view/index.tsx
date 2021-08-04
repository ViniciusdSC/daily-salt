import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useHistory, useParams } from 'react-router-dom';

import { useDeleteSpentType, useSpentTypeById } from 'spent-type/hooks';
import AppPaper from 'app/components/paper';
import { useSetBreadcrumbs } from 'app/components/breadcrumbs/hooks';
import useStyles from './styles';

interface Props { }

const SpentTypeView: React.FC<Props> = () => {
  const classes = useStyles();
  const deleteSpentType = useDeleteSpentType();
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const model = useSpentTypeById(id);

  async function handleDelete() {
    history.push('/spent-type');
    await deleteSpentType(model.id);
  }

  useSetBreadcrumbs([
    { to: '/spent-type', label: 'Spent Type' },
  ], model.name);

  const Actions = (
    <div>
      <Tooltip title="Delete Spent Type">
        <Button
          startIcon={<DeleteIcon />}
          variant="outlined"
          color="primary"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </Tooltip>
      <Tooltip title="Edit Spent Type">
        <Button
          startIcon={<EditIcon />}
          variant="outlined"
          color="primary"
          onClick={() => {
            history.push(`/spent-type/edit/${model.id}`);
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
            primary={<h4 className={classes.listTitle}>Spent Type Name</h4>}
            secondary={model.name}
          />
        </ListItem>
      </List>
    </AppPaper>
  );
};

export default SpentTypeView;
