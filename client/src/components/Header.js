import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography, List, ListItem, Button, Link } from "@mui/material";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import { NavLink } from "react-router-dom";

const Header = ({ user, handleLogout }) => {
  const [value, setValue] = useState("1");
  return (
    <div>
      <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
        <Toolbar>
          <NavLink to="/" style={{ color: "white" }}>
            <Typography>
              <LibraryBooksOutlinedIcon />
            </Typography>
          </NavLink>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/add" label="Add product" value= "1" />
            <Tab LinkComponent={NavLink} to="/books" label="Books" value="2"/>
            <Tab LinkComponent={NavLink} to="/about" label="My Profile" value="3"/>
            <Tab LinkComponent={NavLink} to="/Login" label="Login" value="4"/>
            <Tab LinkComponent={NavLink} to="/Register" label="Register" value="5" />
          </Tabs>
        
          {user ? (
            <List sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
              <ListItem sx={{ padding: 0 }}>
                <Typography variant="body1" sx={{ marginRight: 3, color: 'white' }}>
                  Welcome, {user.username}
                </Typography>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Button 
                  variant="outlined" 
                  color="secondary" 
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </ListItem>
            </List>
          ) : null}          
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;