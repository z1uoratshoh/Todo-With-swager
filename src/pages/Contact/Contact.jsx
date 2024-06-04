import axios from "axios";
import { Field, Formik, Form } from "formik";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FileBase64 from 'react-filebase64';
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

const Contact = () => {
  const Api = "http://65.108.148.136:8080/ToDo";
  const ImageApi = "http://65.108.148.136:8080/images";

  const [data, setData] = useState([]);
  const [img, setImage] = useState(null);
  const [base64, setBase64] = useState(null);

  const Gettodo = async () => {
    try {
      const response = await axios.get(`${Api}/get-to-dos`);
      setData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeImg = (event) => {
    setImage(event.file);
    setBase64(event.base64);
  };

  const addTodo = async (values, { resetForm }) => {
    let formData = new FormData();
    for (let name in values) {
      formData.append(name, values[name]);
    }
    formData.append("Images", img);
    try {
      await axios.post(`${Api}/add-to-do`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      Gettodo();
      resetForm();
      setImage(null);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    Gettodo();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <Formik
        initialValues={{
          Name: "",
          Description: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={addTodo}
      >
        {({ errors, touched }) => (
          <Form className="grid gap-4 p-4 border border-green-300 rounded-lg shadow-md">
            <div>
              <label htmlFor="Name" className="block font-semibold">Name</label>
              <Field
                name="Name"
                id="Name"
                placeholder="name"
                className="mt-1 p-2 border rounded w-full"
              />
              {errors.Name && touched.Name ? (
                <div className="text-red-500 text-sm">{errors.Name}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="Description" className="block font-semibold">Description</label>
              <Field
                name="Description"
                id="Description"
                placeholder="desc"
                className="mt-1 p-2 border rounded w-full"
              />
              {errors.Description && touched.Description ? (
                <div className="text-red-500 text-sm">{errors.Description}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="Image" className="block font-semibold">Image</label>
              <FileBase64 onDone={handleChangeImg} className="mt-1" />
            </div>
            <button
              className="border bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
              type="submit"
            >
              Add
            </button>
          </Form>
        )}
      </Formik>
      <div className="grid grid-cols-4 gap-6 md:grid-cols-2">
        {data.map((e) => (
          <Link
            to={`/Contact/data/${e.id}`}
            className="p-6 border rounded-lg shadow-2xl bg-white"
            key={e.id}
          >
            <h1 className="text-xl font-bold mb-2">{e.name}</h1>
            <p className="text-gray-700 mb-4">{e.description}</p>
            <div className="grid grid-cols-2 gap-4">
              {e.images.map((el) => (
                <img
                  key={el.id}
                  src={`${ImageApi}/${el.imageName}`}
                  alt={`Image ${el.id}`}
                  className="w-full h-auto object-cover rounded"
                />
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Contact;
