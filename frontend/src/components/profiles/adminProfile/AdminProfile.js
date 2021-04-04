import React, { useState } from "react";
import Item from "./Item";
import { Box, Button, TextField, Grid } from "@material-ui/core";
import ManageAccess from "./ManageAccess";
import classes from "@material-ui/icons/Class";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#148FD3",
    color: "#fff",
    display: "flex",
    width: "80%",
  },
  form: {
    display: "inline",
  },
  heading: {
    backgroundColor: "#148FD3",
    color: "#fff",
    textAlign: "center",
  },
  heading1: {
    margin: theme.spacing(5),
    marginLeft: theme.spacing(1),
  },
  editprofile: {
    backgroundColor: "#148FD3",
    color: "#fff",
    marginLeft: theme.spacing(3),
  },
}));

function AdminProfile() {
  const classes = useStyles();
  const data = {
    items: [
      {
        itemId: "id1",
        itemName: "a",
        requestingDate: "dd-mm-yy",
        dueDate: "dd-mm-yy",
        contact: "1234556788",
        requestaName: "qwe",
        emailID: "a@iitj.ac.in",
      },
      {
        itemId: "id2",
        itemName: "abc",
        requestingDate: "dd-mm-yy",
        dueDate: "dd-mm-yy",
        contact: "1234556788",
        requestaName: "qwe",
        emailID: "a@iitj.ac.in",
      },
      {
        itemId: "id3",
        itemName: "abc",
        requestingDate: "dd-mm-yy",
        dueDate: "dd-mm-yy",
        contact: "1234556788",
        requestaName: "qwe",
        emailID: "a@iitj.ac.in",
      },
    ],
    manage: [
      {
        name: "abc",
        email: "anc@iitj.ac.in",
        role: "assigner",
      },
      {
        name: "ac",
        email: "anc@iitj.ac.in",
        role: "assigner",
      },
      {
        name: "ab",
        email: "anc@iitj.ac.in",
        role: "assigner",
      },
      {
        name: "abc",
        email: "anc@iitj.ac.in",
        role: "assigner",
      },
    ],
  };
  const [toggleManageAccess, setToggleManageAccess] = useState(false);
  return (
    <div className="admin_profile">
      <Grid item container xs={12}>
        <Grid className="adminHeader" item lg={2} sm={12}>
          <div className="edit_button">
            <img
              src="https://library.elementor.com/wp-content/uploads/2017/06/3-4.png"
              alt="Images"
            />

            <div className="adminbody">
              <h2 style={{ margin: "3px", textAlign: "center" }}>
                Name: Club{" "}
              </h2>
              <p style={{ margin: "3px", textAlign: "center" }}>
                Email: club@iitj.ac.in
              </p>
              <Box className="edit_button">
                <Button variant="contained" className={classes.editprofile}>
                  Edit Profile
                </Button>
              </Box>
            </div>
          </div>
        </Grid>
        <Divider orientation="vertical" flexItem className="divider" />

        <Grid className="adminBody" item lg={9} sm={12}>
          <Box className="buttonAdmin">
            <Grid item container xs={12}>
              <Grid item lg={3} sm={12}>
                <Button
                  onClick={() => setToggleManageAccess(!toggleManageAccess)}
                  variant="contained"
                  className={classes.root}
                >
                  Manage Access
                </Button>
              </Grid>
              <Grid item lg={3} sm={12}>
                <Button variant="contained" className={classes.root}>
                  Add New Item
                </Button>
              </Grid>
              <Grid item lg={3} sm={12}>
                <Button variant="contained" className={classes.root}>
                  View/Edit Inventory
                </Button>
              </Grid>
              <Grid item lg={3} sm={12}>
                <Button variant="contained" className={classes.root}>
                  Invite
                </Button>
              </Grid>
            </Grid>
          </Box>
          {toggleManageAccess ? (
            <Box>
              <form className={classes.form} noValidate autoComplete="on">
                <TextField
                  id="standard-basic"
                  label="Name"
                  style={{ marginLeft: "8px" }}
                />
                <TextField
                  id="filled-basic"
                  label="Email"
                  style={{ marginLeft: "8px" }}
                />
                <TextField
                  id="outlined-basic"
                  label="Role"
                  style={{ marginLeft: "8px" }}
                />
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#148FD3",
                    color: "white",
                    margin: "8px",
                  }}
                >
                  Add
                </Button>
              </form>
              {data.manage.map((card, index) => {
                return (
                  <ManageAccess
                    key={index}
                    name={card.name}
                    email={card.email}
                    role={card.role}
                  />
                );
              })}
            </Box>
          ) : null}

          <Box className="adminBody">
            <div className={classes.heading1}>
              <div className="heading">
                <span className={classes.heading}>Pending Requests</span>
              </div>
            </div>
            {data.items.map((card) => {
              return (
                <Item
                  key={card.itemId}
                  itemId={card.itemId}
                  itemName={card.itemName}
                  requestingDate={card.requestingDate}
                  dueDate={card.dueDate}
                  emailID={card.emailID}
                  requestaName={card.requestaName}
                  contact={card.contact}
                />
              );
            })}
            <Box>
              <div>
                <Grid item container>
                  <div className={classes.heading1}>
                    <div className="heading">
                      <span className={classes.heading}>
                        Active Transaction
                      </span>
                    </div>
                  </div>
                  <div className={classes.heading1}>
                    <div className="heading">
                      <span className={classes.heading}>Extension Request</span>
                    </div>
                  </div>
                </Grid>
              </div>
            </Box>
            {data.items.map((card) => {
              return (
                <Item
                  key={card.itemId}
                  itemId={card.itemId}
                  itemName={card.itemName}
                  requestingDate={card.requestingDate}
                  dueDate={card.dueDate}
                  emailID={card.emailID}
                  requestaName={card.requestaName}
                  contact={card.contact}
                />
              );
            })}

            <div className={classes.heading1}>
              <div className="heading">
                <span className={classes.heading}>Transaction History</span>
              </div>
            </div>
            <Box>
              {data.items.map((card) => {
                return (
                  <Item
                    key={card.itemId}
                    itemId={card.itemId}
                    itemName={card.itemName}
                    requestingDate={card.requestingDate}
                    dueDate={card.dueDate}
                    emailID={card.emailID}
                    requestaName={card.requestaName}
                    contact={card.contact}
                  />
                );
              })}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default AdminProfile;
