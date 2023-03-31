import { FC } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Box, TextField, Button } from "@mui/material";
const validationSchema = () =>
  Yup.object().shape({
    name: Yup.string()
      .required("Musisz podać Imię")
      .min(4, "Imię musi mieć min. 4 znaki")
      .max(30, "Imię może mieć max. 30 znaków"),
    email: Yup.string()
      .required("Musisz podać email")
      .email("Podaj prawidłowy email"),
    dateCall: Yup.date()
      .min(new Date(), "Nie możesz wybrać daty z przeszłości")
      .required(),
    hourCall: Yup.string().required(),
    description: Yup.string()
      .required("Musisz podać opis")
      .min(4, "Opis musi mieć min. 4 znaki")
      .max(300, "Opis może mieć max. 30 znaków"),
  });
const FormSoftware: FC = () => {
  const initialValues = {
    name: "",
    email: "",
    dateCall: new Date().toISOString().slice(0, 10),
    hourCall: new Date().toISOString().slice(11, 19),
    description: "",
  };
  const submitForm = async (values: any) => {
    console.log(values);
  };
  return (
    <Box display="flex" justifyContent="center" sx={{ mt: 3 }}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitForm}
      >
        {(formik) => {
          const {
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            handleBlur,
          } = formik;
          console.log(values);
          return (
            <form
              onSubmit={handleSubmit}
              noValidate
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                width: "400px",
              }}
            >
              <TextField
                name="name"
                label="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(errors.name && touched.name)}
                helperText={
                  Boolean(errors.name && touched.name) ? `${errors.name}` : ""
                }
              />
              <TextField
                name="email"
                label="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(errors.email && touched.email)}
                helperText={
                  Boolean(errors.email && touched.email)
                    ? `${errors.email}`
                    : ""
                }
              />
              <TextField
                type="date"
                name="dateCall"
                label="date Call"
                value={values.dateCall}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(errors.dateCall && touched.dateCall)}
                helperText={
                  Boolean(errors.dateCall && touched.dateCall)
                    ? `${errors.dateCall}`
                    : ""
                }
              />
              <TextField
                type="time"
                name="hourCall"
                label="hour Call"
                value={values.hourCall}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(errors.hourCall && touched.hourCall)}
                helperText={
                  Boolean(errors.hourCall && touched.hourCall)
                    ? `${errors.hourCall}`
                    : ""
                }
              />
              <TextField
                multiline
                rows={10}
                maxRows={4}
                name="description"
                label="Description of idea"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(errors.description && touched.description)}
                helperText={
                  Boolean(errors.description && touched.description)
                    ? `${errors.description}`
                    : ""
                }
              />
              <Button variant="outlined">Zamów konsultację</Button>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
};
export default FormSoftware;
