
import network
import socket
import machine
import config
from modules import fan_control


def connect_to_wifi(ssid, password):

    station = network.WLAN(network.STA_IF)
    station.active(True)
    station.connect(ssid, password)

    while not station.isconnected():
        pass

    print('Verbindung hergestellt')
    print(station.ifconfig())

# Funktion zum Lesen von Dateien
def read_file(name):
    try:
        if name.endswith(".html"):
            content_type = "text/html"
            mode = 'r'
        elif name.endswith(".css"):
            content_type = "text/css"
            mode = 'r'
        elif name.endswith(".jpg") or name.endswith(".jpeg"):
            content_type = "image/jpeg"
            mode = 'rb'
        elif name.endswith(".png"):
            content_type = "image/png"
            mode = 'rb'
        else:
            content_type = "text/plain"
            mode = 'r'

        with open(name, mode) as file:
            return True, content_type, file.read()
    except:
        return False, "text/plain", "404 Not Found"

# Funktion zur Steuerung der LED
def control_led(pin, state):
    if state == "on":
        pin.on()
        return "LED ist an"
    elif state == "off":
        pin.off()
        return "LED ist aus"

# Funktion zum Senden von HTTP-Antworten
def send_http_response(client, status_code, content_type, content):
    response = f'HTTP/1.0 {status_code} OK\r\nContent-type: {content_type}\r\n\r\n{content}'
    client.send(response.encode('utf-8'))

# Hauptfunktion zum Starten des Webservers
def start_server(pin):
    addr = socket.getaddrinfo('0.0.0.0', 80)[0][-1]
    s = socket.socket()
    s.bind(addr)
    s.listen(1)

    print('Webserver läuft auf', addr)

    while True:
        cl, addr = s.accept()
        print('Client verbunden von', addr)
        request = cl.recv(1024).decode('utf-8')
        print('Request:')
        print(request)

        request_lines = request.split("\r\n")
        if request_lines:
            request_line = request_lines[0]
            parts = request_line.split(" ")
            if len(parts) > 1:
                filename = parts[1]

                if filename == "/on" or filename == "/off":
                    response = control_led(pin, filename[1:])
                    send_http_response(cl, 200, "text/plain", response)
                else:
                    if filename == "/":
                        filename = "/index.html"
                    found, content_type, response = read_file('www' + filename)
                    if found:
                        send_http_response(cl, 200, content_type, response)
                    else:
                        send_http_response(cl, 404, "text/html", "404 Not Found")
            else:
                send_http_response(cl, 400, "text/html", "400 Bad Request")
        else:
            send_http_response(cl, 400, "text/html", "400 Bad Request")

        cl.close()

# Verbindung zum WLAN herstellen
connect_to_wifi(config.SSID, config.PASSWORD)

# Konfigurieren eines GPIO-Pins
pin = machine.Pin(2, machine.Pin.OUT)

# Starten des Webservers
start_server(pin)
