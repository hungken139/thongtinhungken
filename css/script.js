// Hiện thị thông tin cá nhân
const email = document.querySelector("#email");
const error = document.querySelector(".error-text");
const thongtin = document.querySelector(".thongtin");
const thongtincanhan = document.querySelector(".thongtincanhan");
const regExp =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function check() {
  if (email.value.match(regExp)) {
    email.style.borderColor = "#27ae60";
    email.style.background = "#eafaf1";
    error.style.display = "none";
  } else {
    email.style.borderColor = "#e74c3c";
    email.style.background = "#fceae9";
    error.style.display = "block";
  }
  if (email.value == "") {
    email.style.borderColor = "lightgrey";
    email.style.background = "#fff";
    error.style.display = "none";
  }
}
document.querySelector(".button").addEventListener("click", function () {
  if (email.value.match(regExp)) {
    thongtin.style.display = "none";
    thongtincanhan.style.display = "block";
  }
});

// Hiện thị thông tin trong phần dự án
document.querySelector("#nut2").addEventListener("click", function () {
  const kinhnghiem = document.querySelector(".kinhnghiem2");
  const hienthikinhnghiem = document.querySelector(".hienthikinhnghiem2");
  const nut = document.querySelector("#nut2");
  if (kinhnghiem.style.display === "none") {
    kinhnghiem.style.display = "inline";
    hienthikinhnghiem.style.display = "none";
    nut.innerHTML = "&#9660 View more";
  } else {
    kinhnghiem.style.display = "none";
    nut.innerHTML = "&#9650 View less";
    hienthikinhnghiem.style.display = "inline";
  }
});
document.querySelector("#nut3").addEventListener("click", function () {
  const kinhnghiem = document.querySelector(".kinhnghiem3");
  const hienthikinhnghiem = document.querySelector(".hienthikinhnghiem3");
  const nut = document.querySelector("#nut3");
  if (kinhnghiem.style.display === "none") {
    kinhnghiem.style.display = "inline";
    hienthikinhnghiem.style.display = "none";
    nut.innerHTML = "&#9660 View more";
  } else {
    kinhnghiem.style.display = "none";
    nut.innerHTML = "&#9650 View less";
    hienthikinhnghiem.style.display = "inline";
  }
});
document.querySelector("#nut4").addEventListener("click", function () {
  const kinhnghiem = document.querySelector(".kinhnghiem4");
  const hienthikinhnghiem = document.querySelector(".hienthikinhnghiem4");
  const nut = document.querySelector("#nut4");
  if (kinhnghiem.style.display === "none") {
    kinhnghiem.style.display = "inline";
    hienthikinhnghiem.style.display = "none";
    nut.innerHTML = "&#9660 View more";
  } else {
    kinhnghiem.style.display = "none";
    nut.innerHTML = "&#9650 View less";
    hienthikinhnghiem.style.display = "inline";
  }
});
document.querySelector("#nut5").addEventListener("click", function () {
  const kinhnghiem = document.querySelector(".kinhnghiem5");
  const hienthikinhnghiem = document.querySelector(".hienthikinhnghiem5");
  const nut = document.querySelector("#nut5");
  if (kinhnghiem.style.display === "none") {
    kinhnghiem.style.display = "inline";
    hienthikinhnghiem.style.display = "none";
    nut.innerHTML = "&#9660 View more";
  } else {
    kinhnghiem.style.display = "none";
    nut.innerHTML = "&#9650 View less";
    hienthikinhnghiem.style.display = "inline";
  }
});
document.querySelector("#nut6").addEventListener("click", function () {
  const kinhnghiem = document.querySelector(".kinhnghiem6");
  const hienthikinhnghiem = document.querySelector(".hienthikinhnghiem6");
  const nut = document.querySelector("#nut6");
  if (kinhnghiem.style.display === "none") {
    kinhnghiem.style.display = "inline";
    hienthikinhnghiem.style.display = "none";
    nut.innerHTML = "&#9660 View more";
  } else {
    kinhnghiem.style.display = "none";
    nut.innerHTML = "&#9650 View less";
    hienthikinhnghiem.style.display = "inline";
  }
});
document.querySelector("#nut").addEventListener("click", function () {
  const kinhnghiem = document.querySelector(".kinhnghiem");
  const hienthikinhnghiem = document.querySelector(".hienthikinhnghiem");
  const nut = document.querySelector("#nut");
  if (kinhnghiem.style.display === "none") {
    kinhnghiem.style.display = "inline";
    hienthikinhnghiem.style.display = "none";
    nut.innerHTML = "&#9660 View more";
  } else {
    kinhnghiem.style.display = "none";
    nut.innerHTML = "&#9650 View less";
    hienthikinhnghiem.style.display = "inline";
  }
});

document.querySelector(".grid-item").addEventListener("mouseover", function () {
  var x = document.getElementsByClassName(".grid-item");
  const nut = document.querySelector("#nut");
  nut.style.display = "block";
});
document.querySelector(".grid-item").addEventListener("mouseout", function () {
  var x = document.getElementsByClassName(".grid-item");
  const nut = document.querySelector("#nut");
  nut.style.display = "none";
});

document
  .querySelector(".grid-item2")
  .addEventListener("mouseover", function () {
    var x = document.getElementsByClassName(".grid-item2");
    const nut2 = document.querySelector("#nut2");
    nut2.style.display = "block";
  });
document
  .querySelector(".grid-item3")
  .addEventListener("mouseover", function () {
    var x = document.getElementsByClassName(".grid-item3");
    const nut3 = document.querySelector("#nut3");
    nut3.style.display = "block";
  });
document
  .querySelector(".grid-item4")
  .addEventListener("mouseover", function () {
    var x = document.getElementsByClassName(".grid-item4");
    const nut4 = document.querySelector("#nut4");
    nut4.style.display = "block";
  });
document
  .querySelector(".grid-item5")
  .addEventListener("mouseover", function () {
    var x = document.getElementsByClassName(".grid-item5");
    const nut5 = document.querySelector("#nut5");
    nut5.style.display = "block";
  });
document
  .querySelector(".grid-item6")
  .addEventListener("mouseover", function () {
    var x = document.getElementsByClassName(".grid-item6");
    const nut6 = document.querySelector("#nut6");
    nut6.style.display = "block";
  });
document.querySelector(".grid-item2").addEventListener("mouseout", function () {
  var x = document.getElementsByClassName(".grid-item2");
  const nut2 = document.querySelector("#nut2");
  nut2.style.display = "none";
});
document.querySelector(".grid-item3").addEventListener("mouseout", function () {
  var x = document.getElementsByClassName(".grid-item3");
  const nut3 = document.querySelector("#nut3");
  nut3.style.display = "none";
});
document.querySelector(".grid-item4").addEventListener("mouseout", function () {
  var x = document.getElementsByClassName(".grid-item4");
  const nut4 = document.querySelector("#nut4");
  nut4.style.display = "none";
});
document.querySelector(".grid-item5").addEventListener("mouseout", function () {
  var x = document.getElementsByClassName(".grid-item5");
  const nut5 = document.querySelector("#nut5");
  nut5.style.display = "none";
});
document.querySelector(".grid-item6").addEventListener("mouseout", function () {
  var x = document.getElementsByClassName(".grid-item6");
  const nut6 = document.querySelector("#nut6");
  nut6.style.display = "none";
});
