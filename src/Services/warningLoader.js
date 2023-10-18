
window.addEventListener("DOMContentLoaded", function() {
  const notificationShown = localStorage.getItem("notificationShown");

  if (!notificationShown) {
  Swal.fire({
    title: "Thanks for using my website!",
    html: `<b>Privacy Policy:</b><br>
        <br>
        Last update: 10/2023 <br> <br>Welcome to Non-Official Apple Reseller (Educational Purposes).<br> <br>
        In this site, we take the privacy of our visitors seriously.<br>
        This privacy policy aims to explain how we collect and use information on our website, as well as explaining the purpose of the site.<br> <br>
        <strong>Information Collect: </strong><br>
        We do not collect personally identifiable information from our visitors under any circumstances, the website has links that redirect to the official website <a href="apple.com">apple.com</a>. <br> We are not responsible for how Apple handles user information, please refer to their privacy policy for more information.<br> <br>
        <strong>Use of information:</strong><br>
        All information presented on this website is purely for educational and demonstration purposes, I do not sell or trade Apple products, all products shown here are for educational and non-profit purposes.<br> <br>
        <strong>Cookies and similar technologies:</strong><br>
        We do not use cookies or similar technologies to collect personal information, but we use localStorage to save your Bag and allow you reaload the site without losing your cart items.<br> <br>
        <strong>Dissemination of information: </strong><br>
        We do not share any personal information with third parties, as we do not collect personal information from our visitors.<br> <br>
        <strong>Third party links: </strong><br>
        Out website can contain links to third party websites. We have no control over the privacy or the content of these websites and are not responsible for their privacy practices.<br><br>
        <strong>Changes in this privacy policy: </strong><br>
        The privacy policy will remain the same, this website is not intended for commercial use, but for educational use. In case this privacy policy changes, you will see it in this modal alert. <br> <br>
        <strong>Questions and Contact: </strong><br>
        If you have any question about this privacy policy or how did this website was created, you can contact me to this email: emirlpintos@gmail.com .`,
    icon: "",
    showCancelButton: false,
    showConfirmButton: true,
    confirmButtonColor: "#000000",
    confirmButtonText: "I agree to the terms and conditions.",
    customClass: {
      popup: "custom-popup",
      confirmButton: "custom-confirm-button"
    }
  });

    localStorage.setItem("notificationShown", "true");
  }
});