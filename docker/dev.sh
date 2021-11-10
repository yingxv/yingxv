#!/bin/bash
set -e

docker compose -f ./docker-compose.dev.yml --env-file ~/.env -p yingxv-dev up -d --build;