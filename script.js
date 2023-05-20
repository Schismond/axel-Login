// verification mot de passe
let emailForgoten = document.getElementById("email-forgot");
let reset = document.getElementById("reset-password");
let formList = document.querySelectorAll("form");
let insertCode = document.getElementById("insert-code");
let falseCode = document.getElementById("falseCode");
let bttn = document.getElementById("bttn");

function disableBtn() {
  var submitBtn = document.getElementById("confirmCodeBtn");
  submitBtn.disabled = true;
}

//forme de log-in
formList[0].addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("izannnn");
  let emailValue = document.getElementById("email").value;
  let passwordValue = document.getElementById("password").value;
  console.log("Email: " + emailValue);
  console.log("Password: " + passwordValue);
  if (emailValue === "example@email.com" && passwordValue === "mypassword") {
    alert("you are logged in");
  } else {
    alert("your credentials are false");
  }
});

// forme de recupération de mot de passe
reset.addEventListener("click", () => {
  formList[0].style.display = "none";
  formList[1].style.display = "flex";
});

formList[1].addEventListener("submit", () => {
  //ici tu dois relié ta BDD pour que la fonction peut verifier si l'email existe et envoyer un code de récupération
  alert("code de recupération a été envoyer");
  formList[1].style.display = "none";
  formList[2].style.display = "flex";
});
let cpt = 0;
formList[2].addEventListener("submit", () => {
  //ici tu dois relié ta BDD pour que la fonction peut verifier le code de récupération
  if (insertCode.value === "1122") {
    alert("recupération Réussit");
    formList[2].style.display = "none";
    formList[3].style.display = "flex";
  } else {
    falseCode.innerText = "code incorrect";
    cpt++;
    console.log(cpt + "cpt inside function");
    if (cpt > 5) {
      /* cette condition limite la verification du code a 5 fois max sinon desactiver le button*/
      alert("tmargedt a sahbi");
      disableBtn();
    }
  }
});

formList[3].addEventListener("submit", (e) => {
  e.preventDefault();
  const password = document.getElementById("password1").value;
  const passwordConfirmation = document.getElementById("password2").value;

  function verifyPasswords(password, passwordConfirmation) {
    const pattern =
      /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

    // vérifier si le mot de passe au moins 8 caractères et ayant majuscule miniscule numéro et caractere special
    if (!pattern.test(password)) {
      return "patternIssue"; // Pattern doesn't match
    }

    // verifier si les mots de passes sont ego
    if (password !== passwordConfirmation) {
      return "confirmationIssue"; // Passwords don't match
    }

    return "newPasswordSet"; // Both conditions pass
  }

  const result = verifyPasswords(password, passwordConfirmation);

  if (result === "newPasswordSet") {
    formList[3].style.display = "none";
    formList[4].style.display = "flex";
    //ici tu sauveguarde vers la BDD
    alert("New password set");
  } else if (result === "patternIssue") {
    alert("Pattern issue");
  } else {
    alert("Matching issue");
  }
});

formList[4].addEventListener("submit", () => {
  //cette page n'a pas de fonction juste retourne vers la premiere page
  formList[4].style.display = "none";
  formList[0].style.display = "flex";
});
