import React from 'react';
import { Box, Typography, InputBase } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SearchIcon from '@mui/icons-material/Search';
import CategoryIcon from '@mui/icons-material/Category';

const Products = () => {
  return (
    <Box className="products-dashboard" sx={{ width: '100vw', p: 3 }}>

      {/* Section 1 - Header */}
      <Box className="section1-header" sx={{ mb: 3 }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#333' }}>
          Products
        </Typography>
        <Typography variant="h4" sx={{ color: '#666' }}>
          Manage your product listings
        </Typography>
      </Box>

      {/* Section 2 - Stat Cards (Smaller Box Size) */}
      <Box
        className="section2-stat-cards"
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 3,
          mb: 3,
        }}
      >
        {/* Total Products */}
        <Box
          sx={{
            p: 1,
            border: '1px solid #ccc',
            borderRadius: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 80,
          }}
        >
          <Box>
            <Typography variant="subtitle1">Total Products</Typography>
            <Typography variant="h5" color="textSecondary">3</Typography>
          </Box>
          <PeopleIcon sx={{ fontSize: 30, color: '#1976d2' }} />
        </Box>

        {/* Active Products */}
        <Box
          sx={{
            p: 1,
            border: '1px solid #ccc',
            borderRadius: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 80,
          }}
        >
          <Box>
            <Typography variant="subtitle1">Active</Typography>
            <Typography variant="h5" color="textSecondary">18</Typography>
          </Box>
          <CheckCircleIcon sx={{ fontSize: 30, color: 'green' }} />
        </Box>

        {/* Pending Products */}
        <Box
          sx={{
            p: 1,
            border: '1px solid #ccc',
            borderRadius: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 80,
          }}
        >
          <Box>
            <Typography variant="subtitle1">Pending</Typography>
            <Typography variant="h5" color="textSecondary">5</Typography>
          </Box>
          <PendingActionsIcon sx={{ fontSize: 30, color: 'orange' }} />
        </Box>

        {/* Sold Products */}
        <Box
          sx={{
            p: 1,
            border: '1px solid #ccc',
            borderRadius: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 80,
          }}
        >
          <Box>
            <Typography variant="subtitle1">Sold</Typography>
            <Typography variant="h5" color="textSecondary">100$</Typography>
          </Box>
          <AttachMoneyIcon sx={{ fontSize: 30, color: 'goldenrod' }} />
        </Box>
      </Box>

      {/* Section 3 - Search Products and Category */}
      <Box
        className="section3-search"
        sx={{
          display: 'flex',
          gap: 2,
          mb: 3,
        }}
      >
        {/* Search Product Box */}
        <Box
          sx={{
            flex: 1,
            p: 1.5,
            border: '1px solid #ccc',
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            height: 50,
          }}
        >
          <SearchIcon sx={{ color: '#888', mr: 1 }} />
          <InputBase
            placeholder="Search products"
            sx={{ flex: 1, height: '100%' }}
            inputProps={{ 'aria-label': 'search products' }}
          />
        </Box>

        {/* Category Box */}
        <Box
          sx={{
            width: 200,
            p: 1.5,
            border: '1px solid #ccc',
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
            gap: 1,
          }}
        >
          <CategoryIcon sx={{ color: '#888' }} />
          <Typography variant="body2" color="textSecondary">
            Category
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Products;
