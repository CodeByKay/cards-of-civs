import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Paper, Typography, List, ListItem, ListItemText } from '@mui/material';
var ActionQueue = function () {
    // This would be replaced with actual queue data from state
    var queueItems = [
        { id: 1, action: 'Train Villager', timeLeft: '30s' },
    ];
    return (_jsxs(Box, { children: [_jsx(Typography, { variant: "h6", gutterBottom: true, children: "Action Queue" }), _jsx(Paper, { elevation: 1, children: _jsx(List, { children: queueItems.map(function (item) { return (_jsx(ListItem, { divider: true, children: _jsx(ListItemText, { primary: item.action, secondary: "Time remaining: ".concat(item.timeLeft) }) }, item.id)); }) }) })] }));
};
export default ActionQueue;
