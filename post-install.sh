#!/bin/bash

# Check if the platform is Windows
if [[ "$OSTYPE" == "msys" ]]; then
  # Run Windows command
  echo "Running Windows command..."
  # Add your Windows command here
  npx patch-package
else
  # Run macOS command
  echo "Running macOS command..."
  # Add your macOS command here
  npx patch-package && npx pod-install ios
fi
