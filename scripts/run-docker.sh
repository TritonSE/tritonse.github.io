#!/bin/bash

docker build -t tritonse/tritonse.github.io .
docker run -p 8000:8000 tritonse/tritonse.github.io
