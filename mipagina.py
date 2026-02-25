# server/python_logic/mipagina.py
import sys
import json


def procesar():
    # Simulamos un proceso complejo (ej: análisis de datos)
    datos_calculados = {
        "resultado": "Análisis finalizado con éxito",
        "valor": 99.7,
        "mensaje_python": "Hola desde el corazón de Python 🐍"
    }

    # Imprimimos el resultado como JSON para que Node lo entienda fácil
    print(json.dumps(datos_calculados))


if __name__ == "__main__":
    procesar()
