addEventListener("load", function () {
  fetch("http://localhost:3333/")
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(data);
    });

  // async function postData(url = "http://localhost:3333/", data = {}) {
  //   const response = await fetch(url, {
  //     method: "POST",
  //     mode: "cors",
  //     cache: "reload",
  //     body: JSON.stringify(data),
  //   });
  //   return response.json();
  // }
  // postData("http://localhost:3333/", {
  //   answer: "hello",
  //   then(data) {
  //     console.log(data);
  //   },
  // });
});

// const tipoUsuario = event.target.same.value;
// const email = document.getElementById("email").value;
// const cpf = document.getElementById("cpf").value;
// const name = document.getElementById("name").value;
// const lastName = document.getElementById("last-name").value;
// const password = document.getElementById("password").value;
// const passconfirmation = document.getElementById("passconfirmation").value;
// const phone = document.getElementById("phone").value;
// const cellPhone = document.getElementById("cell-phone").value;
// const localCity = document.getElementById("local-city").value;

// const usuario = [
//   tipoUsuario,
//   email,
//   cpf,
//   name,
//   lastName,
//   password,
//   passconfirmation,
//   phone,
//   cellPhone,
//   localCity,
// ];

// console.log(usuario);
