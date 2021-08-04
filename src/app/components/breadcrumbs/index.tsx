import React from 'react';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';

import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Link } from 'react-router-dom';
import { useAppBreadcrumbCurrent, useAppBreadcrumbList } from './hooks';
import useStyles from './styles';

interface Props { }

const AppBreadcrumbs: React.FC<Props> = () => {
  const classes = useStyles();
  const breadcrumbList = useAppBreadcrumbList();
  const breadcrumbCurrent = useAppBreadcrumbCurrent();

  return (
    <Breadcrumbs className={classes.root} separator={<NavigateNextIcon className={classes.icon} />} aria-label="breadcrumb">
      {breadcrumbList.map((breadcrumbItem) => (
        <Link key={breadcrumbItem.to} className={classes.link} to={breadcrumbItem.to}>
          {breadcrumbItem.label}
        </Link>
      ))}
      <Typography className={classes.current}>{breadcrumbCurrent}</Typography>
    </Breadcrumbs>
  );
};

export default AppBreadcrumbs;
