import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { Box } from '@mui/material';
var PlayerActions = function () {
    var _a = React.useState(0), currentTab = _a[0], setCurrentTab = _a[1];
    var handleTabChange = function (event, newValue) {
        setCurrentTab(newValue);
    };
    return (_jsx(Box, {}));
};
export default PlayerActions;
