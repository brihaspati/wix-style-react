#!/usr/bin/env bash

OFFLINE_CONF_DIR=.storybook-offline-config

# Copy storybook config to offline config and apply overwrites
rm -rf $OFFLINE_CONF_DIR
cp -r .storybook $OFFLINE_CONF_DIR
cp -r dev/storybook-offline-config/* $OFFLINE_CONF_DIR
