import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Container, Grid, Paper } from '@mui/material';
import GameBoard from './ui-components/GameBoard';
import ActionQueue from './ui-components/ActionQueue';
import PlayerActions from './ui-components/PlayerActions';
function App() {
    return (_jsx(Container, { maxWidth: "xl", children: _jsx(Box, { sx: { flexGrow: 1, py: 4 }, children: _jsxs(Grid, { container: true, spacing: 3, children: [_jsx(Grid, { item: true, xs: 12, md: 9, children: _jsx(Paper, { elevation: 3, sx: { p: 2 }, children: _jsx(GameBoard, {}) }) }), _jsx(Grid, { item: true, xs: 12, md: 3, children: _jsx(Paper, { elevation: 3, sx: { p: 2, height: '100%' }, children: _jsx(ActionQueue, {}) }) }), _jsx(Grid, { item: true, xs: 12, children: _jsx(Paper, { elevation: 3, sx: { p: 2 }, children: _jsx(PlayerActions, {}) }) })] }) }) }));
}
export default App;
