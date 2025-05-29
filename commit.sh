#!/bin/bash
read -p "add your commit message ::" commit
git add .
git commit -m "$commit"
