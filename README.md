Street-and-place-of-interest-locator
====================================

Enable users to interact by voice with the system to find streets, nearby restaurants and subway stations in the city of Madrid.

Languages: VoiceXML, ECMAScript and VoiceXML.

The target of this project is to develop a voice application that allows you to look for streets, restaurants or subway stations in the city of Madrid. To achieve that we have used 2 Google APIs:
Google directions API.
Google places API.

Files:
funciones.js -> Functions in ECMAScript.
VXML files-> these are VoiceXML files, they interact with the user to get the information the system need.
GRXML files-> these are Grammar files, they transform the voice of the user into text.

To make it work you need to allocate them in a Voice Server (as Voxeo Evolution), and associate a telephone number to it.

How it works:
1. The system asks for the situation of the user (street name and number).
2. The system transforms through Google directions API, the information in coordinates.
3. The system asks the user if he wants to find a street a restaurant or a subway station.
4.A If the user wants to go to a street, he will give the street information to the system.
4.B If the user wants to go to a restaurant or a subway station, the user will say a distance in meters and the system will communicate the user all the places that are inside that distance, using Google Places API. Then the user will choose one.
5. The system will indicate the user how to reach that place.
