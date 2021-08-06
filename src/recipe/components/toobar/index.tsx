import React from 'react';
import { MUIDataTableToolbar, TableToolbar } from 'mui-datatables';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useRecipeTableTab, useSetRecipeTableTab } from 'recipe/hooks';

const RecipeTableToolbar: React.FC<MUIDataTableToolbar> = (props) => {
  const tableTab = useRecipeTableTab();
  const setTableTab = useSetRecipeTableTab();

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

export default RecipeTableToolbar;
