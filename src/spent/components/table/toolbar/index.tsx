import React from 'react';
import { MUIDataTableToolbar, TableToolbar } from 'mui-datatables';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useSetSpentTableTab, useSpentTableTab } from 'spent/hooks';

const SpentTableToolbar: React.FC<MUIDataTableToolbar> = (props) => {
  const tableTab = useSpentTableTab();
  const setTableTab = useSetSpentTableTab();

  return (
    <>
      <Tabs
        value={tableTab}
        indicatorColor="primary"
        textColor="primary"
        onChange={(event, newValue) => {
          setTableTab(newValue);
        }}
      >
        <Tab label="Daily" value="daily" />
        <Tab label="Weekly" value="weekly" />
        <Tab label="Monthly" value="monthly" />
        <Tab label="Repeatable" value="repeatable" />
        <Tab label="Total" value="total" />
      </Tabs>
      <TableToolbar {...props} />
    </>
  );
};

export default SpentTableToolbar;
