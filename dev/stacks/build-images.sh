#!/bin/bash

for stack in $(ls); do
    docker build -t "nathanleclaire/gbg-$stack" $stack
done
