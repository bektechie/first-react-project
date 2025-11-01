import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const StatCard = ({ title, value, change, changeIcon, icon, bgColor, changeColor }) => {
  return (
    <Card
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        backgroundColor: bgColor,
        borderRadius: 2,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      }}
    >
      <CardContent sx={{ paddingBottom: 0 }}>
        <Typography variant="subtitle1" color="textSecondary">
          {title}
        </Typography>
        <Typography variant="h4" sx={{ mt: 1 }}>
          {value}
        </Typography>
        {change !== undefined && (
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
            {changeIcon && <Box sx={{ mr: 0.5 }}>{changeIcon}</Box>}
            <Typography variant="body2" sx={{ color: changeColor }}>
              {change}
            </Typography>
          </Box>
        )}
      </CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: -3 }}>
        {icon}
      </Box>
    </Card>
  );
};

export default StatCard;
