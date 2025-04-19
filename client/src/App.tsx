import React from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import GameBoard from './ui-components/GameBoard';
import ActionQueue from './ui-components/ActionQueue';
import PlayerActions from './ui-components/PlayerActions';

function App() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ flexGrow: 1, py: 4 }}>
        <Grid container spacing={3}>
          {/* Game Board Section */}
          <Grid item xs={12} md={9}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <GameBoard />
            </Paper>
          </Grid>

          {/* Action Queue Section */}
          <Grid item xs={12} md={3}>
            <Paper elevation={3} sx={{ p: 2, height: '100%' }}>
              <ActionQueue />
            </Paper>
          </Grid>

          {/* Player Actions Section */}
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <PlayerActions />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App; 