import React from 'react';
import { Box, Typography, InputBase } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import StatCard from './StatCard';

const NoCustomersFound = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
        border: '1px dashed #ccc',
        borderRadius: 2,
        p: 3,
        mt: 3,
      }}
    >
      <PersonOffIcon sx={{ fontSize: 60, color: '#888', mb: 2 }} />
      <Typography variant="h6" color="textSecondary">
        No customers found
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Try adjusting your search or filters
      </Typography>
    </Box>
  );
};

const Customers = () => {
  return (
    <Box className="customers-dashboard" sx={{ width: '100vw', p: 3 }}>

      {/* Section 1 - Overview */}
      <Box className="section1-overview" sx={{ mb: 3 }}>
        <Typography variant="h4">Customers Overview</Typography>
        <Typography variant="h6">Key metrics for your customers</Typography>
      </Box>

      {/* Section 2 - Stat Cards */}
      <Box
        className="section2-stat-cards"
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 3,
          mb: 3,
        }}
      >
        <StatCard
          title="Total Customers"
          value="1,210"
          change="0"
          changeIcon={<TrendingDownIcon style={{ fontSize: 16, color: 'gray' }} />}
          icon={<PeopleIcon style={{ fontSize: 40, color: '#1976d2' }} />}
          bgColor="#e1f5fe"
          changeColor="gray"
        />
        <StatCard
          title="Active"
          value="1,050"
          change="-3"
          changeIcon={<TrendingDownIcon style={{ fontSize: 16, color: 'green' }} />}
          icon={<PeopleIcon style={{ fontSize: 40, color: 'green' }} />}
          bgColor="#e8f5e9"
          changeColor="green"
        />
        <StatCard
          title="Inactive"
          value="160"
          change="-2"
          changeIcon={<TrendingDownIcon style={{ fontSize: 16, color: 'red' }} />}
          icon={<PeopleIcon style={{ fontSize: 40, color: 'red' }} />}
          bgColor="#ffebee"
          changeColor="red"
        />
        <StatCard
          title="This Month"
          value="250"
          change="+2"
          changeIcon={<TrendingUpIcon style={{ fontSize: 16, color: 'blue' }} />}
          icon={<TrendingUpIcon style={{ fontSize: 40, color: 'blue' }} />}
          bgColor="#e3f2fd"
          changeColor="blue"
        />
      </Box>

      {/* Section 3 - Reports with Search */}
      <Box
        className="section3-reports"
        sx={{
          width: '100%',
          p: 1.5,
          border: '1px solid #ccc',
          borderRadius: 2,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          mb: 3,
          height: 40,
        }}
      >
        <SearchIcon sx={{ color: '#888' }} />
        <InputBase
          placeholder="Search customers"
          sx={{ flex: 1, height: '100%' }}
          inputProps={{ 'aria-label': 'search customers' }}
        />
      </Box>

      {/* Section 4 - No Customers Found */}
      <NoCustomersFound />

      {/* Section 5 - Additional Info with CUSTOMER, CONTACT, LOCATION, STATUS */}
      <Box
        className="section5-additional"
        sx={{
          mt: 3,
          p: 1,
          border: '1px solid #ccc',
          borderRadius: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#f9f9f9',
          width: '100%',
          height: 40,
        }}
      >
        <Typography variant="subtitle2">CUSTOMER</Typography>
        <Typography variant="subtitle2">CONTACT</Typography>
        <Typography variant="subtitle2">LOCATION</Typography>
        <Typography variant="subtitle2">STATUS</Typography>
      </Box>

    </Box>
  );
};

export default Customers;
