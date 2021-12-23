// Contact form

const contactBtn = document.querySelector(".contact-btn");
const firstName = document.querySelector(".first-name");
const lastName = document.querySelector(".last-name");
const subject = document.querySelector(".subject");
const email = document.querySelector("email");
const msg = document.querySelector("message");

contactBtn.addEventListener("click", () => {
  if (
    firstName.value.length &&
    lastName.value.length &&
    subject.value.length &&
    email.value.length &&
    msg.value.length
  ) {
    fetch("/mail", {
      method: "post",
      headers: new headers({ "content-type": "application/json" }),
      body: JSON.stringify({
        firstname: firstName.value,
        lastname: lastName.value,
        subject: subject.value,
        email: email.value,
        msg: msg.value,
      }),
    })
      .then((res) => res, json())
      .then((data) => {
        alert(data);
      });
  }
});
