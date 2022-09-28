## Robot Controller

#### Summary
Controller for a robot that moves in a grid.

Grid is defined by:
</br>
"[number] [number]"

Start position is defined by:
</br>
"[number] [number] [direction]"
</br>
Where number is within the boundaries of the grid, and directions is defined by a letter corresponding [N] for north, [E] for east, [S] for south and [W] for west.

The movement is defined by:
</br>
"[string]"
</br>
Where the string contains [R] for the robot to turn right, [L] for the robot to turn left and [F] for the robot to move forward in the direction it is currently facing.

Example input:
</br>
5 5
</br>
1 2 N
</br>
RFRFFRFRF

Will yield output:
</br>
Report: 1 3 N


#### Installation
Run:
</br>
<sub>npm run install</sub>
</br>
To install dependecies

#### Options
The program can either be run in the command line by running:
</br>
<sub>npm run start</sub>
</br>
As explained in the summary

The program can also be run as a fullstack application by running:
</br>
<sub>npm run serve</sub>
</br>
And then hosting the frontend/index.html file
