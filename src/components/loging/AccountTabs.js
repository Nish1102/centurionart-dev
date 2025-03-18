import React, { useState } from "react";
import { Container, Tabs, Tab, Box, TextField, Select, MenuItem } from "@mui/material";

const AccountTabs = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  return (
    <Container>
      <h1>My Account</h1>
      <Tabs value={tabIndex} onChange={handleChange} aria-label="account tabs">
        <Tab label="My Information" />
        <Tab label="Payment Settings" />
        <Tab label="Notification Preferences" />
        <Tab label="My Offers" />
        <Tab label="My Orders" />
      </Tabs>

      <TabPanel value={tabIndex} index={0}>
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField label="First Name" variant="outlined" defaultValue="Rama Krishna" />
          <TextField label="Last Name" variant="outlined" defaultValue="Dasari" />
          <TextField label="Email" variant="outlined" defaultValue="ramakrishnad4686@gmail.com" />
          <TextField label="Cell Phone Number" variant="outlined" defaultValue="+91" />
          <Select defaultValue="English">
            <MenuItem value="English">English</MenuItem>
            <MenuItem value="French">French</MenuItem>
          </Select>
          <Select defaultValue="INR">
            <MenuItem value="INR">INR</MenuItem>
            <MenuItem value="USD">USD</MenuItem>
          </Select>
        </Box>
      </TabPanel>

      <TabPanel value={tabIndex} index={1}>
        <p>Payment settings content here...</p>
      </TabPanel>
      <TabPanel value={tabIndex} index={2}>
        <p>Notification preferences content here...</p>
      </TabPanel>
      <TabPanel value={tabIndex} index={3}>
        <p>My offers content here...</p>
      </TabPanel>
      <TabPanel value={tabIndex} index={4}>
        <p>My orders content here...</p>
      </TabPanel>
    </Container>
  );
};

const TabPanel = ({ children, value, index }) => {
  return value === index ? <Box p={3}>{children}</Box> : null;
};

export default AccountTabs;
