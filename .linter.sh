#!/bin/bash
cd /home/kavia/workspace/code-generation/fundamental-rights-explorer-25310-9510e573/fundamental_rights_explorer
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

