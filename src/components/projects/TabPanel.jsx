import React from 'react';
import Box from '@material-ui/core/Box';
const TabPanel = (props) => {
    
    const { children, value, i, ...other } = props;

    return (
      <div
        hidden={value !== i}
        id={`edit-tabpanel-${i}`}
        aria-labelledby={`edit-tab-${i}`}
        {...other}
      >
        {value === i && (
          <Box p={3}>
            {children}
          </Box>
        )}
      </div>
    );
}

export default TabPanel