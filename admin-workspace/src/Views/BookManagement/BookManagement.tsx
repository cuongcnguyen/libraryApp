import * as React from "react";
import { Button, Grid, TableHead, TextField } from "@mui/material";
import { FC, ChangeEvent, FormEvent, useEffect, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
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
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

interface ListBook {
  id: string;
  image: string;
  star: string;
  title: string;
  author: string;
  rent_times: string;
  price: string;
  genre: string;
  position: string;
  in_stock: string;
}
type AlertType = "error" | "warning" | "info" | "success";

const BookManagement: React.FC = () => {
  const [book, setBook] = React.useState({
    image: "",
    star: "",
    title: "",
    author: "",
    rent_times: "",
    price: "",
    genre: "",
    position: "",
    in_stock: "",
  });
  const [bookEdit, setBookEdit] = React.useState({
    id: "",
    image: "",
    star: "",
    title: "",
    author: "",
    rent_times: "",
    price: "",
    genre: "",
    position: "",
    in_stock: "",
  });

  const [openDialog, setOpenDialog] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);

  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const [books, setBooks] = React.useState<ListBook[]>([]);
  const [isBookUpdated, setIsBookUpdated] = React.useState(false);

  const [alert, setAlert] = useState<{
    type: AlertType;
    content: string;
  } | null>(null);

  const [page, setPage] = React.useState(0);
  //const [rowsPerPage, setRowsPerPage] = React.useState();

  useEffect(() => {
    try {
      axios
        .get("http://localhost:8000/books")
        .then((response) => {
          setBooks(response.data);
          setIsBookUpdated(false);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    if (isBookUpdated) {
    }
  }, [isBookUpdated]);

  function BasicAlerts({
    type,
    content,
  }: {
    type: AlertType;
    content: string;
  }) {
    return (
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity={type}>{content}</Alert>
      </Stack>
    );
  }

  // const emptyRows =
  //   page > 0 ? Math.max(0, (1 + page) * rowsPerPage - books.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };
  

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };
  const handleChangeEdit = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBookEdit({ ...bookEdit, [event.target.name]: event.target.value });
  };

  const checkValidate = (id: string): boolean => {
    let isValue = true;
    let arrCheck = [
      "image",
      "star",
      "title",
      "author",
      "rent_times",
      "price",
      "genre",
      "position",
      "in_stock",
    ];
    if (id === "create") {
      for (let i = 0; i < arrCheck.length; i++) {
        if (!book[arrCheck[i] as keyof typeof book]) {
          isValue = false;
          setAlert({
            type: "warning",
            content: "this input is require: " + arrCheck[i],
          });
          // alert("this input is require: " + arrCheck[i]);
          break;
        }
      }
    } else {
      for (let i = 0; i < arrCheck.length; i++) {
        if (!bookEdit[arrCheck[i] as keyof typeof book]) {
          isValue = false;
          setAlert({
            type: "warning",
            content: "this input is require: " + arrCheck[i],
          });
          break;
        }
      }
    }

    return isValue;
  };

  const checkBook = async (): Promise<boolean> => {
    let isCheck = false;
    await axios
      .get("http://localhost:8000/books", {
        params: {
          title: book.title,
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

  const handleCreatBook = async (event: FormEvent) => {
    event.preventDefault();
    const isValue = checkValidate("create");

    if (!isValue) {
      return;
    }

    const isCheckBook = await checkBook();
    if (isCheckBook) {
      setAlert({ type: "warning", content: "Name book is already exist" });
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      await axios.post(
        "http://localhost:8000/books",
        JSON.stringify(book),
        config
      );
      setIsBookUpdated(true);
      setBook({
        image: "",
        star: "",
        title: "",
        author: "",
        rent_times: "",
        price: "",
        genre: "",
        position: "",
        in_stock: "",
      });
      setAlert({ type: "success", content: "Registration Successful" });
    } catch (error) {
      console.error(error);
    }
  };
  const handleSaveEdit = async (event: FormEvent) => {
    event.preventDefault();
    const isValue = checkValidate("edit");

    if (!isValue) {
      return;
    }
    try {
      await axios
        .put("http://localhost:8000/books/" + bookEdit.id, bookEdit, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          setIsBookUpdated(true);
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
  const handleClickOpenDialog = (row: ListBook): void => {
    setOpenDialog(true);
    setBookEdit(row);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleDeleteBook = () => {
    axios
      .delete("http://localhost:8000/books/" + bookEdit.id)
      .then((response) => {
        setIsBookUpdated(true);
        console.log("User deleted successfully");
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
  const handleOpenModal = (bookRow: ListBook): void => {
    setBookEdit(bookRow);
    setOpenModal(true);
  };
  //open image

  const openImageViewer = useCallback((index: string) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage("");
    setIsViewerOpen(false);
  };
  return (
    <>
      {alert && <BasicAlerts type={alert.type} content={alert.content} />}
      <Box
        sx={{
          maxWidth: "100%",
        }}
      >
        <form onSubmit={handleCreatBook} noValidate autoComplete="off">
          <Grid container style={{ display: "flex" }} spacing={3}>
            <Grid
              item
              xs={12}
              sm={4}
              style={{ display: "inline-grid", gridGap: "10px" }}
            >
              <TextField
                name="title"
                label="Title"
                value={book.title}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                name="author"
                label="Author"
                value={book.author}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                name="star"
                label="Star"
                value={book.star}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              style={{ display: "inline-grid", gridGap: "10px" }}
            >
              <TextField
                name="rent_times"
                label="Rent Times"
                value={book.rent_times}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                name="price"
                label="Price"
                value={book.price}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                name="genre"
                label="Genre"
                value={book.genre}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              style={{ display: "inline-grid", gridGap: "10px" }}
            >
              <TextField
                name="position"
                label="Position"
                value={book.position}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                name="in_stock"
                label="In Stock"
                value={book.in_stock}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                name="image"
                label="Image"
                value={book.image}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            size="medium"
            variant="contained"
            style={{ width: "40%", margin: "10px" }}
          >
            Submit
          </Button>
        </form>
      </Box>
      <div style={{ height: 400, width: "100%", margin: "30px auto" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell align="left">Author</TableCell>
                
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Position</TableCell>
                <TableCell align="left">In Stock</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {books
              .map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.title}</TableCell>
                  <TableCell align="left">{row.author}</TableCell>
                  
                  <TableCell align="left">{row.price}</TableCell>
                  <TableCell align="left">{row.position}</TableCell>
                  <TableCell align="left">{row.in_stock}</TableCell>
                  <TableCell align="center">
                    <Button
                      onClick={() => handleOpenModal(row)}
                      endIcon={<EditIcon />}
                      variant="contained"
                    >
                      Edit
                    </Button>

                    <Button
                      style={{ marginLeft: "8px" }}
                      onClick={() => handleClickOpenDialog(row)}
                      endIcon={<DeleteForeverIcon />}
                      color="error"
                      variant="outlined"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {(
                <TableRow style={{ height: 53 }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
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
          <Button onClick={handleDeleteBook} color="primary" autoFocus>
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
            width: 1000,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Book
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form
              onSubmit={handleSaveEdit}
              noValidate
              autoComplete="off"
              style={{ textAlign: "center" }}
            >
              <Grid container style={{ display: "flex" }} spacing={3}>
                <Grid
                  item
                  xs={12}
                  sm={4}
                  style={{ display: "inline-grid", gridGap: "10px" }}
                >
                  <TextField
                    name="title"
                    label="Title"
                    value={bookEdit.title}
                    onChange={handleChangeEdit}
                    fullWidth
                  />
                  <TextField
                    name="author"
                    label="Author"
                    value={bookEdit.author}
                    onChange={handleChangeEdit}
                    fullWidth
                  />
                  <TextField
                    name="star"
                    label="Star"
                    value={bookEdit.star}
                    onChange={handleChangeEdit}
                    fullWidth
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={4}
                  style={{ display: "inline-grid", gridGap: "10px" }}
                >
                  <TextField
                    name="rent_times"
                    label="Rent Times"
                    value={bookEdit.rent_times}
                    onChange={handleChangeEdit}
                    fullWidth
                  />
                  <TextField
                    name="price"
                    label="Price"
                    value={bookEdit.price}
                    onChange={handleChangeEdit}
                    fullWidth
                  />
                  <TextField
                    name="genre"
                    label="Genre"
                    value={bookEdit.genre}
                    onChange={handleChangeEdit}
                    fullWidth
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={4}
                  style={{ display: "inline-grid", gridGap: "10px" }}
                >
                  <TextField
                    name="position"
                    label="Position"
                    value={bookEdit.position}
                    onChange={handleChangeEdit}
                    fullWidth
                  />
                  <TextField
                    name="in_stock"
                    label="In Stock"
                    value={bookEdit.in_stock}
                    onChange={handleChangeEdit}
                    fullWidth
                  />
                  <TextField
                    name="image"
                    label="Image"
                    value={bookEdit.image}
                    onChange={handleChangeEdit}
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                size="medium"
                variant="contained"
                style={{ width: "40%", margin: "10px auto" }}
              >
                Save
              </Button>
            </form>
          </Typography>
        </Box>
      </Modal>
      {isViewerOpen && (
        <ImageViewer
          src={[currentImage]}
          onClose={closeImageViewer}
          disableScroll={false}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)",
          }}
          closeOnClickOutside={true}
        />
      )}
    </>
  );
};
export default BookManagement;
