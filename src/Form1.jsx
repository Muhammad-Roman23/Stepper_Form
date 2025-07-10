import { useState } from "react";
import "./forms.css";
export const Form1 = () => {
  const [form, setform] = useState(1);
  const [data, setdata] = useState({
    budget1: "",
    budget2: "",
    budget3: "",
    budget4: "",
    budget5: "",
    budget6: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handledata = (property, value) => {
    setdata({ ...data, [property]: value });
  };
const Form1 = () => {
  for (const key in data) {
    if (key.startsWith("budget") && data[key] === "") {
      alert(`${key} is required`);
      return;
    }
  }
  setform(form + 1);
};
  // console.log(data);
  

const Form2 = () => {
  for (const key in data) {
    if ((key === "name" || key === "email" || key === "phone" || key === "message") && data[key] === "") {
      alert(`${key} is required`);
      return;
    }
  }
  setform(form + 1);
};


  const previous = () => {
    setform(form - 1);
  };

  const handlenextbtn = () => {
    
      console.log(data);
      alert("Form Submited Successsfully");
      setdata("");  
      setform(1);
  };

  return (
    <>
      <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          style={{ width: `${(form / 3) * 100}%` }}
        ></div>
      </div>
      <div className="parent">
        {form === 1 && (
          <div className="form">
            <div className="text">
              <h1>Step # 1</h1>
              <h1 className="detail">
                What is your monthly digital <br /> marketing budget?
              </h1>
            </div>
            <form action="">
              <input
                type="number"
                value={data.budget1}
                placeholder="$1,000"
                onChange={(e) => handledata("budget1", e.target.value)}
              />
              <input
                type="number"
                value={data.budget2}
                placeholder="$1,000 - $2,000"
                onChange={(e) => handledata("budget2", e.target.value)}
              />
              <input
                type="number"
                value={data.budget3}
                placeholder="$2,000 - $3,000"
                onChange={(e) => handledata("budget3", e.target.value)}
              />
              <input
                type="number"
                value={data.budget4}
                placeholder="$3,000 - $4,000"
                onChange={(e) => handledata("budget4", e.target.value)}
              />
              <input
                type="number"
                value={data.budget5}
                placeholder="$4,000 - $5,000"
                onChange={(e) => handledata("budget5", e.target.value)}
              />
              <input
                type="number"
                value={data.budget6}
                placeholder="$5,000 - $6,000"
                onChange={(e) => handledata("budget6", e.target.value)}
              />
            </form>
            <div className="btns next1">
              <div className="next-btn " onClick={() => Form1()}>
                Next
              </div>
            </div>
          </div>
        )}
        {form === 2 && (
          <div className="form">
            <div className="text">
              <h1>Step # 2</h1>
              <h1>Details</h1>
              <p className="form2-para">
                We are thrilled at the opportunity to help to grow your business
                online.Please let us now the best way to reach at you.
              </p>
            </div>
            <form action="">
              <label htmlFor="">Name</label>
              <input
                type="text"
                className="tax"
                value={data.name}
                onChange={(e) => handledata("name", e.target.value)}
              />
              <div className="mail-phone">
                <div className="mail">
                  <label htmlFor="">E-mail</label>
                  <input
                    type="mail"
                    className="tax"
                    value={data.email}
                    onChange={(e) => handledata("email", e.target.value)}
                  />
                </div>
                <div className="phone">
                  <label htmlFor="">Phone Number</label>
                  <input
                    type="number"
                    className="tax"
                    value={data.phone}
                    onChange={(e) => handledata("phone", e.target.value)}
                  />
                </div>
              </div>
              <label htmlFor="">Anything else you'd like to share?</label>
              <input
                type="text"
                className="textarea tax"
                value={data.message}
                onChange={(e) => handledata("message", e.target.value)}
              />
            </form>
            <div className="btns">
              <div className="prev-btn" onClick={() => previous()}>
                Previous
              </div>
              <div className="next-btn" onClick={() => Form2()}>
                Next
              </div>
            </div>
          </div>
        )}
        {form === 3 && (
          <div className="form">
            <div className="shape"></div>
            <div className="text">
              <h1>Your Request for a Proposal Has Been Submitted! </h1>
              <p className="form2-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                non perferendis, ullam eligendi neque in nobis qui consectetur
                nulla id autem molestias ?
              </p>
            </div>

            <div className="btns">
              <div className="prev-btn" onClick={() => previous()}>
                Previous
              </div>
              <div className="next-btn" onClick={() => handlenextbtn()}>
                Submit
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
