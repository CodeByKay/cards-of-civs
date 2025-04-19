import React from 'react';
import { Box, Paper, Typography, Grid, List, ListItem, ListItemText, Divider } from '@mui/material';

interface PlayerProps {
  name: string;
  age: number;
  resources: {
    food: number;
    wood: number;
    gold: number;
    stone: number;
  };
  villagers: {
    food: number;
    wood: number;
    gold: number;
    stone: number;
  };
  actionQueue: string[];
  buildings: {
    name: string;
    hp: number;
    maxHp: number;
  }[];
  attackQueue: {
    target: string;
    units: number;
  }[];
}

const Player: React.FC<PlayerProps> = ({
  name,
  age,
  resources,
  villagers,
  actionQueue,
  buildings,
  attackQueue,
}) => {
  return (
    <Paper elevation={2} sx={{ p: 2, mb: 2 }}>
      {/* Player Header */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" align="center">
          {name} - Age {age}
        </Typography>
      </Box>

      {/* Resources and Villagers */}
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={12}>
          <Paper elevation={1} sx={{ p: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Typography variant="body2" sx={{ whiteSpace: 'nowrap' }}>
                  Food: {resources.food}
                </Typography>
                <Typography variant="caption" sx={{ whiteSpace: 'nowrap' }}>
                  Villagers: {villagers.food}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body2" sx={{ whiteSpace: 'nowrap' }}>
                  Wood: {resources.wood}
                </Typography>
                <Typography variant="caption" sx={{ whiteSpace: 'nowrap' }}>
                  Villagers: {villagers.wood}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body2" sx={{ whiteSpace: 'nowrap' }}>
                  Gold: {resources.gold}
                </Typography>
                <Typography variant="caption" sx={{ whiteSpace: 'nowrap' }}>
                  Villagers: {villagers.gold}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body2" sx={{ whiteSpace: 'nowrap' }}>
                  Stone: {resources.stone}
                </Typography>
                <Typography variant="caption" sx={{ whiteSpace: 'nowrap' }}>
                  Villagers: {villagers.stone}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      {/* Action Queue */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle2" sx={{ mb: 1 }}>Action Queue</Typography>
        <Paper elevation={1} sx={{ p: 2 }}>
          <List dense>
            {actionQueue.map((action, index) => (
              <ListItem key={index}>
                <ListItemText primary={action} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Box>

      {/* Buildings */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle2" sx={{ mb: 1 }}>Buildings</Typography>
        <Paper elevation={1} sx={{ p: 2 }}>
          <List dense>
            {buildings.map((building, index) => (
              <ListItem key={index}>
                <ListItemText 
                  primary={building.name}
                  secondary={`HP: ${building.hp}/${building.maxHp}`}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Box>

      {/* Attack Queue */}
      <Box>
        <Typography variant="subtitle2" sx={{ mb: 1 }}>Attack Queue</Typography>
        <Paper elevation={1} sx={{ p: 2 }}>
          <List dense>
            {attackQueue.map((attack, index) => (
              <ListItem key={index}>
                <ListItemText 
                  primary={attack.target}
                  secondary={`Units: ${attack.units}`}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Box>
    </Paper>
  );
};

export default Player; 