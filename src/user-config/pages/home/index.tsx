import React from 'react';
import AppPaper from 'app/components/paper';
import { useUserConfig } from 'user-config/hooks';
import Tooltip from '@material-ui/core/Tooltip/Tooltip';
import Button from '@material-ui/core/Button/Button';
import EditIcon from '@material-ui/icons/Edit';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { useSetBreadcrumbs } from 'app/components/breadcrumbs/hooks';
import useStyles from './styles';

interface Props { }

const UserConfigHome: React.FC<Props> = () => {
  const classes = useStyles();
  const model = useUserConfig();
  const history = useHistory();
  const today = new Date();
  const currentMounth = new Date();
  currentMounth.setDate(0);

  const dailyGoalInFullMounth = currentMounth.getDate() * +model.dailyGoal;
  const dailyGoalInRelativeMounth = (currentMounth.getDate() - today.getDate()) * +model.dailyGoal;
  const weekGoalInFullMounth = 4 * +model.weekGoal;

  const total = weekGoalInFullMounth
    + +model.mounthGoal + dailyGoalInFullMounth + +model.repeatableGoal;

  useSetBreadcrumbs([], 'Settings');

  const Actions = (
    <div>
      <Tooltip title="Edit Settings">
        <Button
          startIcon={<EditIcon />}
          variant="outlined"
          onClick={() => {
            history.push('/user-config/edit');
          }}
        >
          Edit
        </Button>
      </Tooltip>
    </div>
  );

  return (
    <AppPaper title="Settings" actions={Actions}>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography variant="h6" component="h2">
                Daily Goal
              </Typography>
              <Typography color="textSecondary">
                $
                {' '}
                {model.dailyGoal}
                {' '}
                per day
              </Typography>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                *
                {' '}
                {currentMounth.getDate()}
                {' '}
                days
                {' '}
                =
                {' '}
                $
                {' '}
                {dailyGoalInFullMounth}
              </Typography>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                *
                {' '}
                {currentMounth.getDate() - today.getDate()}
                {' '}
                days
                {' '}
                =
                {' '}
                $
                {' '}
                {dailyGoalInRelativeMounth}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={6}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography variant="h6" component="h2">
                Week Goal
              </Typography>
              <Typography color="textSecondary">
                $
                {' '}
                {model.weekGoal}
                {' '}
                per week
              </Typography>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                * 4 weeks = $
                {' '}
                {weekGoalInFullMounth}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={6}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography variant="h6" component="h2">
                Mounth Goal
              </Typography>
              <Typography color="textSecondary">
                $
                {' '}
                {model.mounthGoal}
                {' '}
                per mounth
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={6}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography variant="h6" component="h2">
                Repeatable
              </Typography>
              <Typography color="textSecondary">
                $
                {' '}
                {model.repeatableGoal}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={6}>
          <Typography variant="h6" gutterBottom>
            Total:
            {' '}
            {total}
          </Typography>
        </Grid>
      </Grid>
    </AppPaper>
  );
};

export default UserConfigHome;
