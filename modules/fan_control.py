'''Control the Fan based on th set tmperature or humidity '''

import machine

# Konfigurieren Sie den GPIO-Pin für den Lüfter
fan_pin = machine.Pin(5, machine.Pin.OUT)  # Ersetzen Sie 5 durch den tatsächlichen Pin-Nummer

def turn_fan_on():
    '''Turn fan on'''
    fan_pin.on()
    return "Lüfter ist an"

def turn_fan_off():
    '''Turn fan off'''
    fan_pin.off()
    return "Lüfter ist aus"
