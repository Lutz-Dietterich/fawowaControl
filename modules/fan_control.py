
import machine

# Konfigurieren Sie den GPIO-Pin für den Lüfter
fan_pin = machine.Pin(5, machine.Pin.OUT)  # Ersetzen Sie 5 durch den tatsächlichen Pin-Nummer

def turn_fan_on():
    fan_pin.on()
    return "Lüfter ist an"

def turn_fan_off():
    fan_pin.off()
    return "Lüfter ist aus"
