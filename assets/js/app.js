function handleContactClick() {
  var email = "daffapasya1@gmail.com";
  document.getElementById("popupEmail").textContent = email;

  var popup = document.getElementById("myPopUp");
  popup.style.display = "block";

  var closeButton = document.getElementsByClassName("close")[0];
  closeButton.addEventListener("click", function () {
    popup.style.display = "none";
  });

  var proceedLink = document.getElementById("popupLink");
  proceedLink.addEventListener("click", function () {
    var mailtoLink = "mailto:" + email;

    window.location.href = mailtoLink;
  });
}

document.addEventListener("DOMContentLoaded", function () {
  var contactLink = document.getElementById("contactLink");
  contactLink.addEventListener("click", handleContactClick);
});
