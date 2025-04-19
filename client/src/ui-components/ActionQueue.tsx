import React from 'react';
import { Box, Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

const ActionQueue: React.FC = () => {
  // This would be replaced with actual queue data from state
  const queueItems = [
    { id: 1, action: 'Train Villager', timeLeft: '30s' },
  ];

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Action Queue
      </Typography>
      <Paper elevation={1}>
        <List>
          {queueItems.map((item) => (
            <ListItem key={item.id} divider>
              <ListItemText
                primary={item.action}
                secondary={`Time remaining: ${item.timeLeft}`}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default ActionQueue; 