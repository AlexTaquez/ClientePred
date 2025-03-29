// Función que se ejecuta cuando el usuario hace clic en el botón "Predecir"
function submitForm() {
    // Obtener los valores del formulario
    const formData = {
        Pregnancies: parseInt(document.getElementById("Pregnancies").value),
        Glucose: parseInt(document.getElementById("Glucose").value),
        BloodPressure: parseInt(document.getElementById("BloodPressure").value),
        SkinThickness: parseInt(document.getElementById("SkinThickness").value),
        Insulin: parseInt(document.getElementById("Insulin").value),
        BMI: parseFloat(document.getElementById("BMI").value),
        DiabetesPedigreeFunction: parseFloat(document.getElementById("DiabetesPedigreeFunction").value),
        Age: parseInt(document.getElementById("Age").value)
    };

    // Hacer la solicitud POST al servicio web
    fetch("https://deploydibetes.onrender.com/patient", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        // Mostrar el resultado en la pantalla
        const resultDiv = document.getElementById("result");
        if (data.prediction === 1) {
            resultDiv.innerHTML = "El paciente es enfermo (Diabetes).";
            resultDiv.style.color = "red";
        } else {
            resultDiv.innerHTML = "El paciente no es enfermo (No tiene Diabetes).";
            resultDiv.style.color = "green";
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Hubo un error al procesar la solicitud.");
    });
}
