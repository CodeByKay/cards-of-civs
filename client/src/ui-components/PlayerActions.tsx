import React from 'react';
import { Box, Grid, Paper, Typography, Button, Tabs, Tab } from '@mui/material';

const PlayerActions: React.FC = () => {
  const [currentTab, setCurrentTab] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  return (
    <Box>

    </Box>
  );
};

export default PlayerActions; 