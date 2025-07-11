

// main.js

// Selección de elementos
const visorPrincipal = document.getElementById("visorPrincipal-calculadora");
const visorSecundario = document.getElementById("visorSecundario-calculadora");

let expresion = "";

// Botones numéricos
document.querySelectorAll("button[numeros-calculadora]").forEach(boton => {
    boton.addEventListener("click", () => {
        expresion += boton.textContent;
        visorPrincipal.textContent = expresion;
    });
});

// Botones de signos
document.querySelectorAll("button[signos-calculadora]").forEach(boton => {
    boton.addEventListener("click", () => {
        expresion += boton.textContent;
        visorPrincipal.textContent = expresion;
    });
});

// Botón igual
document.querySelector("button[igual-calculadora]").addEventListener("click", () => {
    try {
        visorSecundario.textContent = expresion;
        expresion = eval(expresion).toString();
        visorPrincipal.textContent = expresion;
    } catch (e) {
        visorPrincipal.textContent = "Error";
        expresion = "";
    }
});

// Botón de coma (.)
document.getElementById("coma").addEventListener("click", () => {
    expresion += ".";
    visorPrincipal.textContent = expresion;
});

// Botón borrar (←)
document.getElementById("borrar-celda").addEventListener("click", () => {
    expresion = expresion.slice(0, -1);
    visorPrincipal.textContent = expresion || "0";
});

// Botón limpiar (C)
document.getElementById("cls").addEventListener("click", () => {
    expresion = "";
    visorPrincipal.textContent = "0";
    visorSecundario.textContent = "0";
});

// Paréntesis
document.getElementById("parentesis-izquierdo").addEventListener("click", () => {
    expresion += "(";
    visorPrincipal.textContent = expresion;
});

document.getElementById("parentesis-derecho").addEventListener("click", () => {
    expresion += ")";
    visorPrincipal.textContent = expresion;
});
