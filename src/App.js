import { Form, Formik } from "formik";
import { useLogger } from "react-use";
import * as Yup from "yup";
import BasicSearchSelect from "./BasicSearchSelect";
import "bootstrap/dist/css/bootstrap.min.css";
import "@reach/combobox/styles.css";
import ArraySearchSelect from "./ArraySearchSelect";
import "./styles.css";

export default function App() {
  useLogger("App =>");
  return (
    <Formik
      initialValues={{
        fruit: "",
        fruitsArr: ""
      }}
      validationSchema={Yup.object({
        fruit: Yup.string().required("Fruit is required"),
        fruitsArr: Yup.array()
          .required("This field is required")
          .min(1, "You need to choose one fruit.")
      })}
    >
      {(props) => {
        return (
          <div className="form">
            <Form>
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group w-50 pt-5">
                      <BasicSearchSelect />
                      <ArraySearchSelect />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="pt-5">
                      <pre>{JSON.stringify(props.values, null, 2)}</pre>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
}
