import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LineChartIcon from '@mui/icons-material/ShowChart';
import { LineChart } from '@mui/x-charts/LineChart';

// Reusable Stat Card
const StatCard = ({ title, value, icon, bgColor }) => (
  <Card
    sx={{
      minWidth: 200,
      p: 2,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: 150,
      backgroundColor: bgColor
    }}
  >
    <CardContent sx={{ paddingBottom: 0 }}>
      <Typography variant="subtitle1" color="textSecondary">
        {title}
      </Typography>
      <Typography variant="h4" sx={{ mt: 1 }}>
        {value}
      </Typography>
    </CardContent>
    {/* Increase negative margin to lift icon */}
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: -10 }}>
      {icon}
    </Box>
  </Card>
);

const Dashboard = () => {
  const renderChart = (data, height = 250) => (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[{ data: data, area: true }]}
      height={height}
      style={{ background: '#fff', padding: '10px', borderRadius: '8px', marginBottom: '10px' }}
    />
  );

  return (
    <div className="dashboard" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      
      {/* Section 1 - Overview */}
      <div className="dashboard-section-1" style={{ width: '100%', marginBottom: '20px', padding: '20px', background: '#f5f5f5', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <div className="section1-child1">
          <h3 style={{ color: '#000000', margin: 0 }}>Dashboard Overview</h3>
        </div>
        <div className="section1-child2">
          <h4 style={{ margin: '5px 0 0 0' }}>Welcome to your admin dashboard</h4>
        </div>
      </div>

      {/* Section 2 - Bigger Charts */}
      <div className="dashboard-section-2" style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <div className="section2-child1" style={{ flex: 1 }}>
          {renderChart([2, 5.5, 2, 8.5, 1.5, 5], 300)}
        </div>
        <div className="section2-child2" style={{ flex: 1 }}>
          {renderChart([3, 4, 6, 3, 7, 4], 300)}
        </div>
        <div className="section2-child3" style={{ flex: 1 }}>
          {renderChart([1, 3, 5, 7, 2, 6], 300)}
        </div>
      </div>

      {/* Section 3 - Stat Cards with icons higher */}
      <div className="dashboard-section-3" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <div className="section3-child1" style={{ flex: 1 }}>
          <StatCard
            title="Total Customers"
            value="1,210"
            icon={<PeopleIcon sx={{ fontSize: 40, color: '#1976d2' }} />}
            bgColor="#e1f5fe" // light blue
          />
        </div>
        <div className="section3-child2" style={{ flex: 1 }}>
          <StatCard
            title="Total Orders"
            value="980"
            icon={<ShoppingCartIcon sx={{ fontSize: 40, color: '#f57c00' }} />}
            bgColor="#fff3e0" // light orange
          />
        </div>
        <div className="section3-child3" style={{ flex: 1 }}>
          <StatCard
            title="Revenue"
            value="$12,400"
            icon={<AttachMoneyIcon sx={{ fontSize: 40, color: '#388e3c' }} />}
            bgColor="#e8f5e9" // light green
          />
        </div>
        <div className="section3-child4" style={{ flex: 1 }}>
          <StatCard
            title="Growth"
            value="15%"
            icon={<LineChartIcon sx={{ fontSize: 40, color: '#d32f2f' }} />}
            bgColor="#ffebee" // light red
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
