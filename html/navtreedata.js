/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "ARMS", "index.html", [
    [ "Main Page", "index.html", [
      [ "Getting Started", "index.html#getting_started", [
        [ "Installing ARMS", "index.html#installation", null ],
        [ "Using ARMS", "index.html#usage", null ]
      ] ],
      [ "How ARMS Works", "index.html#explanation", null ]
    ] ],
    [ "Motion Control Explanation", "motion_control.html", [
      [ "Move To Point Algorithm", "motion_control.html#move_to_point", [
        [ "Setup", "motion_control.html#setup", null ],
        [ "Calculating Linear and Angular Error", "motion_control.html#calculate_error", null ],
        [ "Calculating Linear Speed", "motion_control.html#lin_speed", null ],
        [ "Calculating Angular Speed", "motion_control.html#ang_speed", null ],
        [ "Modifications When Near Target Position", "motion_control.html#near_target", null ],
        [ "Reverse On Overshoot", "motion_control.html#reverse_on_overshoot", null ],
        [ "Calculating Drive Speeds", "motion_control.html#drive_speed", null ]
      ] ],
      [ "Boomerang Algorithm", "motion_control.html#boomerang", [
        [ "Carrot Point", "motion_control.html#carrot_point", null ],
        [ "Modifications When Near Target Position", "motion_control.html#near_target_boomerang", null ]
      ] ]
    ] ],
    [ "Odometry Explanation", "odometry.html", [
      [ "Odometry Steps", "odometry.html#odometry_steps", [
        [ "Step 1: Calculate Encoder Deltas", "odometry.html#step_1", null ],
        [ "Step 2: Calculate Change in Heading and Current Heading", "odometry.html#step_2", null ],
        [ "Step 3: Store Previous Positions", "odometry.html#step_3", null ],
        [ "Step 4: Calculate Local Displacement", "odometry.html#step_4", null ],
        [ "Step 5: Convert Local Displacement to Absolute Displacement and Add to Previous Position", "odometry.html#step_5", null ],
        [ "Step 6: Repeat Above Steps", "odometry.html#step_6", null ]
      ] ],
      [ "Odometry Code", "odometry.html#odometry_code", null ]
    ] ],
    [ "Tuning Guide", "tuning_guide.html", [
      [ "Odometry Setup", "tuning_guide.html#odometry_setup", [
        [ "Legal Sensor Configurations", "tuning_guide.html#legal_configs", null ],
        [ "Using a Single Parallel Tracking Wheel", "tuning_guide.html#single_tracker", null ]
      ] ],
      [ "Odometry Tuning", "tuning_guide.html#odometry_tuning", [
        [ "LLEMU Setup", "tuning_guide.html#llemu_setup", null ],
        [ "Checking Encoders", "tuning_guide.html#encoder_directions", null ],
        [ "General Tuning Notes", "tuning_guide.html#tuning_general", null ],
        [ "Tuning TPI", "tuning_guide.html#tuning_tpi", null ],
        [ "Tuning Track Width", "tuning_guide.html#tuning_track_width", null ],
        [ "Tuning Middle Distance", "tuning_guide.html#tuning_middle_distance", null ]
      ] ],
      [ "PID Tuning", "tuning_guide.html#pid_tuning", [
        [ "General PID Tuning Principles", "tuning_guide.html#general_pid_tuning", null ],
        [ "Angular PID Tuning", "tuning_guide.html#angular_pid_tuning", null ],
        [ "Linear PID Tuning", "tuning_guide.html#linear_pid_tuning", null ],
        [ "Boomerang Tuning", "tuning_guide.html#boomerang_tuning", null ]
      ] ]
    ] ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", null ],
        [ "Variables", "functions_vars.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"annotated.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';