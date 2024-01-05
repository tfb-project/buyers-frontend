#!/bin/bash

protoc --plugin="/usr/bin/protoc-gen-ts" \
        --ts_opt=esModuleInterop=true \
        --js_out="./" \
        --ts_out="./" \
        ./proto/tfb/buyer/buyer_service.proto