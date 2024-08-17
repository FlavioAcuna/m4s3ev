function sendEmail() {
  // Obtener valores del formulario
  const to = document.getElementById("to").value;
  const subject = document.getElementById("subject").value;
  const body = document.getElementById("body").value;
  const ccInput = document.getElementById("cc").value;

  // Dividir los destinatarios en CC en un array
  const ccArray = ccInput
    .split(",")
    .map((email) => email.trim())
    .filter((email) => email);

  // Función para mostrar los datos en consola usando parámetros por defecto y parámetros rest
  function logEmailDetails(to, subject = "Sin asunto", body = "", ...cc) {
    console.log(`Para: ${to}`);
    console.log(`Asunto: ${subject}`);
    console.log(`Mensaje: ${body}`);
    console.log("CC:");
    for (const email of cc) {
      console.log(` - ${email}`);
    }
  }

  // Llamar a la función con los datos del formulario
  logEmailDetails(to, subject, body, ...ccArray);
}
