# Fire Station Simulation

## Overview

This project simulates a fire station system that handles incoming calls based on priority and employee availability. The simulation includes employees at different levels (Junior, Senior, Manager, Director) and demonstrates how calls are dispatched and managed.

## Project Structure

- `src/`
  - `logic/`
    - `FireStation.js` - Contains the `FireStation` class for managing calls and employees.
    - `Call.js` - Defines the `Call` class for representing incoming calls.
  - `models/`
    - `Employee.js` - Defines employee classes: `Junior`, `Senior`, `Manager`, `Director`.
  - `data/`
    - `employees.json` - JSON file containing employee data.
  - `index.js` - Main entry point of the application, simulates call arrivals and handling.

## How run it

- run `npm install`
- then run `npm run start`
  