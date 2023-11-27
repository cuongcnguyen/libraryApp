import * as React from "react";
import { Button, TableHead, TextField } from "@mui/material";
import { FC, ChangeEvent, FormEvent, useEffect } from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Modal from "@mui/material/Modal";

interface ListUser {
    id: string;
    username: string;
    email: string;
    password: string;
    role: string;
  }

const UserManagement:React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [role, setRole] = useState<string>("2");
    const [idEdit, setIdEdit] = useState<string>("");
    const [emailEdit, setEmailEdit] = useState<string>("");
    const [usernameEdit, setUsernameEdit] = useState<string>("");
    const [passwordEdit, setPasswordEdit] = useState<string>("");

    const [user, setUser] = useState<ListUser[]>([]);
    const [openDialog, setOpenDialog] = React.useState(false);
    const [openModal, setOpenModal] = React.useState(false);

    const [isUserUpdated, setIsUserUpdated] = useState(true);
  
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get<ListUser[]>(
              "http://localhost:8000/users/?role=" + 2
            );
            setUser(response.data);
            setIsUserUpdated(false);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        if (isUserUpdated) {
          fetchData();
        }
    }, [isUserUpdated]);
    
    const checkValidate = (): boolean => {
        return !(!email || !username || !password);
        };

        const checkEmail = async (): Promise<boolean> => {
        let isCheck = false;
        await axios
            .get("http://localhost:8000/users", {
            params: {
                email: email,
            },
            })
            .then((res) => {
            const resp = res.data;
            if (resp[0]) {
                isCheck = true;
            }
            })
            .catch((error) => {
            console.error(error);
            });
        return isCheck;
        };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const isValue = checkValidate();
    
        if (!isValue) {
            alert("Please enter complete information");
            return;
        }
    
        const isCheckEmail = await checkEmail();
        if (isCheckEmail) {
            alert("Email already exists");
            return;
        }
    
        try {
            const config = {
            headers: {
                "Content-type": "application/json",
            },
            };
            await axios.post(
            "http://localhost:8000/users",
            {
                username: username,
                email: email,
                password: password,
                role: role,
            },
            config
            );
            setIsUserUpdated(true);
            setUsername("");
            setEmail("");
            setPassword("");
            alert("Registration Successful");
        } catch (error) {
            console.error(error);
        }
        console.log(
            `Email: ${email}, Username: ${username}, Password: ${password}`
        );
    };
    const handleSaveEdit = async (event: FormEvent) => {
        event.preventDefault();
        const isValue = checkValidate();
    
        if (!usernameEdit || !emailEdit || !passwordEdit) {
            alert("Please enter complete information");
            return;
        }
        try {    
            await axios
            .put(
                "http://localhost:8000/users/" + idEdit,
                {
                username: usernameEdit,
                email: emailEdit,
                password: passwordEdit,
                role: role,
                },
                {
                headers: {
                    "Content-Type": "application/json",
                },
                }
            )
            .then((response) => {
                setIsUserUpdated(true);
                console.log("Edit Successful");
            })
            .catch((error) => {
                console.error("Error:", error.message);
            });
    
            handleCloseModal();
        } catch (error) {
            console.error(error);
        }
    };

    /// Dialo
    const handleChange =
    (setState: React.Dispatch<React.SetStateAction<string>>) =>
    (event: ChangeEvent<HTMLInputElement>) => {
        setState(event.target.value);
    };

    const handleClickOpenDialog = (id: string): void => {
        setOpenDialog(true);
        setIdEdit(id);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };
    const handleDeleteUser = () => {
        axios
            .delete("http://localhost:8000/users/" + idEdit)
            .then((response) => {
                setIsUserUpdated(true);
                alert("User deleted successfully");
            })
            .catch((error) => {
                console.error("Error:", error.message);
            });
        setOpenDialog(false);
    };

    /// Modal
    const handleCloseModal = () => {
        setOpenModal(false);
    };
    const handleOpenModal = (userEdit: ListUser): void => {
        setOpenModal(true);
        console.log("Check Edit", userEdit.id);
        setIdEdit(userEdit.id);
        setUsernameEdit(userEdit.username);
        setEmailEdit(userEdit.email);
        setPasswordEdit(userEdit.password);
    };
  
    return (
        <div>
        <form
            onSubmit={handleSubmit}
            style={{ display: "inline-flex", gridGap: "10px" }}
        >
            <TextField
            label="Email"
            variant="outlined"
            value={email}
            onChange={handleChange(setEmail)}
            />
            <TextField
            label="Username"
            variant="outlined"
            value={username}
            onChange={handleChange(setUsername)}
            />
            <TextField
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={handleChange(setPassword)}
            />
            <Button variant="contained" color="primary" type="submit">
            Add User
            </Button>
        </form>

        <div style={{ height: 400, width: "60%", margin: "30px auto" }}>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                <TableHead>
                <TableRow>
                    <TableCell>Username</TableCell>
                    <TableCell align="left">Email</TableCell>
                    <TableCell align="center">Actions</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {/* {(rowsPerPage > 0
                    ? user.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                    )
                    : user */}
                {user.map((row) => (
                    <TableRow key={row.username}>
                    <TableCell style={{ width: 160 }}>{row.username}</TableCell>
                    <TableCell style={{ width: 160 }} align="left">
                        {row.email}
                    </TableCell>
                    <TableCell style={{ width: 160 }} align="center">
                        <Button
                        onClick={() => handleOpenModal(row)}
                        endIcon={<EditIcon />}
                        variant="contained"
                        >
                        Edit
                        </Button>

                        <Button
                        style={{ marginLeft: "8px" }}
                        onClick={() => handleClickOpenDialog(row.id)}
                        endIcon={<DeleteForeverIcon />}
                        color="error"
                        variant="outlined"
                        >
                        Delete
                        </Button>
                    </TableCell>
                    </TableRow>
                ))}
                {/* {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                    </TableRow>
                )} */}
                </TableBody>                
            </Table>
            </TableContainer>
        </div>
        <Dialog
            open={openDialog}
            onClose={handleCloseDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"Confirm Delete"}</DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                Are you sure?
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
                No
            </Button>
            <Button onClick={handleDeleteUser} color="primary" autoFocus>
                Yes
            </Button>
            </DialogActions>
        </Dialog>

        <Modal
            open={openModal}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box
            sx={{
                position: "absolute" as "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 400,
                bgcolor: "background.paper",
                border: "2px solid #000",
                boxShadow: 24,
                p: 4,
            }}
            >
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Edit User
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <form
                onSubmit={handleSaveEdit}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gridGap: "10px",
                }}
                >
                <TextField
                    label="Email"
                    variant="outlined"
                    value={emailEdit}
                    onChange={handleChange(setEmailEdit)}
                />
                <TextField
                    label="Username"
                    variant="outlined"
                    value={usernameEdit}
                    onChange={handleChange(setUsernameEdit)}
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    value={passwordEdit}
                    onChange={handleChange(setPasswordEdit)}
                />
                <Button variant="contained" color="primary" type="submit">
                    Save
                </Button>
                </form>
            </Typography>
            </Box>
        </Modal>
    </div>
  )
}

export default UserManagement;
