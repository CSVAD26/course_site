---
title: "Week 6: Physical Computing and Sensing"
---

# Week 6: Physical Computing and Sensing

Week 4: Physical Computing and Sensing

Monday, November 3rd Overview

- Review Mini Assignment 4
- Sensor Hookup Demo Part 2

- Arduino Basics

- [Overview of Arduino Microcontroller platform](https://docs.arduino.cc/learn/starting-guide/getting-started-arduino)
- [Arduino Development Environment](https://docs.arduino.cc/software/ide-v2)
- [Breadboard basics](https://learn.sparkfun.com/tutorials/how-to-use-a-breadboard/all)
- [Arduino Firmata installation](https://docs.arduino.cc/hacking/software/FirmataLibrary) / [Installing Libraries in Arduino](https://docs.arduino.cc/software/ide-v1/tutorials/installing-libraries)/ [Firmata for Processing](https://playground.arduino.cc/Interfacing/Processing/)
- Digital Inputs

Arduino has 14 digital pinouts, which have two states: LOW (0 volts) or HIGH (5 volts). We can read from these pins to determine if they are high or  low for digital inputs

Button Example- wiring a button to create a digital input to a processing sketch.

[Arduino basic button hookup diagram](https://docs.arduino.cc/built-in-examples/digital/Button)[Explanation on the use of pull down and pull up resistors](https://www.electronics-tutorials.ws/logic/pull-up-resistor.html)[Processing Java Version](https://processing.org/)[Processing Firmata sketch for digital input](https://github.com/CSVADFall25/CSVAD25_examples/tree/main/Arduino/arduino_firmata_digital_input)

- Analog Inputs

An analog input to a microcontroller is an input that can read a variable voltage, typically from 0 volts to the maximum voltage supplied to the microcontroller. The Arduino UNO has six analog inputs.

[Wiring a rotary potentiometer](https://docs.arduino.cc/learn/electronics/potentiometer-basics)

[Wiring a slide potentiometer](https://learn.adafruit.com/talking-computer-from-star-trek/wiring-slider-potentiometer)

[Wiring a force-sensitive resistor](https://learn.adafruit.com/force-sensitive-resistor-fsr/using-an-fsr)

[Wiring a light sensor](https://robotsbigdata.com/docs-arduino-light-sensor.html)

[Processing Firmata sketch for single pin analog input](https://github.com/CSVADFall25/CSVAD25_examples/tree/main/Arduino/arduino_firmata_analog_input)

To Do before Wednesday's Class:

- Reading and Reading Reflection

- [Smith et al. Voxel Invention Kit: Reconfigurable Building Blocks for Prototyping Interactive Electronic Structures](https://drive.google.com/file/d/1NhsWH4fWzw_ZsiogmotMqTXDkzbypozm/view?usp=drive_link)
- [Create a response in the reflection slide](https://docs.google.com/presentation/d/1D2pGGmFCs1M35oMovkLWtO0tMZiw-gUpdNLezdRYN8E/edit?slide=id.g24abd6a728b_0_0#slide=id.g24abd6a728b_0_0)
- Find your [team partne](https://docs.google.com/spreadsheets/d/14mRWJATAd0q7vQLdPNhKXwmVRJTFubJc6-RG4jkN3gY/edit?gid=92928251#gid=92928251)r and coordinate a time to work on this week's mini assignment
- Notify Jennifer via Slack if you think you want to use an Arduino for Project 2

Wednesday, October 29th Overview

Reading Discussion ([slides](https://docs.google.com/presentation/d/1D2pGGmFCs1M35oMovkLWtO0tMZiw-gUpdNLezdRYN8E/edit?slide=id.g24abd6a728b_0_0#slide=id.g24abd6a728b_0_0))

- Connecting Arduino and Processing
[Processing Serial.read()](https://processing.org/reference/libraries/serial/Serial_read_.html) - reading from a serial port

[Visualizing Arduino Data with Processing](https://www.arduino.cc/education/visualization-with-arduino-and-processing)[Example Firmata Code](https://github.com/CSVADFall25/CSVAD25_examples/tree/main/Arduino/Processing)

- Connecting Arduino and p5.js
Arduino -> Python Websocket-> p5.js websocket sketch

[Example code](https://github.com/CSVADFall25/CSVAD25_examples/tree/main/Arduino/p5/websocket_serial)

Sensing!

- Infared Sensor

IR detectors are little microchips with a photocell that are tuned to listen to infrared light. They are almost always used for remote control detection - every TV and DVD player has one of these in the front to listen for the IR signal from the clicker. Inside the remote control is a matching IR LED, which emits IR pulses to tell the TV to turn on, off or change channels.

[Adafruit IR sensor tutorial and sample code](https://learn.adafruit.com/ir-sensor)

- Accelerometer Multi-Pin Analog Input

The ADXL335 can measure at least +/- 3G in the X, Y and Z axis. It's useful for tilt-sensing, as well as for moderate dynamic  accelerations from motion, shock or vibration.

[Arduino Accelerometer wiring](https://learn.adafruit.com/adafruit-analog-accelerometer-breakouts/arduino-wiring)[Processing Firmata Accelerometer sketch](https://github.com/CSVADFall23/codeexamples/tree/main/week3/arduino_firmata_analog_accel)

- [Ultrasonic Distance Sensor](https://www.adafruit.com/product/3942)

Emits an ultrasonic ping, then times how long the ping takes to bounce back, enabling the calculation of the distance of an object in front of the sensor.

[Example setup](https://www.instructables.com/Simple-Arduino-and-HC-SR04-Example/) - you can also use the Arduino [Ping example code](https://github.com/CSVADFall25/CSVAD25_examples/tree/main/Arduino/p5/websocket_serial/arduino_ultrasonic_serialPrint). Note- do NOT use Firmata for this sensor.

- [PIR Motion Sensor](https://learn.adafruit.com/pir-passive-infrared-proximity-motion-sensor/using-a-pir-w-arduino)

Used to detect the general presence of people/pets, etc by detecting infrared radiation.

[Tutorial and example code](https://learn.adafruit.com/pir-passive-infrared-proximity-motion-sensor/using-a-pir-w-arduino)

- [Temperature Humidity Sensor](https://www.adafruit.com/product/4099#technical-details)

Designed for exterior weather sensing- waterproof (ish) casing. Do not immerse in water for more than one hour

Sample [Arduino code](https://learn.adafruit.com/adafruit-sht31-d-temperature-and-humidity-sensor-breakout/wiring-and-test) and hookup instructions- note: requires installing [Adafruit SHT31 library](https://docs.arduino.cc/libraries/adafruit-sht31-library/)

To Do before Monday's Class:

Complete [Mini Assignment 5](/assignments/mini-assignment-5)
