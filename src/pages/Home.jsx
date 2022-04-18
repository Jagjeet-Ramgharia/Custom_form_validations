import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckBox from "../components/CheckBox";
import ImageUpload from "../components/ImageUpload";
import RadioInput from "../components/RadioInput";
import ShowImage from "../components/ShowImage";
import TextInput from "../components/TextInput";
import {
  setUserInfo,
  setUserInfoError,
  setUserInfoStart,
} from "../redux/Slice";
import { validations } from "../utils/FormValidations";

function Home() {
  const [value, setValue] = React.useState({
    child1: "",
    child2: "",
    child3: "",
  });
  const [images, setImages] = React.useState({});
  const [preferedLanguage, setPreferedLanguage] = React.useState([]);
  const [pending, setPending] = React.useState(false);

  const [error, setError] = React.useState(false);
  const [errMsg, setErrMsg] = React.useState("");
  const [userData, setUserData] = React.useState({});
  const UserState = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const {
    firstname,
    lastname,
    dateOfBirth,
    email,
    number,
    password,
    confirmPassword,
    language,
    image,
  } = UserState.userInfo;
  function addChild(CValue) {
    setValue([...value, { child4: "" }]);
  }

  const handleChange = (e) => {
    dispatch(setUserInfoStart()); // start loading
    try {
      dispatch(
        setUserInfo({
          ...UserState.userInfo, // get the current state
          [e.target.name]: e.target.value, // e.target.name is the name of the input field
        })
      );
      const Images = images.image;
      setUserData({ ...UserState.userInfo, Images, preferedLanguage });
      const formErrors = validations(userData);
      if (!!formErrors) {
        setError(true);
        setErrMsg(formErrors);
      } else {
        setError(false);
        setErrMsg("");
      }
    } catch (error) {
      console.log(error);
      dispatch(setUserInfoError()); // stop loading and show error
    }
  };

  // useEffect(() => {
  //   const formErrors = validations(userData);
  //   if (!!formErrors) {
  //     setError(true);
  //     setErrMsg(formErrors);
  //   } else {
  //     setError(false);
  //     setErrMsg("");
  //   }
  // }, [userData]);

  // console.log(first);

  const submitUserInfo = (e) => {
    e.preventDefault();
    // if (!error) {
    // console.log(err);
    localStorage.setItem("userInfo", JSON.stringify(userData));
    alert("User Info Saved");
    // }
  };

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const validations = (data) => {
    // console.log(data);
    let errors = {};
    if (!data.firstname) {
      errors.firstname = "First name is required";
    } else if (data.firstname.length < 3) {
      errors.firstname = "First name must be at least 3 characters";
    }

    if (!data.lastname) {
      errors.lastname = "Last name is required";
    } else if (lastname.length < 3) {
      errors.lastname = "Last name must be at least 3 characters";
    }

    if (!data.dateOfBirth) {
      errors.dateOfBirth = "Date of birth is required";
    }
    if (!data.email) {
      errors.email = "Email is required";
    } else if (!validateEmail(data.email)) {
      errors.email = "Please enter a valid email";
    }
    if (!data.number) {
      errors.number = "Number is required";
    }
    if (!data.password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    if (!data.confirmPassword) {
      errors.confirmPassword = "Confirm password is required";
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "Password and confirm password must be same";
    }
    if (!data.preferedLanguage) {
      errors.language = "Language is required";
    }
    return errors;
  };

  // console.log(errMsg);

  const handlePreferedLanguage = (e) => {
    setPreferedLanguage([...preferedLanguage, e.target.value]);
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-1/2 rounded-xl drop-shadow-md">
        <form
          onSubmit={submitUserInfo}
          className="w-full my-4 p-4 flex flex-col border rounded-xl"
        >
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col w-full mr-1">
              <TextInput
                type={"text"}
                label={"Firstname"}
                id={"firstname"}
                // required={true}
                placeholder={"Jhon"}
                value={firstname}
                onchange={handleChange}
                // minLength={3}
              />
              {error && (
                <span className="text-red-600 text-xs">{errMsg.firstname}</span>
              )}
            </div>
            <div className="flex flex-col w-full mr-1">
              <TextInput
                type={"text"}
                label={"Lastname"}
                id={"lastname"}
                // required={true}
                placeholder={"Doe"}
                value={lastname}
                onchange={handleChange}
                // minLength={3}
              />
              {error && (
                <span className="text-red-600 text-xs">{errMsg.lastname}</span>
              )}
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col w-full mr-1">
              <TextInput
                type={"text"}
                label={"Email"}
                id={"email"}
                // required={true}
                placeholder={"JhonDoe@gmail.com"}
                value={email}
                onchange={handleChange}
              />
              {error && (
                <span className="text-red-600 text-xs">{errMsg.email}</span>
              )}
            </div>
            <div className="flex flex-col w-full mr-1">
              <TextInput
                type={"number"}
                label={"Number"}
                id={"number"}
                // required={true}
                placeholder={"JhonDoe@gmail.com"}
                value={number}
                onchange={handleChange}
              />
              {error && (
                <span className="text-red-600 text-xs">{errMsg.number}</span>
              )}
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col w-full mr-1">
              <TextInput
                type={"password"}
                label={"Password"}
                id={"password"}
                // required={true}
                placeholder={"********"}
                value={password}
                onchange={handleChange}
                minLength={8}
              />
              {error && (
                <span className="text-red-600 text-xs">{errMsg.password}</span>
              )}
            </div>
            <div className="flex flex-col w-full mr-1">
              <TextInput
                type={"password"}
                label={"Confirm Password"}
                id={"confirmPassword"}
                // required={true}
                placeholder={"********"}
                value={confirmPassword}
                onchange={handleChange}
              />
              {error && (
                <span className="text-red-600 text-xs">
                  {errMsg.confirmPassword}
                </span>
              )}
            </div>
          </div>
          {/* {Object.entries(value).map((child, index) => (
            <>
              <TextInput
                type={"number"}
                label={`Child ${index + 1}`}
                id={`child${index + 1}`}
                // required={true}
                placeholder={`Child ${index + 1}`}
              />
            </>
          ))} */}
          {/* <Button onClick={addChild(``)} /> */}
          <div className="flex flex-col">
            <span className="text-zinc-800 text-xl font-semibold">
              Language
            </span>
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col w-full mr-1">
                <RadioInput
                  label={"English"}
                  id={"english"}
                  name={"language"}
                  value={"english"}
                  onchange={handleChange}
                />
                <RadioInput
                  label={"French"}
                  id={"french"}
                  name={"language"}
                  value={"french"}
                  onchange={handleChange}
                />
                {error && (
                  <span className="text-red-600 text-xs">
                    {errMsg.language}
                  </span>
                )}
              </div>
            </div>
          </div>

          <ImageUpload
            id={"image"}
            onchange={(e) =>
              setImages({ ...images, [e.target.name]: e.target.files })
            }
          />
          {images.image &&
            Object.keys(images?.image)?.map((img, index) => {
              const val = URL.createObjectURL(images.image[img]);
              return <ShowImage key={index} imgPath={val} />;
            })}
          <div className="flex flex-col">
            <span className="text-zinc-800 text-xl font-semibold">
              Preferred Languages
            </span>
            <div className="flex flex-row flex-wrap">
              <CheckBox
                title={"English"}
                id={"CEnglish"}
                onchange={(e) => handlePreferedLanguage(e)}
              />
              <CheckBox
                title={"French"}
                id={"CFrench"}
                onchange={(e) => handlePreferedLanguage(e)}
              />
              <CheckBox
                title={"German"}
                id={"CGerman"}
                onchange={(e) => handlePreferedLanguage(e)}
              />
              <CheckBox
                title={"Portuguese"}
                id={"CPortuguese"}
                onchange={(e) => handlePreferedLanguage(e)}
              />
              <CheckBox
                title={"Italian"}
                id={"CItalian"}
                onchange={(e) => handlePreferedLanguage(e)}
              />
              <CheckBox
                title={"Laundry"}
                id={"CLaundry"}
                onchange={(e) => handlePreferedLanguage(e)}
              />
            </div>
            <button
              disabled={!!errMsg}
              type="submit"
              className="bg-purple-600 disabled:bg-slate-700 disabled:scale-100 disabled:cursor-not-allowed uppercase rounded-xl w-1/2 self-center py-2 text-white font-semibold hover:bg-purple-500 hover:scale-105"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const Button = ({ onClick }) => (
  <button
    onClick={onClick}
    type="button"
    className="bg-zinc-800 text-white p-2 rounded-lg underline w-1/3 mt-1"
  >
    Add Child
  </button>
);

export default Home;
