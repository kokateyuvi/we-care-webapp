import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "../Modal/Modal";
import NakedButton from "../NakedButton/NakedButton";
import Button from "../Button/Button";
import FormItem from "../FormItem/FormItem";
import Input from "../Input/Input";
import rabbit from "../../elements/logo.svg";

const LogoContainer = () => (
  <div className="w-24 h-20 mx-auto mb-8">
    <img src={rabbit} alt="taskbunny" className="object-cover w-full h-full" />
  </div>
);
const FORM = {
  email: {
    label: "Email",
    type: "text",
    getErrorMessage: (value) => {
      if (!value) {
        return "Please enter your email address";
      }
      return "";
    },
  },
  password: {
    label: "Password",
    type: "password",
    getErrorMessage: (value) => {
      if (!value) {
        return "Please enter your password";
      }
      return "";
    },
  },
};
const LogInModal = ({ onClose, onSignUp }) => {
  const [formData, setFormData] = useState({
    email: {
      value: "",
      touched: false,
    },
    password: {
      value: "",
      touched: false,
    },
  });

  const getErrorMessage = (target) => {
    const { value } = formData[target];
    return FORM[target].getErrorMessage(value);
  };

  const handleFormDataChange = (target) => (event) => {
    const { value } = event.target;
    event.preventDefault();

    setFormData((prevData) => ({
      ...prevData,
      [target]: {
        value,
        touched: true,
      },
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (isFormValid()) {
      // Perform login action here
      console.log("Logging in...", formData);
    } else {
      console.log("Validation errors. Cannot submit.");
    }
  };

  const isFormValid = () => {
    return !Object.keys(FORM).some((key) => {
      const errorMessage = getErrorMessage(key);
      return errorMessage !== "";
    });
  };

  return (
    <Modal onClose={onClose}>
      <div className="p-6 bg-white rounded-lg">
        <LogoContainer />
        <form onSubmit={handleFormSubmit}>
          {Object.keys(FORM).map((key) => {
            const { label, type } = FORM[key];
            const { value, touched } = formData[key];
            const errorMessage = touched ? getErrorMessage(key) : "";

            return (
              <FormItem
                key={key}
                label={label}
                htmlFor={key}
                errorMessage={errorMessage}
              >
                <Input
                  onChange={handleFormDataChange(key)}
                  id={key}
                  type={type}
                  errorMessage={errorMessage}
                  value={value}
                  className="w-full p-2 mt-2 border border-gray-300 rounded"
                />
              </FormItem>
            );
          })}
          <FormItem>
            <Button
              disabled={!isFormValid()}
              width="full"
              variant="success"
              className="mt-4"
            >
              Log In
            </Button>
          </FormItem>
        </form>
        <div className="flex items-center mt-4">
          <span className="flex-1 border-t border-gray-300"></span>
          <span className="mx-4 text-gray-500">or log in with</span>
          <span className="flex-1 border-t border-gray-300"></span>
        </div>
        <div className="flex justify-center mt-4">
          <Button width="full" variant="primary" className="mr-2">
            Facebook
          </Button>
          <Button width="full" variant="secondary" className="ml-2">
            Google
          </Button>
        </div>
      </div>
      <Modal.Footer>
        Dont have an account? &nbsp;
        <NakedButton variant="link" onClick={onSignUp}>
          Sign Up Now
        </NakedButton>
      </Modal.Footer>
    </Modal>
  );
};

LogInModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSignUp: PropTypes.func.isRequired,
};

export default LogInModal;
