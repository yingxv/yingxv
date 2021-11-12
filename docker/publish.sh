#!/bin/bash
set -e

tag=ngekaworu/yingxv

docker -f ./Dockerfile -t ${tag} build;
docker push ${tag};
