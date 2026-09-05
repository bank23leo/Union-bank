function generateReceipt() {
  const sender = document.getElementById("senderName").value || "Demo Sender";
  const senderAccount =
    document.getElementById("senderAccount").value || "XXXX-XXXX-XXXX";

  const receiver =
    document.getElementById("receiverName").value || "Demo Receiver";

  const receiverAccount =
    document.getElementById("receiverAccount").value || "XXXX-XXXX-XXXX";

  const country =
    document.getElementById("country").value || "Demo Country";

  const bank =
    document.getElementById("bank").value || "Demo Bank / Wallet";

  const amount =
    document.getElementById("amount").value || "0";

  const dateTime =
    document.getElementById("dateTime").value;

  document.getElementById("rSender").textContent = sender;
  document.getElementById("rSenderAccount").textContent = senderAccount;

  document.getElementById("rReceiver").textContent = receiver;
  document.getElementById("rReceiverAccount").textContent = receiverAccount;

  document.getElementById("rCountry").textContent = country;
  document.getElementById("rBank").textContent = bank;

  document.getElementById("rAmount").textContent =
    "USD $" + Number(amount).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

  const demoId =
    "DEMO-TXN-" +
    Math.random().toString(36).substring(2, 8).toUpperCase();

  document.getElementById("transactionId").textContent = demoId;

  if (dateTime) {
    const date = new Date(dateTime);
    document.getElementById("rDate").textContent =
      date.toLocaleString();
  } else {
    document.getElementById("rDate").textContent =
      "Demo Date & Time";
  }

  document.getElementById("receipt").classList.remove("hidden");

  document.getElementById("receipt").scrollIntoView({
    behavior: "smooth"
  });
}
