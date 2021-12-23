// Contact form

const contactBtn = document.querySelector("#contactBtn");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const msg = document.querySelector("#msg");

contactBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (
    firstName.value.length &&
    lastName.value.length &&
    subject.value.length &&
    email.value.length &&
    msg.value.length
  ) {
    fetch("/mail", {
      method: "post",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify({
        firstname: firstName.value,
        lastname: lastName.value,
        subject: subject.value,
        email: email.value,
        msg: msg.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data);
      });
  }
});
