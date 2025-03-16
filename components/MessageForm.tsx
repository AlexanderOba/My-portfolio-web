"use client";
// import CircularLoader from "@/components/Loader";
import "aos/dist/aos.css";
import { useFormik } from "formik";
import { ReactNode, useState } from "react";
import * as Yup from "yup";
import styles from '../styles/form.module.css';


interface MessageFormProps {
  closeModal: () => void;
}

const MessageForm: React.FC<MessageFormProps> = ({ closeModal }) => {
  const [formState, setFormState] = useState({
    email: "",
    firstName: "",
    lastName: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values: any) => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      console.log(response)
      if (response.ok) {
        alert("Form submitted successfully!");
        setIsLoading(false)
      } else {
        setIsLoading(false)
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      setIsLoading(false)
      console.error(error);
      alert("Failed to submit form");
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required("This feild is required*"),
    firstName: Yup.string()
      .required("This feild is required*"),
    lastName: Yup.string()
      .required("This feild is required*")
  });

  const formik = useFormik({
    initialValues: formState,
    validationSchema: validationSchema,
    onSubmit: (values: any) => {
      handleSubmit(values);
    },
  });

  return (
    <section>
      <form className={styles["form-container"]} onSubmit={formik.handleSubmit}>
        <div className={styles["form-header"]}>
          <h4>Message</h4>
        </div>
        <div className={styles["form-label-wrapper"]}>
          <label className={styles["form-label"]}>
            <span>First Name</span>
            <input
              placeholder="First Name"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              className={ styles["form-input"]
              }
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <p className={styles["form-error"]}>
                {formik.errors.firstName as ReactNode}
              </p>
            ) : null}

          </label>

          <label className={styles["form-label"]}>
            <span>Last Name</span>
            <input
              placeholder="Last Name"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              className={ styles["form-input"]
              }
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <p className={styles["form-error"]}>
                {formik.errors.lastName as ReactNode}
              </p>
            ) : null}

          </label>
        </div>
        <label className={styles["form-label"]}>
          <span>Email</span>
          <input
            placeholder="Email Address"
            name="email"
            type="text"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={ styles["form-input"]
            }
          />
          {formik.touched.email && formik.errors.email ? (
            <p className={styles["form-error"]}>
              {formik.errors.email as ReactNode}
            </p>
          ) : null}
        </label>


        <label className={styles["form-label"]}>
          <span>Message</span>
          <textarea
            placeholder="Write your message here..."
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={ styles["message-form-input" ]}
          ></textarea>
          {formik.touched.message && formik.errors.message ? (
            <p className="form-error">{formik.errors.message as ReactNode}</p>
          ) : null}
          </label>
          <div className={styles["form-button-container"]}>
            <button type="submit" className={styles["form-button"]}>
              {isLoading ? "Loading..." : "Send"}
            </button>
          </div>
      </form>
    </section>

  );
};

export default MessageForm;
