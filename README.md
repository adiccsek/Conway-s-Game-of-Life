Conway's Game of Life - JavaScript Implementation
Overview
Conway's Game of Life is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves.

This JavaScript implementation allows you to create and simulate Conway's Game of Life in your web browser.

Features
- Interactive grid where you can toggle cells to alive or dead.
- Start, stop, and reset the simulation.
- Adjustable speed for the simulation.
- Clear the grid to start a new configuration.
- Randomized board option.
- Adjustable Cellsize: When the mouse is over the board, the cellsize is changable with srcolling.

Getting Started
Prerequisites
- A modern web browser (Chrome, Firefox, Edge, Safari)

Interface Overview
- Grid: The main area where the simulation takes place. Click on the cells to toggle between alive and dead.

Control Buttons:
- Start: Begins the simulation.
- Stop: Pauses the simulation.
- Reset: Stops the simulation and clears the grid.
- Random: Creates a randomized board with live cells.
- Clear: Clears the grid without stopping the simulation.
- Speed Slider: Adjusts the speed of the simulation.

Rules of the Game
1. Birth: A dead cell with exactly three live neighbors becomes a live cell.
2. Survival: A live cell with two or three live neighbors stays alive.
3. Death: All other live cells die in the next generation. Similarly, all other dead cells stay dead.

How to Play
1. Setup the Grid: Click on the cells in the grid to set up your initial configuration. Black cells are alive, and white cells are dead.
2. Start the Simulation: Click the "Start" button to begin the simulation. Watch how the cells evolve over time.
3. Pause the Simulation: Click the "Stop" button to pause the simulation.
4. Reset the Simulation: Click the "Reset" button to clear the grid and stop the simulation.
5. Clear the Grid: Click the "Clear" button to clear the grid without stopping the simulation.
6. Adjust Speed: Use the speed slider to adjust the speed of the simulation.

Contributing
- Contributions are welcome! If you have ideas for improvements or new features, feel free to fork the repository and submit a pull request. For major changes, please open an issue first to discuss what you would like to change. We appreciate your suggestions and feedback!

Created by:
     adiccsek, Bekebiro