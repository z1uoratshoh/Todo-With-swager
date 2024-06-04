import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
import { Field, Formik, Form } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  Name: Yup.string()
    .min(5, "Too Short!")
    .max(12, "Too Long!")
    .required("Required Name"),
  Description: Yup.string()
    .min(10, "Too Short!")
    .max(20, "Too Long!")
    .required("Required Description"),
});

const GetbyId = () => {
  const Api = "http://65.108.148.136:8080/ToDo";
  const ImageApi = "http://65.108.148.136:8080/images";
 const [deleteid , setDelId] = useState(null)
 const [addid , setAddId] = useState(null)
 const [images, setImages] = useState(null)

  const [open, setOpen] = useState(false);

  
  const [open2, setOpen2] =  useState(false);
   

  const handleClickOpen2 = (id) => {
    setOpen2(true);
    setDelId(id)
  };
  
  const [open3, setOpen3] =  useState(false);

  const handleClickOpen3 = (id) => {
    setOpen3(true);
    setAddId(id)
  };

  const DeleteImg = async () => {
    try {
      const {data} = await axios.delete(`${Api}/delete-to-do-image?imageId=${deleteid}`)
      console.log(data)
      getbyId(id)
      
    } catch (error) {
      console.error(error);
    }

  }


  const AddImg = async () => {
    const Formdata = new FormData();
    Formdata.append("Images", images);
    Formdata.append("ToDoId", addid)
    try {
      const {data} = await axios.post(`${Api}/add-to-do-images`, Formdata)
      console.log(data)
      getbyId(id)
      handleClose3()
      
    } catch (error) {
      console.error(error);
    }
  
  } 


  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleClose3 = () => {
    setOpen3(false);

  };


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [data, setData] = useState([]);
  const { id } = useParams();

  async function getbyId(id) {
    try {
      const response = await axios.get(`${Api}/get-to-do-by-id?id=${id}`);
      setData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  const deleteUser = async (idx) => {
    try {
      await axios.delete(`${Api}/delete-to-do?id=${idx}`);
      window.location.href = "/Contact"; 
    } catch (error) {
      console.error(error);
    }
  };

  const editUser = async (values) => {
    try {
      await axios.put(`${Api}/update-to-do`, { id, ...values });
      getbyId(id);
      handleClose();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getbyId(id);
  }, [id]);

  if (!data) {
    return <p className="text-red-500">No data available</p>;
  }

  return (
    <div className="w-[80%] m-auto  mx-auto p-4 dark:bg-[#07071a] dark:text-[white]">
      <div className="grid grid-cols-2 gap-4">
        {data.images?.map((item, i) => (
          <img
          onClick={() => handleClickOpen2(item.id)}
            src={`${ImageApi}/${item.imageName}`}
            key={i}
            alt={`Image ${i}`}
            className="w-full h-auto m-auto object-cover rounded-[20px]"
          />
        ))}
         <Dialog
        open={open2}
        onClose={handleClose2}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose2}>Disagree</Button>
          <Button onClick={() => DeleteImg()} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      <button onClick={() => handleClickOpen3(id)} >AddImage</button>
         <Dialog
        open={open3}
        onClose={handleClose3}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
             <input type="file" onChange={(e) => setImages(e.target.files[0])} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose3}>Disagree</Button>
          <Button onClick={() => AddImg()} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      </div>
      <div className="mt-4">
        <p className="text-xl font-bold">{data.name}</p>
        <p className="text-gray-700">{data.description}</p>
        <div className="flex space-x-4 mt-4">
          <Link to="/Contact">
            <button
              onClick={() => deleteUser(id)}
              className="bg-[#fd6a6a] text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </Link>
          <button
            onClick={handleClickOpen}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Edit
          </button>
        </div>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit To-Do</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please update the necessary fields.
          </DialogContentText>
          <Formik
            initialValues={{
              Name: data.name || "",
              Description: data.description || "",
            }}
            validationSchema={SignupSchema}
            onSubmit={editUser}
          >
            {({ errors, touched }) => (
              <Form className="grid gap-4">
                <div>
                  <label htmlFor="Name">Name</label>
                  <Field
                    name="Name"
                    id="Name"
                    placeholder="Name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  {errors.Name && touched.Name ? (
                    <div className="text-red-600">{errors.Name}</div>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="Description">Description</label>
                  <Field
                    name="Description"
                    id="Description"
                    placeholder="Description"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  {errors.Description && touched.Description ? (
                    <div className="text-red-600">{errors.Description}</div>
                  ) : null}
                </div>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Cancel
                  </Button>
                  <Button type="submit" color="primary">
                    Save
                  </Button>
                </DialogActions>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GetbyId;
