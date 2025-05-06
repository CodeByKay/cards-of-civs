import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box } from '@mui/material';
import PlayerBoard from './PlayerBoard';
import OpponentBoard from './OpponentBoard';
var GameBoard = function () {
    return (_jsxs(Box, { children: [_jsx(Box, { sx: { mb: 4 }, children: _jsx(OpponentBoard, {}) }), _jsx(Box, { children: _jsx(PlayerBoard, {}) })] }));
};
export default GameBoard;
