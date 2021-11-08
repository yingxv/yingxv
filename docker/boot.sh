#!/bin/bash
set -e

docker pull ngekaworu/yingxv;
docker compose -f ./docker-compose.yml --env-file ~/.env -p yingxv up -d;
