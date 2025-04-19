import React from 'react';
import { Box, Grid, Paper, Typography, Stack } from '@mui/material';

const OpponentBoard: React.FC = () => {
  return (
    <Paper elevation={2} sx={{ p: 2 }}>
      {/* Town Center Row */}
      <Box sx={{ mb: 2 }}>
        <Paper elevation={1} sx={{ p: 2 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <Typography variant="subtitle1" align="center">[Age 1] Town Center (Opponent)</Typography>
              <Typography variant="body2" align="center">HP: 10000/10000</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>

      {/* Resource Squares */}
      <Box sx={{ mb: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Paper elevation={1} sx={{ p: 2, height: 120, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
              <Typography variant="body2" sx={{ whiteSpace: 'nowrap' }}>Food</Typography>
              <Typography variant="body2" sx={{ whiteSpace: 'nowrap' }}>Farm</Typography>
              <Typography variant="body2" sx={{ whiteSpace: 'nowrap' }}>HP: 1000/1000</Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper elevation={1} sx={{ p: 2, height: 120, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
              <Typography variant="body2" sx={{ whiteSpace: 'nowrap' }}>Wood</Typography>
              <Typography variant="body2" sx={{ whiteSpace: 'nowrap' }}>Lumber Camp</Typography>
              <Typography variant="body2" sx={{ whiteSpace: 'nowrap' }}>HP: 1000/1000</Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper elevation={1} sx={{ p: 2, height: 120, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
              <Typography variant="body2" sx={{ whiteSpace: 'nowrap' }}>Gold</Typography>
              <Typography variant="body2" sx={{ whiteSpace: 'nowrap' }}>Mining Camp</Typography>
              <Typography variant="body2" sx={{ whiteSpace: 'nowrap' }}>HP: 1000/1000</Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper elevation={1} sx={{ p: 2, height: 120, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
              <Typography variant="body2" sx={{ whiteSpace: 'nowrap' }}>Stone</Typography>
              <Typography variant="body2" sx={{ whiteSpace: 'nowrap' }}>Mining Camp</Typography>
              <Typography variant="body2" sx={{ whiteSpace: 'nowrap' }}>HP: 1000/1000</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Military Buildings */}
      <Box sx={{ mb: 2 }}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={3}>
            <Paper elevation={1} sx={{ p: 2, height: 100, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
              <Typography variant="body2" sx={{ whiteSpace: 'nowrap' }}>Barracks</Typography>
              <Typography variant="body2" sx={{ whiteSpace: 'nowrap' }}>HP: 1000/1000</Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper elevation={1} sx={{ p: 2, height: 100, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
              <Typography variant="body2" sx={{ whiteSpace: 'nowrap' }}>Archery Range</Typography>
              <Typography variant="body2" sx={{ whiteSpace: 'nowrap' }}>HP: 1000/1000</Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper elevation={1} sx={{ p: 2, height: 100, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
              <Typography variant="body2" sx={{ whiteSpace: 'nowrap' }}>Stable</Typography>
              <Typography variant="body2" sx={{ whiteSpace: 'nowrap' }}>HP: 1000/1000</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Military Units */}
      <Box>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={2}>
            <Paper elevation={1} sx={{ p: 2, height: 80, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
              <Typography variant="body2">Militia</Typography>
              <Typography variant="caption">x3</Typography>
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper elevation={1} sx={{ p: 2, height: 80, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
              <Typography variant="body2">Archer</Typography>
              <Typography variant="caption">x2</Typography>
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper elevation={1} sx={{ p: 2, height: 80, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
              <Typography variant="body2">Scout</Typography>
              <Typography variant="caption">x1</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default OpponentBoard; 