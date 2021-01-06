import React from "react";

export default function DashAccInfo(props) {
  // const [name, setName] = useState("");
  // const [email, setemail] = useState("");
  console.log(props.userInfo.UserInfo[0]);
  return (
    <div className="myTabPanel">
      <div className="infoAccount fade-panel-enter-done">
        <form>
          <div className="infoAccount__label">Full name:</div>
          <div className="MuiFormControl-root MuiTextField-root jss1342 MuiFormControl-fullWidth">
            <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense">
              <input
                aria-invalid="false"
                id="name"
                name="name"
                type="text"
                className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense"
                value={props.userInfo.UserInfo[0]}
              />
            </div>
          </div>
          <div className="infoAccount__label">Email:</div>
          <div className="MuiFormControl-root MuiTextField-root jss1342 MuiFormControl-fullWidth">
            <div className="MuiInputBase-root MuiOutlinedInput-root Mui-disabled Mui-disabled MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense">
              <input
                aria-invalid="false"
                disabled
                id="email"
                name="email"
                type="text"
                className="MuiInputBase-input MuiOutlinedInput-input Mui-disabled Mui-disabled MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense"
                value={props.userInfo.UserInfo[1]}
              />
            </div>
          </div>
          <div className="infoAccount__button">
            <button
              className="MuiButtonBase-root MuiButton-root MuiButton-outlined"
              tabIndex={0}
              type="button"
            >
              <span className="MuiButton-label">Change password</span>
            </button>
          </div>
          <div className="infoAccount__submit">
            <button
              className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-color-update"
              tabIndex={0}
              type="submit"
            >
              <span className="MuiButton-color-update">Update Infomation</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
