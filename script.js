function generateReceipt() {

  const sender =
    document.getElementById("senderName").value || "Demo Sender";

  const senderAccount =
    document.getElementById("senderAccount").value || "XXXX-XXXX-XXXX";

  const receiver =
    document.getElementById("receiverName").value || "Demo Receiver";

  const receiverAccount =
    document.getElementById("receiverAccount").value || "XXXX-XXXX-XXXX";

  const country =
    document.getElementById("country").value || "Demo Country";

  const bank =
    document.getElementById("bank").value || "Demo Wallet";

  const amount =
    Number(document.getElementById("amount").value) || 0;

  const fee =
    Number(document.getElementById("fee").value) || 0;

  const net = Math.max(amount - fee, 0);

  document.getElementById("rSender").textContent = sender;
  document.getElementById("rSenderAccount").textContent = senderAccount;

  document.getElementById("rReceiver").textContent = receiver;
  document.getElementById("rReceiverAccount").textContent = receiverAccount;

  document.getElementById("rCountry").textContent = country;
  document.getElementById("rBank").textContent = bank;

  document.getElementById("rAmount").textContent =
    "$" + amount.toFixed(2);

  document.getElementById("rFee").textContent =
    "$" + fee.toFixed(2);

  document.getElementById("rNet").textContent =
    "$" + net.toFixed(2);

  const randomPart =
    Math.random().toString(36).substring(2, 9).toUpperCase();

  document.getElementById("rTransaction").textContent =
    "SAMPLE-TXN-" + randomPart;

  document.getElementById("rDate").textContent =
    new Date().toLocaleString();
}
