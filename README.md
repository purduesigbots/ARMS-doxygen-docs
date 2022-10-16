# ARMS-doxygen-docs
Documentation for ARMS template, made by [Purdue SIGBots](https://purduesigbots.com/)

This template allows you to quickly setup PID and Odometry on a non-holonomic chassis.

The first thing you need to do after applying the template is setting up your robot's configuration in the \ref config.h file.

After doing this, simply call `arms::init()` inside of the `initialize` function in `main.cpp` and you can start using ARMS!

Almost everything ARMS related you will need is under the \ref arms::chassis namespace, which contains stuff such as point to point movements and turns.

PID constants and calculations are stored under the \ref arms::pid namespace, but you will likely not need to use this namespace in your code.

Odometry setup and information is located under the \ref arms::odom namespace, which is where you can get stuff like the robot's current position and heading.