# fawowaControl

# Fahrradwohnwagen-Steuerungssystem mit Mobilem Webinterface

## Überblick
Entwicklung eines Steuerungssystems für einen Fahrradwohnwagen, das über ein mobiles Webinterface zugänglich ist und die Lebensqualität im Inneren durch intelligente Steuerung verbessert.

## Kernfunktionen

### 1. Lüftersteuerung
- Automatische Regulierung von Luftfeuchtigkeit und Temperatur durch integrierte Sensoren.
- Einsatz eines Microcontrollers zur Aktivierung des Lüfters basierend auf den Sensorwerten.

### 2. Batteriemanagement
- Überwachung des Ladestatus der Batterie zur Sicherstellung der Energieversorgung.
- Warnmeldungen bei Erreichen eines kritischen Ladestands.

### 3. Lichtsteuerung
- Steuerung der Beleuchtung über ein physisches Panel und die Webapp.
- Option für zeitgesteuerte oder sensorgesteuerte Lichtszenarien.

## Mobiles Webinterface
- Intuitive Benutzeroberfläche für die Fernsteuerung der Systemfunktionen.
- Responsives Design für die Verwendung auf verschiedenen Endgeräten.

## Hardware-Komponenten
- Microcontroller, z.B. ESP32 oder Raspberry Pi Pico, programmiert mit MicroPython.
- Sensoren für Feuchtigkeit und Temperatur.
- Spannungsmesser zur Batterieüberwachung.
- Relais und Transistoren für Lüfter und Licht.

## Software-Komponenten
- MicroPython-Firmware für den Microcontroller.
- Backend-Logik für Datenhandling und Steuerungsbefehle.
- Frontend-Webapplikation für die Nutzerinteraktion.

## Sicherheitsmerkmale
- Authentifizierungssystem für den Zugriffsschutz.
- Verschlüsselte Datenübertragung zwischen Webinterface und Hardware.

## Erweiterungsmöglichkeiten
- Anbindung von Solarpanelen zur autarken Energiegewinnung.
- Zusätzliche Sensoren für umfassendere Überwachung und Steuerung.
- Integration in bestehende Smart-Home-Systeme.

Dieses Dokument dient als Leitfaden für die Entwicklungsphase und legt die Basis für die technische Umsetzung des Projekts.
