import network
import socket
import machine
import os 
import config


ssid = config.SSID
password = config.PASSWORT

station = network.WLAN(network.STA_IF)

station.active(True)
station.connect(ssid, password)

while station.isconnected() == False:
  pass

print('Verbindung hergestellt')
print(station.ifconfig())

# Konfigurieren Sie einen GPIO-Pin
pin = machine.Pin(2, machine.Pin.OUT)

def read_file(name):
    try:
        # Bestimmen des Content-Types basierend auf der Dateiendung
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

        # Öffnen der Datei im entsprechenden Modus
        with open(name, mode) as file:
            return True, content_type, file.read()
    except:
        return False, "text/plain", "404 Not Found"




def start_server():
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
                
                if filename == "/on":
                    pin.on()
                    response = "LED ist an"
                    cl.send('HTTP/1.0 200 OK\r\nContent-type: text/plain\r\n\r\n{}'.format(response).encode('utf-8'))
                    
                elif filename == "/off":
                    pin.off()
                    response = "LED ist aus"
                    cl.send('HTTP/1.0 200 OK\r\nContent-type: text/plain\r\n\r\n{}'.format(response).encode('utf-8'))
                    
                else:
                    if filename == "/":
                        filename = "/index.html"

                    found, content_type, response = read_file('www' + filename)
                    if found:
                        cl.send('HTTP/1.0 200 OK\r\nContent-type: {}\r\n\r\n{}'.format(content_type, response).encode('utf-8'))
                    else:
                        cl.send('HTTP/1.0 404 Not Found\r\nContent-type: text/html\r\n\r\n404 Not Found'.encode('utf-8'))
                        
            else:
                cl.send('HTTP/1.0 400 Bad Request\r\nContent-type: text/html\r\n\r\n400 Bad Request'.encode('utf-8'))
                
        else:
            cl.send('HTTP/1.0 400 Bad Request\r\nContent-type: text/html\r\n\r\n400 Bad Request'.encode('utf-8'))
                
        cl.close()
            
start_server()