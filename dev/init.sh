#!/bin/bash

docker run -it --name volume_container -v /data busybox true
docker run --rm -v /usr/local/bin/docker:/docker -v /var/run/docker.sock:/docker.sock svendowideit/samba volume_container
docker run --volumes-from volume_container -d nathanleclaire/sailsjs cd /data/app && 
mkdir app && cd app
mount_smbfs //guest@$(boot2docker ip)/data/app .
