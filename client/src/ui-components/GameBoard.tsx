import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';
import PlayerBoard from './PlayerBoard';
import OpponentBoard from './OpponentBoard';

const GameBoard: React.FC = () => {
  return (
    <Box>
      {/* Opponent Board */}
      <Box sx={{ mb: 4 }}>
        <OpponentBoard />
      </Box>

      {/* Player Board */}
      <Box>
        <PlayerBoard />
      </Box>
    </Box>
  );
};

export default GameBoard; 