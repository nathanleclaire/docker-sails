#!/bin/bash

echo $FILE_URL
echo hullo
wget -q $FILE_URL -O run.py
python run.py
