
window.addEventListener("DOMContentLoaded", function() {
  const notificationShown = localStorage.getItem("notificationShown");

  if (!notificationShown) {
  Swal.fire({
    title: "Thanks for using my website!",
    html: `<b>Privacy Policy:</b><br>
        <br>
        Last update: 10/2023 <br> <br>Welcome to Non-Official Apple Reseller (Educational Purposes).<br> <br>
        In this site, I take your privacy seriously.<br>
        This privacy policy aims to explain how I collect and use information on my website, as well as explaining the purpose of the site.<br> <br>
        <strong>Information Collect: </strong><br>
        I do not collect personally identifiable information from you under any circumstances, the website has links that redirect to the official website <a href="apple.com">apple.com</a>. <br> I am not responsible for how Apple handles user information, please refer to their privacy policy if you are interested.<br> <br>
        <strong>Use of information:</strong><br>
        All information presented on this website is purely for educational and demonstration purposes, I do not sell or trade Apple products, all products shown here are for educational and non-profit purposes.<br> <br>
        <strong>Cookies and similar technologies:</strong><br>
        I do not use cookies or similar technologies to collect personal information, but I use localStorage to save your Bag and allow you reaload the site without losing your cart items.<br> <br>
        <strong>Dissemination of information: </strong><br>
        I do not share any personal information with third parties, as I do not collect personal information from you.<br> <br>
        <strong>Third party links: </strong><br>
        My website can contain links to third party websites. I have no control over the privacy or the content of these websites and I am not responsible for their privacy practices.<br><br>
        <strong>Changes in this privacy policy: </strong><br>
        The privacy policy will remain the same, this website is not intended for commercial use, but for educational use. In case this privacy policy changes, you will see it in this modal alert. <br> <br>
        <strong>Questions and Contact: </strong><br>
        If you have any question about this privacy policy or how did this website was created, you can contact me to this email: lautiplug@gmail.com.`,
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