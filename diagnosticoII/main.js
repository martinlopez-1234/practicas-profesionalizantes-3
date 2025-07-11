/**
 * Representación en JavaScript de la configuración de teclas 
 * extraída de la imagen (d4).
 *
 * Estructura:
 * - El objeto principal `keyboardSettings` representa la pestaña "Keyboard".
 * - Contiene una propiedad `categories`, que es un Array para mantener el orden
 * de los grupos de configuración (MOVEMENT, COMBAT, etc.).
 * - Cada objeto dentro de `categories` tiene:
 * - `name`: El nombre de la categoría (ej: "MOVEMENT").
 * - `bindings`: Un Array de objetos, donde cada objeto representa una acción
 * y su tecla asignada.
 * - `action`: La descripción de la acción (ej: "Move forward").
 * - `key`: La tecla asignada (ej: "w").
 */
const keyboardSettings = {
  categories: [
    {
      name: "MOVEMENT",
      bindings: [
        {
          action: "Move forward",
          key: "w"
        },
        {
          action: "Move back",
          key: "s"
        },
        {
          action: "Move left (strafe)",
          key: "a"
        },
        {
          action: "Move right (strafe)",
          key: "d"
        },
        {
          action: "Sprint (Move Quickly)",
          key: "SHIFT"
        },
        {
          action: "Jump",
          key: "SPACE"
        },
        {
          action: "Duck",
          key: "CTRL"
        }
      ]
    },
    {
      name: "COMBAT",
      bindings: [
        {
          action: "Primary attack",
          key: "MOUSE1"
        },
        {
          action: "Secondary attack",
          key: "MOUSE2"
        },
        {
          action: "Reload weapon",
          key: "r"
        }
      ]
    }
  ]
};

