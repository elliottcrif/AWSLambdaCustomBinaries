/*
 * File:   Square.cpp
 * Author: hansen
 *
 * Created on February 16, 2013, 5:09 PM
 */

#include "Square.h"

Square::Square(double sideArg, string name) : GeometricObject (name)

{
    side = sideArg;
}

double Square::getArea(){
    return side*side;
}

double Square::getPerimeter() {
    return 4 * side;
}

double Square::getSide() {
    return side;
}
